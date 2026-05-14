/* =========================================================
   Strumenti base
   ========================================================= */
const seleziona = (selettore, radice = document) =>
  radice.querySelector(selettore);

const selezionaTutti = (selettore, radice = document) =>
  [...radice.querySelectorAll(selettore)];

/* =========================================================
   Traduzioni manuali IT / EN
   ========================================================= */
const traduzioni = {
  it: {
    page_title: "TBtech - Automazione Industriale",
    page_description:
      "TBtech: automazione industriale su misura. Software IEC 61131, progettazione CEI 64-8, consulenza, collaudo e messa in servizio.",

    nav_home: "Home",
    nav_about: "Chi siamo",
    nav_services: "Servizi",
    nav_projects: "Progetti",
    nav_contacts: "Contatti",

    btn_talk: "Parliamone",
    btn_services: "Scopri i servizi",
    btn_contact: "Contattaci",

    hero_eyebrow: "Automazione industriale · Robotica · Soluzioni su misura",
    hero_title: "Automatizziamo il futuro,<br />ottimizziamo il presente.",
    hero_intro:
      "TBtech è il partner affidabile per l’automazione industriale. Sviluppiamo soluzioni su misura per aziende che vogliono innovare, crescere e rendere i propri processi più efficienti.",
    hero_cta_primary: "Richiedi una consulenza",
    hero_cta_secondary: "Scopri i servizi",
    hero_note:
      "Utilizziamo tecnologie <strong>Beckhoff</strong>, <strong>Siemens</strong> e altri brand leader di settore per garantire la massima efficienza e stabilità.",

    proof_plc: "Software PLC",
    proof_design: "Progettazione",
    proof_machinery_title: "Direttiva Macchine",
    proof_testing: "Collaudo",

    about_title: "Chi siamo",
    about_subtitle: "Tecnologia, esperienza, passione",
    about_card_title:"Automazione industriale su misura",
    about_text:
      "TBtech nasce dall’incontro tra competenza tecnica e passione per l’innovazione. Siamo specializzati in <strong>automazione industriale</strong>, con un focus particolare sul settore <strong>siderurgico</strong>.",
    about_card_title2: "Approccio end-to-end",
    about_card_text: "Attenzione a qualità, sicurezza e tempi certi.",

    tag_reliability: "Affidabilità",
    tag_compliance: "Conformità",
    tag_performance: "Performance",

    services_title: "Servizi",
    services_subtitle: "Soluzioni tecniche conformi, robuste e scalabili",

    service_1_title: "Software custom",
    service_1_norm: "Compliant con la norma IEC 61131",
    service_1_text:
      "Sviluppiamo software personalizzati per l’automazione industriale, seguendo le normative di riferimento e garantendo affidabilità e sicurezza.",

    service_2_title: "Progettazione elettrica",
    service_2_norm: "Compliant con la norma CEI 64-8",
    service_2_text:
      "Progettiamo sistemi elettrici conformi agli standard internazionali e alle normative di settore.",

    service_3_title: "Consulenza",
    service_3_text:
      "Offriamo consulenza tecnica per aiutare le aziende a scegliere e implementare le migliori soluzioni di automazione, sempre in linea con le normative vigenti.",

    service_4_title: "Collaudo e messa in servizio",
    service_4_text:
      "Seguiamo ogni fase dell’avviamento degli impianti, garantendo risultati concreti, tempi certi e piena conformità alla Direttiva Macchine, offrendo service post collaudo.",

    projects_title: "Le nostre connessioni globali",

    contacts_title: "Contatti",
    contact_phone: "Telefono",
    contact_location: "Sede",
    contact_place: "Via Paparotti 13, Udine, Italia",

    form_title: "Scrivici",
    form_name: "Nome",
    form_message: "Messaggio",
    form_submit: "Invia",
    form_sending: "Invio in corso...",
    form_privacy:
      'I dati inviati verranno utilizzati esclusivamente per rispondere alla richiesta. <a href="privacy.html">Leggi l’informativa privacy</a>.',

    footer_rights: "Tutti i diritti riservati.",

    confirm_title: "Messaggio inviato",
    confirm_text:
      "Abbiamo ricevuto la tua richiesta e ti risponderemo il prima possibile.",
    confirm_back: "Torna al sito",

    privacy_title: "Informativa sulla Privacy",
    privacy_intro: "Ai sensi dell’art. 13 del Regolamento UE 2016/679 GDPR.",
    privacy_1_title: "1. Titolare del trattamento",
    privacy_1_text: "Il titolare del trattamento dei dati personali è:",
    privacy_2_title: "2. Tipologia di dati trattati",
    privacy_2_text:
      "Il sito raccoglie esclusivamente i dati personali forniti volontariamente dall’utente tramite il modulo di contatto, in particolare:",
    privacy_3_title: "3. Finalità del trattamento",
    privacy_3_text: "I dati personali forniti sono trattati esclusivamente per:",
    privacy_4_title: "4. Base giuridica del trattamento",
    privacy_4_text:
      "La base giuridica del trattamento è l’esecuzione di misure precontrattuali adottate su richiesta dell’interessato, ai sensi dell’art. 6, par. 1, lett. b GDPR.",
    privacy_5_title: "5. Modalità del trattamento",
    privacy_5_text:
      "Il trattamento dei dati avviene mediante strumenti informatici e telematici, con misure di sicurezza adeguate a garantire riservatezza, integrità e disponibilità dei dati.",
    privacy_6_title: "6. Conservazione dei dati",
    privacy_6_text:
      "I dati personali vengono conservati per il tempo strettamente necessario a evadere la richiesta dell’utente e comunque non oltre quanto richiesto dagli obblighi di legge.",
    privacy_7_title: "7. Comunicazione e diffusione dei dati",
    privacy_7_text:
      "I dati personali non vengono diffusi e non sono comunicati a terzi, salvo obblighi di legge o necessità tecniche legate alla gestione del sito, come hosting e servizi email.",
    privacy_8_title: "8. Diritti dell’interessato",
    privacy_8_text:
      "L’utente può esercitare in qualsiasi momento i diritti previsti dagli articoli 15-22 del GDPR, tra cui:",
    privacy_8_contact:
      'Le richieste possono essere inviate all’indirizzo email: <a href="mailto:info@tbtech.it">info@tbtech.it</a>.',
    privacy_9_title: "9. Cookie",
    privacy_9_text:
      "Il sito non utilizza cookie di profilazione né cookie per finalità di marketing. Sono utilizzati esclusivamente eventuali cookie tecnici necessari al corretto funzionamento del sito.",
    privacy_10_title: "10. Servizi di terze parti",
    privacy_10_text_1:
      "Il sito utilizza librerie e risorse tecniche di terze parti per la visualizzazione di elementi grafici interattivi, tra cui Three.js e Globe.gl, caricate tramite CDN esterni.",
    privacy_10_text_2:
      "Tali servizi possono comportare la trasmissione di dati tecnici, come indirizzo IP, informazioni sul browser e dati di connessione, necessari al caricamento delle risorse.",
    privacy_10_text_3:
      "Il sito non utilizza tali servizi per finalità di profilazione, marketing o pubblicità comportamentale.",
    privacy_11_title: "11. Modifiche alla presente informativa",
    privacy_11_text:
      "La presente informativa può essere soggetta a modifiche. Si consiglia di consultare periodicamente questa pagina.",
    privacy_updated: "Ultimo aggiornamento: aprile 2026",

    privacy_li_name: "nome;",
    privacy_li_email: "indirizzo email;",
    privacy_li_message: "contenuto del messaggio.",
    privacy_li_reply: "rispondere alle richieste inviate tramite il modulo di contatto;",
    privacy_li_info: "fornire le informazioni richieste dall’utente;",
    privacy_li_precontract: "gestire eventuali contatti precontrattuali.",
    privacy_li_access: "accesso ai propri dati personali;",
    privacy_li_edit: "rettifica o cancellazione degli stessi;",
    privacy_li_limit: "limitazione del trattamento;",
    privacy_li_object: "opposizione al trattamento;",
    privacy_li_complaint:
      "reclamo all’Autorità Garante per la Protezione dei Dati Personali."
  },

  en: {
    page_title: "TBtech - Industrial Automation",
    page_description:
      "TBtech provides tailored industrial automation, IEC 61131 software, CEI 64-8 design, consulting, testing and commissioning.",

    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contacts: "Contact",

    btn_talk: "Let’s talk",
    btn_services: "Services",
    btn_contact: "Contact us",

    hero_eyebrow: "Industrial automation · Robotics · Tailored solutions",
    hero_title: "We automate the future,<br />and optimize the present.",
    hero_intro:
      "TBtech delivers tailored industrial automation solutions for efficient, reliable and scalable processes.",
    hero_cta_primary: "Request consulting",
    hero_cta_secondary: "Explore services",
    hero_note:
      "We work with <strong>Beckhoff</strong>, <strong>Siemens</strong> and leading industrial technologies to ensure efficiency and stability.",

    proof_plc: "PLC software",
    proof_design: "Design",
    proof_machinery_title: "Machinery Directive",
    proof_testing: "Testing",

    about_title: "About us",
    about_subtitle: "Technology, experience, passion",
    about_card_title:"Tailor-made industrial automation",
    about_text:
      "TBtech combines technical expertise with a strong focus on innovation. We specialize in <strong>industrial automation</strong>, especially for the <strong>steel industry</strong>.",
    about_card_title2: "End-to-end approach",
    about_card_text: "Quality, safety and reliable timing.",

    tag_reliability: "Reliability",
    tag_compliance: "Compliance",
    tag_performance: "Performance",

    services_title: "Services",
    services_subtitle: "Compliant, robust and scalable technical solutions",

    service_1_title: "Custom software",
    service_1_norm: "IEC 61131 compliant",
    service_1_text:
      "We develop custom industrial automation software focused on reliability, safety and compliance.",

    service_2_title: "Electrical design",
    service_2_norm: "CEI 64-8 compliant",
    service_2_text:
      "We design electrical systems aligned with industry standards and technical requirements.",

    service_3_title: "Consulting",
    service_3_text:
      "We support companies in choosing and implementing effective automation solutions.",

    service_4_title: "Testing and commissioning",
    service_4_text:
      "We manage plant start-up, testing and post-commissioning service with clear timing and compliant results.",

    projects_title: "Our global connections",

    contacts_title: "Contact",
    contact_phone: "Phone",
    contact_location: "Address",
    contact_place: "Via Paparotti 13, Udine, Italy",

    form_title: "Get in touch",
    form_name: "Name",
    form_message: "Message",
    form_submit: "Send",
    form_sending: "Sending...",
    form_privacy:
      'Your data will only be used to reply to your request. <a href="privacy.html">Read the privacy policy</a>.',

    footer_rights: "All rights reserved.",

    confirm_title: "Message sent",
    confirm_text: "We have received your request and will reply as soon as possible.",
    confirm_back: "Back to website",

    privacy_title: "Privacy Policy",
    privacy_intro: "Pursuant to Article 13 of EU Regulation 2016/679 GDPR.",
    privacy_1_title: "1. Data Controller",
    privacy_1_text: "The data controller is:",
    privacy_2_title: "2. Personal data processed",
    privacy_2_text:
      "The website only collects personal data voluntarily provided through the contact form, specifically:",
    privacy_3_title: "3. Purpose of processing",
    privacy_3_text: "The personal data provided is processed only to:",
    privacy_4_title: "4. Legal basis",
    privacy_4_text:
      "The legal basis is the performance of pre-contractual measures requested by the data subject, pursuant to Article 6(1)(b) GDPR.",
    privacy_5_title: "5. Processing methods",
    privacy_5_text:
      "Data is processed using digital tools and appropriate security measures to protect confidentiality, integrity and availability.",
    privacy_6_title: "6. Data retention",
    privacy_6_text:
      "Personal data is kept only for the time needed to handle the request and no longer than required by law.",
    privacy_7_title: "7. Disclosure of data",
    privacy_7_text:
      "Personal data is not disclosed or shared with third parties, except where required by law or for technical website services such as hosting and email.",
    privacy_8_title: "8. User rights",
    privacy_8_text:
      "Users may exercise their rights under Articles 15-22 GDPR, including:",
    privacy_8_contact:
      'Requests can be sent to: <a href="mailto:info@tbtech.it">info@tbtech.it</a>.',
    privacy_9_title: "9. Cookies",
    privacy_9_text:
      "The website does not use profiling or marketing cookies. Only technical cookies necessary for website operation may be used.",
    privacy_10_title: "10. Third-party services",
    privacy_10_text_1:
      "The website uses third-party technical libraries and resources, including Three.js and Globe.gl, loaded through external CDNs.",
    privacy_10_text_2:
      "These services may involve the transmission of technical data such as IP address, browser information and connection data.",
    privacy_10_text_3:
      "These services are not used for profiling, marketing or behavioral advertising.",
    privacy_11_title: "11. Changes to this policy",
    privacy_11_text:
      "This policy may be updated. Users are advised to check this page periodically.",
    privacy_updated: "Last updated: April 2026",

    privacy_li_name: "name;",
    privacy_li_email: "email address;",
    privacy_li_message: "message content.",
    privacy_li_reply: "reply to contact form requests;",
    privacy_li_info: "provide requested information;",
    privacy_li_precontract: "manage pre-contractual contacts.",
    privacy_li_access: "access to personal data;",
    privacy_li_edit: "rectification or deletion;",
    privacy_li_limit: "restriction of processing;",
    privacy_li_object: "objection to processing;",
    privacy_li_complaint:
      "complaint to the Italian Data Protection Authority."
  }
};

function linguaCorrente() {
  return localStorage.getItem("lingua-sito") || "it";
}

function aggiornaBottoniLingua(lingua) {
  selezionaTutti("[data-lingua]").forEach((bottone) => {
    bottone.classList.toggle("attivo", bottone.dataset.lingua === lingua);
  });
}

function applicaTraduzione(lingua) {
  const dizionario = traduzioni[lingua] || traduzioni.it;

  document.documentElement.lang = lingua;

  if (dizionario.page_title) {
    document.title = dizionario.page_title;
  }

  const metaDescription = seleziona('meta[name="description"]');
  if (metaDescription && dizionario.page_description) {
    metaDescription.setAttribute("content", dizionario.page_description);
  }

  selezionaTutti("[data-i18n]").forEach((elemento) => {
    const chiave = elemento.dataset.i18n;

    if (dizionario[chiave]) {
      elemento.textContent = dizionario[chiave];
    }
  });

  selezionaTutti("[data-i18n-html]").forEach((elemento) => {
    const chiave = elemento.dataset.i18nHtml;

    if (dizionario[chiave]) {
      elemento.innerHTML = dizionario[chiave];
    }
  });

  aggiornaBottoniLingua(lingua);
}

selezionaTutti("[data-lingua]").forEach((bottone) => {
  bottone.addEventListener("click", () => {
    const lingua = bottone.dataset.lingua;

    localStorage.setItem("lingua-sito", lingua);
    applicaTraduzione(lingua);
  });
});

applicaTraduzione(linguaCorrente());

/* =========================================================
   Anno nel footer
   ========================================================= */
const annoFooter = seleziona("[data-anno]");

if (annoFooter) {
  annoFooter.textContent = new Date().getFullYear();
}

/* =========================================================
   Menu mobile
   ========================================================= */
const testata = seleziona("[data-testata]");
const pulsanteMenu = seleziona("[data-bottone-menu]");
const menuMobile = seleziona("[data-menu-mobile]");

function menuAperto() {
  return menuMobile?.classList.contains("aperto") || false;
}

function apriMenu() {
  if (!pulsanteMenu || !menuMobile) return;

  pulsanteMenu.classList.add("aperto");
  pulsanteMenu.setAttribute("aria-expanded", "true");

  menuMobile.classList.add("aperto");
  menuMobile.setAttribute("aria-hidden", "false");
}

function chiudiMenu() {
  if (!pulsanteMenu || !menuMobile) return;

  pulsanteMenu.classList.remove("aperto");
  pulsanteMenu.setAttribute("aria-expanded", "false");

  menuMobile.classList.remove("aperto");
  menuMobile.setAttribute("aria-hidden", "true");
}

function cambiaMenu() {
  menuAperto() ? chiudiMenu() : apriMenu();
}

pulsanteMenu?.addEventListener("click", cambiaMenu);

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && menuAperto()) {
    chiudiMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    chiudiMenu();
  }
});

/* =========================================================
   Link attivo e scroll fluido
   ========================================================= */
const linkMenu = selezionaTutti("[data-link-menu]");
const sezioni = ["home", "chi-siamo", "servizi", "progetti", "contatti"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function evidenziaLink(idSezione) {
  const ancora = `#${idSezione}`;

  linkMenu.forEach((link) => {
    link.classList.toggle("attivo", link.getAttribute("href") === ancora);
  });
}

function aggiornaLinkAttivo() {
  const altezzaTestata = testata?.offsetHeight || 0;
  const puntoScroll = window.scrollY + altezzaTestata + 120;

  let sezioneCorrente = "home";

  sezioni.forEach((sezione) => {
    if (sezione.offsetTop <= puntoScroll) {
      sezioneCorrente = sezione.id;
    }
  });

  evidenziaLink(sezioneCorrente);
}

function scrollVersoSezione(link, evento) {
  const destinazione = link.getAttribute("href");

  if (!destinazione || destinazione === "#") return;

  const sezione = seleziona(destinazione);
  if (!sezione) return;

  evento.preventDefault();

  const testataInterna = seleziona(".testata-interna");
  const altezzaHeader = testataInterna?.offsetHeight || 88;

  chiudiMenu();

  setTimeout(() => {
    const posizioneSezione =
      sezione.getBoundingClientRect().top + window.scrollY;

    const posizioneFinale =
      destinazione === "#progetti"
        ? posizioneSezione - altezzaHeader - 10
        : posizioneSezione - altezzaHeader - 10;

    evidenziaLink(sezione.id);

    window.scrollTo({
      top: Math.max(posizioneFinale, 0),
      behavior: "smooth",
    });
  }, 80);
}

window.addEventListener("scroll", aggiornaLinkAttivo);
aggiornaLinkAttivo();

selezionaTutti('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (evento) => {
    scrollVersoSezione(link, evento);
  });
});

/* =========================================================
   Animazioni di entrata
   ========================================================= */
const elementiAnimati = selezionaTutti(".apparizione");

if (elementiAnimati.length) {
  const osservatore = new IntersectionObserver(
    (elementi) => {
      elementi.forEach((elemento) => {
        if (elemento.isIntersecting) {
          elemento.target.classList.add("visibile");
        }
      });
    },
    { threshold: 0.12 }
  );

  elementiAnimati.forEach((elemento) => osservatore.observe(elemento));
}

/* =========================================================
   Form contatti
   ========================================================= */
const formContatti = seleziona("[data-form-contatti]");
const statoForm = seleziona("[data-stato-form]");

if (formContatti && statoForm) {
  formContatti.addEventListener("submit", () => {
    const lingua = linguaCorrente();
    statoForm.textContent = traduzioni[lingua]?.form_sending || traduzioni.it.form_sending;
  });
}

/* =========================================================
   Globo 3D
   ========================================================= */
function avviaGlobo() {
  const contenitore = document.getElementById("globo-3d");

  if (!contenitore || typeof Globe === "undefined") return;

  const altezzaGlobo = 520;

  const citta = {
    udine: {
      nome: "Udine",
      lat: 46.0711,
      lng: 13.2346,
      colore: "#0045ae",
      dimensione: 0.45,
      offsetX: 0,
      offsetY: -18,
    },
    houston: {
      nome: "Houston",
      lat: 29.7604,
      lng: -95.3698,
      colore: "#ffffff",
      dimensione: 0.22,
      offsetX: 34,
      offsetY: -8,
    },
    kingman: {
      nome: "Kingman",
      lat: 35.1894,
      lng: -114.053,
      colore: "#ffffff",
      dimensione: 0.22,
      offsetX: -34,
      offsetY: -8,
    },
    queretaro: {
      nome: "Querétaro",
      lat: 20.5888,
      lng: -100.3899,
      colore: "#ffffff",
      dimensione: 0.22,
      offsetX: -28,
      offsetY: 22,
    },
    nuevoLeon: {
      nome: "Nuevo León",
      lat: 25.5922,
      lng: -99.9962,
      colore: "#ffffff",
      dimensione: 0.22,
      offsetX: 38,
      offsetY: 12,
    },
    dusseldorf: {
      nome: "Düsseldorf",
      lat: 51.2277,
      lng: 6.7735,
      colore: "#ffffff",
      dimensione: 0.22,
      offsetX: -42,
      offsetY: -18,
    },
    bled: {
      nome: "Bled",
      lat: 46.3683,
      lng: 14.1146,
      colore: "#ffffff",
      dimensione: 0.22,
      offsetX: 36,
      offsetY: 16,
    },
    melbourne: {
      nome: "Melbourne",
      lat: -37.8136,
      lng: 144.9631,
      colore: "#ffffff",
      dimensione: 0.22,
      offsetX: 0,
      offsetY: -18,
    },
  };

  const destinazioni = [
    "houston",
    "kingman",
    "queretaro",
    "nuevoLeon",
    "dusseldorf",
    "bled",
    "melbourne",
  ];

  const punti = [citta.udine, ...destinazioni.map((nome) => citta[nome])];

  const voli = destinazioni.map((nome) => ({
    partenzaLat: citta.udine.lat,
    partenzaLng: citta.udine.lng,
    arrivoLat: citta[nome].lat,
    arrivoLng: citta[nome].lng,
    avanzamento: 0,
    velocita: 0.0016,
  }));

  const globo = Globe()(contenitore)
    .width(contenitore.clientWidth)
    .height(altezzaGlobo)
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
    .pointsData(punti)
    .pointLat("lat")
    .pointLng("lng")
    .pointColor("colore")
    .pointRadius("dimensione")
    .pointAltitude(0.025)
    .ringsData(destinazioni.map((nome) => citta[nome]))
    .ringLat("lat")
    .ringLng("lng")
    .ringColor(() => "rgba(114, 220, 28, 0.35)")
    .ringMaxRadius(1.6)
    .ringPropagationSpeed(1)
    .ringRepeatPeriod(2600);

  globo.controls().autoRotate = true;
  globo.controls().autoRotateSpeed = 1.22;

  globo.pointOfView(
    {
      lat: 28,
      lng: -35,
      altitude: 2.35,
    },
    1200
  );

  const livelloGrafico = document.createElement("div");
  livelloGrafico.className = "globe-overlay";
  contenitore.appendChild(livelloGrafico);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("flight-svg");
  livelloGrafico.appendChild(svg);

  const lineeVolo = voli.map(() => {
    const linea = document.createElementNS("http://www.w3.org/2000/svg", "path");
    linea.classList.add("flight-path");
    svg.appendChild(linea);
    return linea;
  });

  const etichetteCitta = punti.map((punto) => {
    const etichetta = document.createElement("div");
    etichetta.className =
      punto.nome === "Udine" ? "city-label city-label-home" : "city-label";
    etichetta.textContent = punto.nome;
    livelloGrafico.appendChild(etichetta);
    return etichetta;
  });

  const aerei = voli.map(() => {
    const aereo = document.createElement("div");
    aereo.className = "airplane-marker";
    aereo.textContent = "✈";
    livelloGrafico.appendChild(aereo);
    return aereo;
  });

  function radianti(valore) {
    return (valore * Math.PI) / 180;
  }

  function gradi(valore) {
    return (valore * 180) / Math.PI;
  }

  function puntoIntermedio(latA, lngA, latB, lngB, progresso) {
    const lat1 = radianti(latA);
    const lng1 = radianti(lngA);
    const lat2 = radianti(latB);
    const lng2 = radianti(lngB);

    const distanza =
      2 *
      Math.asin(
        Math.sqrt(
          Math.sin((lat2 - lat1) / 2) ** 2 +
            Math.cos(lat1) *
              Math.cos(lat2) *
              Math.sin((lng2 - lng1) / 2) ** 2
        )
      );

    if (distanza === 0) {
      return { lat: latA, lng: lngA };
    }

    const pesoA = Math.sin((1 - progresso) * distanza) / Math.sin(distanza);
    const pesoB = Math.sin(progresso * distanza) / Math.sin(distanza);

    const x =
      pesoA * Math.cos(lat1) * Math.cos(lng1) +
      pesoB * Math.cos(lat2) * Math.cos(lng2);

    const y =
      pesoA * Math.cos(lat1) * Math.sin(lng1) +
      pesoB * Math.cos(lat2) * Math.sin(lng2);

    const z = pesoA * Math.sin(lat1) + pesoB * Math.sin(lat2);

    return {
      lat: gradi(Math.atan2(z, Math.sqrt(x * x + y * y))),
      lng: gradi(Math.atan2(y, x)),
    };
  }

  function puntoSuRotta(volo, progresso) {
    const punto = puntoIntermedio(
      volo.partenzaLat,
      volo.partenzaLng,
      volo.arrivoLat,
      volo.arrivoLng,
      progresso
    );

    const altezzaRotta = 0.25 * Math.sin(Math.PI * progresso);
    return globo.getScreenCoords(punto.lat, punto.lng, altezzaRotta);
  }

  function davantiAlGlobo(lat, lng) {
    const vista = globo.pointOfView();

    const lat1 = radianti(lat);
    const lng1 = radianti(lng);
    const lat2 = radianti(vista.lat);
    const lng2 = radianti(vista.lng);

    const angolo =
      Math.sin(lat1) * Math.sin(lat2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng1 - lng2);

    return angolo > 0.08;
  }

  function aggiornaEtichette() {
    punti.forEach((punto, indice) => {
      const posizione = globo.getScreenCoords(punto.lat, punto.lng, 0.08);
      const etichetta = etichetteCitta[indice];

      const fuoriSchermo =
        posizione.x < -100 ||
        posizione.y < -100 ||
        posizione.x > contenitore.clientWidth + 100 ||
        posizione.y > altezzaGlobo + 100;

      etichetta.style.left = `${posizione.x + punto.offsetX}px`;
      etichetta.style.top = `${posizione.y + punto.offsetY}px`;
      etichetta.style.opacity =
        davantiAlGlobo(punto.lat, punto.lng) && !fuoriSchermo ? "1" : "0";
    });
  }

  function disegnaRotta(volo, indice) {
    const puntiLinea = [];
    const passaggi = 80;

    for (let i = 0; i <= passaggi; i++) {
      const progresso = i / passaggi;

      const puntoGeo = puntoIntermedio(
        volo.partenzaLat,
        volo.partenzaLng,
        volo.arrivoLat,
        volo.arrivoLng,
        progresso
      );

      if (!davantiAlGlobo(puntoGeo.lat, puntoGeo.lng)) {
        puntiLinea.push(null);
        continue;
      }

      puntiLinea.push(puntoSuRotta(volo, progresso));
    }

    let percorso = "";
    let trattoAperto = false;

    puntiLinea.forEach((punto) => {
      if (!punto) {
        trattoAperto = false;
        return;
      }

      percorso += `${trattoAperto ? "L" : "M"} ${punto.x} ${punto.y} `;
      trattoAperto = true;
    });

    lineeVolo[indice].setAttribute("d", percorso.trim());
  }

  function muoviAereo(volo, indice) {
    volo.avanzamento += volo.velocita;

    if (volo.avanzamento >= 1) {
      volo.avanzamento = 0;
    }

    const posizione = puntoSuRotta(volo, volo.avanzamento);
    const prossimaPosizione = puntoSuRotta(
      volo,
      Math.min(volo.avanzamento + 0.01, 1)
    );

    const angolo =
      (Math.atan2(
        prossimaPosizione.y - posizione.y,
        prossimaPosizione.x - posizione.x
      ) *
        180) /
      Math.PI;

    const puntoGeo = puntoIntermedio(
      volo.partenzaLat,
      volo.partenzaLng,
      volo.arrivoLat,
      volo.arrivoLng,
      volo.avanzamento
    );

    const fuoriSchermo =
      posizione.x < -60 ||
      posizione.y < -60 ||
      posizione.x > contenitore.clientWidth + 60 ||
      posizione.y > altezzaGlobo + 60;

    const aereo = aerei[indice];

    aereo.style.left = `${posizione.x}px`;
    aereo.style.top = `${posizione.y}px`;
    aereo.style.transform = `translate(-50%, -50%) rotate(${angolo}deg)`;
    aereo.style.opacity =
      davantiAlGlobo(puntoGeo.lat, puntoGeo.lng) && !fuoriSchermo ? "1" : "0";
  }

  function aggiornaGlobo() {
    svg.setAttribute("width", contenitore.clientWidth);
    svg.setAttribute("height", altezzaGlobo);

    aggiornaEtichette();

    voli.forEach((volo, indice) => {
      disegnaRotta(volo, indice);
      muoviAereo(volo, indice);
    });

    requestAnimationFrame(aggiornaGlobo);
  }

  aggiornaGlobo();

  window.addEventListener("resize", () => {
    globo.width(contenitore.clientWidth);
    globo.height(altezzaGlobo);
  });
}

window.addEventListener("load", avviaGlobo);