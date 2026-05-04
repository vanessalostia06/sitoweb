/* =========================================================
   FUNZIONI DI SUPPORTO
   ========================================================= */
const cercaUno = (selettore, radice = document) => radice.querySelector(selettore);
const cercaTutti = (selettore, radice = document) =>
  Array.from(radice.querySelectorAll(selettore));

/* =========================================================
   ANNO FOOTER
   ========================================================= */
const elementoAnno = cercaUno("[data-anno]");
if (elementoAnno) {
  elementoAnno.textContent = new Date().getFullYear();
}

/* =========================================================
   HEADER / MENU
   ========================================================= */
const testata = cercaUno("[data-testata]");
const bottoneMenu = cercaUno("[data-bottone-menu]");
const menuMobile = cercaUno("[data-menu-mobile]");

function apriMenuMobile() {
  if (!bottoneMenu || !menuMobile) return;
  menuMobile.classList.add("aperto");
  bottoneMenu.classList.add("aperto");
  bottoneMenu.setAttribute("aria-expanded", "true");
  menuMobile.setAttribute("aria-hidden", "false");
}

function chiudiMenuMobile() {
  if (!bottoneMenu || !menuMobile) return;
  menuMobile.classList.remove("aperto");
  bottoneMenu.classList.remove("aperto");
  bottoneMenu.setAttribute("aria-expanded", "false");
  menuMobile.setAttribute("aria-hidden", "true");
}

function menuMobileAperto() {
  return menuMobile ? menuMobile.classList.contains("aperto") : false;
}

function toggleMenuMobile() {
  menuMobileAperto() ? chiudiMenuMobile() : apriMenuMobile();
}

if (bottoneMenu) {
  bottoneMenu.addEventListener("click", toggleMenuMobile);
}

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && menuMobileAperto()) {
    chiudiMenuMobile();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    chiudiMenuMobile();
  }
});

/* =========================================================
   LINK MENU ATTIVO + SCROLL
   ========================================================= */
const tuttiLinkMenu = cercaTutti("[data-link-menu]");
const idSezioni = ["home", "chi-siamo", "servizi", "progetti", "contatti"];
const sezioniPagina = idSezioni
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function impostaLinkAttivo(idSezione) {
  const hash = `#${idSezione}`;
  tuttiLinkMenu.forEach((link) => {
    link.classList.toggle("attivo", link.getAttribute("href") === hash);
  });
}

function aggiornaLinkAttivoDaScroll() {
  const altezzaTestata = testata ? testata.offsetHeight : 0;
  const puntoRiferimento = window.scrollY + altezzaTestata + 120;

  let sezioneAttiva = "home";

  sezioniPagina.forEach((sezione) => {
    if (sezione.offsetTop <= puntoRiferimento) {
      sezioneAttiva = sezione.id;
    }
  });

  impostaLinkAttivo(sezioneAttiva);
}

window.addEventListener("scroll", aggiornaLinkAttivoDaScroll);
aggiornaLinkAttivoDaScroll();

cercaTutti('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (evento) => {
    const destinazione = link.getAttribute("href");
    if (!destinazione || destinazione === "#") return;

    const elementoDestinazione = cercaUno(destinazione);
    if (!elementoDestinazione) return;

    evento.preventDefault();
    chiudiMenuMobile();

    const altezzaTestata = testata ? testata.offsetHeight : 0;

    let posizioneY;

    if (destinazione === "#progetti") {
      const altezzaViewport = window.innerHeight;
      const altezzaElemento = elementoDestinazione.offsetHeight;

      posizioneY =
        elementoDestinazione.getBoundingClientRect().top +
        window.scrollY -
        altezzaViewport / 2 +
        altezzaElemento / 2;
    } else {
      posizioneY =
        elementoDestinazione.getBoundingClientRect().top +
        window.scrollY -
        altezzaTestata -
        10;
    }

    impostaLinkAttivo(elementoDestinazione.id);

    window.scrollTo({
      top: Math.max(posizioneY, 0),
      behavior: "smooth",
    });
  });
});

/* =========================================================
   ANIMAZIONI APPARIZIONE
   ========================================================= */
const elementiDaMostrare = cercaTutti(".apparizione");

if (elementiDaMostrare.length) {
  const osservatoreApparizione = new IntersectionObserver(
    (voci) => {
      voci.forEach((voce) => {
        if (voce.isIntersecting) {
          voce.target.classList.add("visibile");
        }
      });
    },
    { threshold: 0.12 }
  );

  elementiDaMostrare.forEach((elemento) =>
    osservatoreApparizione.observe(elemento)
  );
}

/* =========================================================
   FORM CONTATTI
   ========================================================= */
const formContatti = cercaUno("[data-form-contatti]");
const statoForm = cercaUno("[data-stato-form]");

if (formContatti && statoForm) {
  formContatti.addEventListener("submit", () => {
    statoForm.textContent = "Invio in corso...";
  });
}

/* =========================================================
   GLOBO 3D CON AEREI
   ========================================================= */
function initGlobe() {
  const container = document.getElementById("globo-3d");
  if (!container || typeof Globe === "undefined") return;

  const CITIES = {
    udine: { name: "Udine", lat: 46.0711, lng: 13.2346, color: "#0045ae", size: 0.45, ox: 0, oy: -18 },
    houston: { name: "Houston", lat: 29.7604, lng: -95.3698, color: "#ffffff", size: 0.22, ox: 34, oy: -8 },
    kingman: { name: "Kingman", lat: 35.1894, lng: -114.053, color: "#ffffff", size: 0.22, ox: -34, oy: -8 },
    queretaro: { name: "Querétaro", lat: 20.5888, lng: -100.3899, color: "#ffffff", size: 0.22, ox: -28, oy: 22 },
    nuevoLeon: { name: "Nuevo León", lat: 25.5922, lng: -99.9962, color: "#ffffff", size: 0.22, ox: 38, oy: 12 },
    dusseldorf: { name: "Düsseldorf", lat: 51.2277, lng: 6.7735, color: "#ffffff", size: 0.22, ox: -42, oy: -18 },
    bled: { name: "Bled", lat: 46.3683, lng: 14.1146, color: "#ffffff", size: 0.22, ox: 36, oy: 16 },
    melbourne: { name: "Melbourne", lat: -37.8136, lng: 144.9631, color: "#ffffff", size: 0.22, ox: 0, oy: -18 },
  };

  const ROUTES = ["houston", "kingman", "queretaro", "nuevoLeon", "dusseldorf", "bled", "melbourne"];
  const pointsData = [CITIES.udine, ...ROUTES.map((city) => CITIES[city])];

  const flightsData = ROUTES.map((dest) => ({
    dest,
    startLat: CITIES.udine.lat,
    startLng: CITIES.udine.lng,
    endLat: CITIES[dest].lat,
    endLng: CITIES[dest].lng,
    progress: 0,
    speed: 0.0016,
  }));

  const globe = Globe()(container)
    .width(container.clientWidth)
    .height(520)
    //https://unpkg.com/three-globe@2.45.2/example/img/earth-night.jpg
    //https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
    .pointsData(pointsData)
    .pointLat("lat")
    .pointLng("lng")
    .pointColor("color")
    .pointRadius("size")
    .pointAltitude(0.025)
    .ringsData(ROUTES.map((dest) => CITIES[dest]))
    .ringLat("lat")
    .ringLng("lng")
    .ringColor(() => "rgba(114, 220, 28, 0.35)")
    .ringMaxRadius(1.6)
    .ringPropagationSpeed(1)
    .ringRepeatPeriod(2600);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.22;

  globe.pointOfView(
    {
      lat: 28,
      lng: -35,
      altitude: 2.35,
    },
    1200
  );

  const overlay = document.createElement("div");
  overlay.className = "globe-overlay";
  container.appendChild(overlay);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("flight-svg");
  overlay.appendChild(svg);

  const routePaths = flightsData.map(() => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("flight-path");
    svg.appendChild(path);
    return path;
  });

  const cityElements = pointsData.map((city) => {
    const label = document.createElement("div");
    label.className = city.name === "Udine" ? "city-label city-label-home" : "city-label";
    label.textContent = city.name;
    overlay.appendChild(label);
    return label;
  });

  const airplaneElements = flightsData.map(() => {
    const plane = document.createElement("div");
    plane.className = "airplane-marker";
    plane.textContent = "✈";
    overlay.appendChild(plane);
    return plane;
  });

  function toRad(value) {
    return value * Math.PI / 180;
  }

  function toDeg(value) {
    return value * 180 / Math.PI;
  }

  function interpolateRoute(startLat, startLng, endLat, endLng, t) {
    const lat1 = toRad(startLat);
    const lng1 = toRad(startLng);
    const lat2 = toRad(endLat);
    const lng2 = toRad(endLng);

    const d =
      2 *
      Math.asin(
        Math.sqrt(
          Math.sin((lat2 - lat1) / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin((lng2 - lng1) / 2) ** 2
        )
      );

    if (d === 0) return { lat: startLat, lng: startLng };

    const A = Math.sin((1 - t) * d) / Math.sin(d);
    const B = Math.sin(t * d) / Math.sin(d);

    const x = A * Math.cos(lat1) * Math.cos(lng1) + B * Math.cos(lat2) * Math.cos(lng2);
    const y = A * Math.cos(lat1) * Math.sin(lng1) + B * Math.cos(lat2) * Math.sin(lng2);
    const z = A * Math.sin(lat1) + B * Math.sin(lat2);

    return {
      lat: toDeg(Math.atan2(z, Math.sqrt(x * x + y * y))),
      lng: toDeg(Math.atan2(y, x)),
    };
  }

  function getPointOnRail(flight, t) {
    const p = interpolateRoute(
      flight.startLat,
      flight.startLng,
      flight.endLat,
      flight.endLng,
      t
    );

    const altitude = 0.25 * Math.sin(Math.PI * t);
    return globe.getScreenCoords(p.lat, p.lng, altitude);
  }

    function isDavantiAlGlobo(lat, lng) {
    const pov = globe.pointOfView();

    const lat1 = toRad(lat);
    const lng1 = toRad(lng);
    const lat2 = toRad(pov.lat);
    const lng2 = toRad(pov.lng);

    const cosAngolo =
      Math.sin(lat1) * Math.sin(lat2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng1 - lng2);

    return cosAngolo > 0.08;
  }
  function aggiornaOverlay() {
    svg.setAttribute("width", container.clientWidth);
    svg.setAttribute("height", 520);

    pointsData.forEach((city, index) => {
      const pos = globe.getScreenCoords(city.lat, city.lng, 0.08);
      const label = cityElements[index];

      label.style.left = `${pos.x + city.ox}px`;
      label.style.top = `${pos.y + city.oy}px`;
      const visibile = isDavantiAlGlobo(city.lat, city.lng);

      label.style.opacity =
        !visibile ||
        pos.x < -100 ||
        pos.y < -100 ||
        pos.x > container.clientWidth + 100 ||
        pos.y > 620
          ? "0"
          : "1";
    });

    flightsData.forEach((flight, index) => {
      const samples = [];
      const steps = 80;

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;

        const geoPoint = interpolateRoute(
          flight.startLat,
          flight.startLng,
          flight.endLat,
          flight.endLng,
          t
        );

        if (!isDavantiAlGlobo(geoPoint.lat, geoPoint.lng)) {
          samples.push(null);
          continue;
        }

        const p = getPointOnRail(flight, t);
                samples.push(p);
              }

        let d = "";
        let lineaAperta = false;

        samples.forEach((p) => {
          if (!p) {
            lineaAperta = false;
            return;
          }

          d += `${lineaAperta ? "L" : "M"} ${p.x} ${p.y} `;
          lineaAperta = true;
        });

        routePaths[index].setAttribute("d", d.trim());
      flight.progress += flight.speed;
      if (flight.progress >= 1) {
        flight.progress = 0;
      }

      const current = getPointOnRail(flight, flight.progress);
      const next = getPointOnRail(flight, Math.min(flight.progress + 0.01, 1));

      const angle = Math.atan2(next.y - current.y, next.x - current.x) * 180 / Math.PI;

      const plane = airplaneElements[index];

      plane.style.left = `${current.x}px`;
      plane.style.top = `${current.y}px`;
      plane.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      const puntoVisibile = interpolateRoute(
        flight.startLat,
        flight.startLng,
        flight.endLat,
        flight.endLng,
        flight.progress
      );

      const aereoVisibile = isDavantiAlGlobo(puntoVisibile.lat, puntoVisibile.lng);

      plane.style.opacity =
        !aereoVisibile ||
        current.x < -60 ||
        current.y < -60 ||
        current.x > container.clientWidth + 60 ||
        current.y > 580
          ? "0"
          : "1";
    });

    requestAnimationFrame(aggiornaOverlay);
  }

  aggiornaOverlay();

  window.addEventListener("resize", () => {
    globe.width(container.clientWidth);
    globe.height(520);
  });
}
window.addEventListener("load", initGlobe);