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
   HEADER FISSO
   ========================================================= */
const testata = cercaUno("[data-testata]");

/* =========================================================
   MENU MOBILE A TENDINA
   ========================================================= */
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
  if (!menuMobile) return false;
  return menuMobile.classList.contains("aperto");
}

function toggleMenuMobile() {
  if (menuMobileAperto()) {
    chiudiMenuMobile();
  } else {
    apriMenuMobile();
  }
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

cercaTutti('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (evento) => {
    const destinazione = link.getAttribute("href");
    if (!destinazione || destinazione === "#") return;

    const elementoDestinazione = cercaUno(destinazione);
    if (!elementoDestinazione) return;

    evento.preventDefault();
    chiudiMenuMobile();

    const altezzaTestata = testata ? testata.offsetHeight : 0;

    const posizioneY =
      elementoDestinazione.getBoundingClientRect().top +
      window.scrollY -
      altezzaTestata -
      10;

    impostaLinkAttivo(elementoDestinazione.id);

    window.scrollTo({
      top: Math.max(posizioneY, 0),
      behavior: "smooth",
    });
  });
});

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
    {
      threshold: 0.12,
    }
  );

  elementiDaMostrare.forEach((elemento) =>
    osservatoreApparizione.observe(elemento)
  );
}

/* =========================================================
   DATI PROGETTI
   ========================================================= */
const PROGETTI = [
  {
    id: "progetto-1",
    titolo: "Revamping linea automazione",
    testo: "Aggiornamento logiche PLC e ottimizzazione tempi ciclo su impianto industriale.",
    luogo: "Udine, IT",
    coordinate: [46.0620, 13.2346],
    immagine: "https://images.unsplash.com/photo-1581091215367-59ab6b74ac46?auto=format&fit=crop&w=700&q=70",
    tag: ["PLC", "HMI"]
  },
  {
    id: "progetto-2",
    titolo: "Messa in servizio quadro e I/O remoti",
    testo: "Avviamento e collaudo con verifiche funzionali e conformità Direttiva Macchine.",
    luogo: "Trieste, IT",
    coordinate: [45.6495, 13.7768],
    immagine: "https://images.unsplash.com/photo-1581092334494-1b1c2b6c7a90?auto=format&fit=crop&w=700&q=70",
    tag: ["Collaudo", "Safety"]
  },
  {
    id: "progetto-3",
    titolo: "Integrazione drives e diagnostica",
    testo: "Integrazione sistemi motion e diagnostica avanzata per riduzione downtime.",
    luogo: "Verona, IT",
    coordinate: [45.4384, 10.9916],
    immagine: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=700&q=70",
    tag: ["Motion", "Diagnostica"]
  }
];

/* =========================================================
   ELEMENTI PROGETTI
   ========================================================= */
const contenitoreGrigliaProgetti = cercaUno("[data-griglia-progetti]");
const elementoConteggioProgetti = cercaUno("[data-conteggio-progetti]");
const inputRicercaProgetti = cercaUno("[data-cerca-progetti]");
const bottoneResetProgetti = cercaUno("[data-reset-progetti]");

function pulisciHtml(testo) {
  return String(testo)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function creaSchedaProgetto(progetto) {
  const htmlTag = (progetto.tag || [])
    .slice(0, 2)
    .map((etichetta) => `<span class="badge-progetto">${pulisciHtml(etichetta)}</span>`)
    .join(" ");

  return `
    <article
      class="scheda-progetto"
      data-id-progetto="${pulisciHtml(progetto.id)}"
      tabindex="0"
      role="button"
      aria-label="Apri progetto ${pulisciHtml(progetto.titolo)}"
    >
      <img
        class="immagine-progetto"
        src="${progetto.immagine}"
        alt=""
        loading="lazy"
      />
      <div class="corpo-progetto">
        <h4 class="titolo-progetto">${pulisciHtml(progetto.titolo)}</h4>
        <p class="testo-progetto">${pulisciHtml(progetto.testo)}</p>
        <div class="info-progetto">
          <span>${pulisciHtml(progetto.luogo)}</span>
          <span style="opacity:.8">·</span>
          ${htmlTag}
        </div>
      </div>
    </article>
  `;
}

function renderizzaProgetti(lista) {
  if (!contenitoreGrigliaProgetti || !elementoConteggioProgetti) return;

  contenitoreGrigliaProgetti.innerHTML = lista.map(creaSchedaProgetto).join("");
  elementoConteggioProgetti.textContent = `${lista.length} progetti`;

  const schede = cercaTutti("[data-id-progetto]", contenitoreGrigliaProgetti);

  schede.forEach((scheda) => {
    scheda.addEventListener("click", () => {
      evidenziaProgetto(scheda.dataset.idProgetto);
    });

    scheda.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        evidenziaProgetto(scheda.dataset.idProgetto);
      }
    });
  });
}

renderizzaProgetti(PROGETTI);

/* =========================================================
   MAPPA
   ========================================================= */
let mappa;
let markerPerId = new Map();

function inizializzaMappa() {
  const elementoMappa = cercaUno("#mappa-progetti");
  if (!elementoMappa || typeof L === "undefined") return;

  mappa = L.map("mappa-progetti", {
    scrollWheelZoom: false,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap",
  }).addTo(mappa);

  const limiti = [];

  PROGETTI.forEach((progetto) => {
    const marker = L.marker(progetto.coordinate).addTo(mappa);

    marker.bindPopup(
      `<strong>${pulisciHtml(progetto.titolo)}</strong><br>${pulisciHtml(progetto.luogo)}`
    );

    markerPerId.set(progetto.id, marker);
    limiti.push(progetto.coordinate);
  });

  if (limiti.length) {
    mappa.fitBounds(limiti, {
      padding: [24, 24],
    });
  }
}

inizializzaMappa();

function evidenziaProgetto(idProgetto) {
  const progetto = PROGETTI.find((elemento) => elemento.id === idProgetto);
  if (!progetto || !mappa) return;

  const marker = markerPerId.get(idProgetto);

  if (marker) {
    mappa.setView(progetto.coordinate, Math.max(mappa.getZoom(), 10), {
      animate: true,
    });
    marker.openPopup();
  }

  if (contenitoreGrigliaProgetti) {
    cercaTutti("[data-id-progetto]", contenitoreGrigliaProgetti).forEach((scheda) => {
      scheda.classList.toggle(
        "evidenziato",
        scheda.dataset.idProgetto === idProgetto
      );
    });
  }
}

/* =========================================================
   FILTRO PROGETTI
   ========================================================= */
function normalizzaTesto(testo) {
  return String(testo)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function applicaFiltroProgetti() {
  if (!inputRicercaProgetti) return;

  const query = normalizzaTesto(inputRicercaProgetti.value.trim());

  if (!query) {
    renderizzaProgetti(PROGETTI);
    return;
  }

  const filtrati = PROGETTI.filter((progetto) => {
    const testoCompleto = normalizzaTesto(
      [
        progetto.titolo,
        progetto.testo,
        progetto.luogo,
        ...(progetto.tag || []),
      ].join(" ")
    );

    return testoCompleto.includes(query);
  });

  renderizzaProgetti(filtrati);
}

if (inputRicercaProgetti) {
  inputRicercaProgetti.addEventListener("input", applicaFiltroProgetti);
}

if (bottoneResetProgetti) {
  bottoneResetProgetti.addEventListener("click", () => {
    if (!inputRicercaProgetti) return;

    inputRicercaProgetti.value = "";
    renderizzaProgetti(PROGETTI);
  });
}

/* =========================================================
   FORM DEMO
   ========================================================= */
const formContatti = cercaUno("[data-form-contatti]");
const statoForm = cercaUno("[data-stato-form]");

if (formContatti && statoForm) {
  formContatti.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dati = Object.fromEntries(new FormData(formContatti).entries());

    statoForm.textContent =
      `Messaggio pronto: ${dati.name} (${dati.email}). Ti ricontatteremo a breve.`;

    formContatti.reset();
  });
}