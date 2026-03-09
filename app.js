/* ========= Helpers ========= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ========= Year ========= */
const yearEl = $("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ========= Sticky header elevation ========= */
const header = $("[data-elevate]");
const onScrollElevate = () => {
  if (!header) return;
  if (window.scrollY > 6) header.classList.add("is-elevated");
  else header.classList.remove("is-elevated");
};
window.addEventListener("scroll", onScrollElevate, { passive: true });
onScrollElevate();

/* ========= Mobile menu ========= */
const burger = $("[data-burger]");
const drawer = $("[data-drawer]");

const closeDrawer = () => {
  if (!drawer || !burger) return;
  drawer.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
};

if (burger && drawer) {
  burger.addEventListener("click", () => {
    const open = drawer.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}

/* ========= Smooth scroll + close drawer ========= */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    closeDrawer();

    const headerOffset = header?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerOffset - 10;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

/* ========= Active nav on scroll ========= */
const navLinks = $$("[data-nav]");
const sectionIds = ["#home", "#chi-siamo", "#servizi", "#progetti", "#contatti"];
const sections = sectionIds.map(id => document.querySelector(id)).filter(Boolean);

const setActiveNav = (id) => {
  navLinks.forEach(l => {
    const isActive = l.getAttribute("href") === id;
    l.classList.toggle("is-active", isActive);
  });
};

if (sections.length) {
  const ioNav = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) {
      const hash = visible.target.id === "home" ? "#home" : `#${visible.target.id}`;
      setActiveNav(hash);
    }
  }, { root: null, threshold: [0.15, 0.3, 0.45, 0.6] });

  sections.forEach(s => ioNav.observe(s));
}

/* ========= Reveal on scroll ========= */
const revealEls = $$(".reveal");
if (revealEls.length) {
  const ioReveal = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-in");
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => ioReveal.observe(el));
}

/* ========= Hero parallax (leggero) ========= */
const heroParallax = $("[data-hero-parallax]");
if (heroParallax) {
  const onMove = (e) => {
    const r = heroParallax.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / r.width;   // -0.5..0.5
    const dy = (e.clientY - cy) / r.height;

    heroParallax.style.transform = `translate3d(${dx * 10}px, ${dy * 10}px, 0)`;
  };

  window.addEventListener("mousemove", onMove, { passive: true });

  window.addEventListener("scroll", () => {
    const y = Math.min(window.scrollY, 400);
    heroParallax.style.filter = `drop-shadow(0 28px 80px rgba(0,0,0,.55))`;
    heroParallax.style.opacity = `${Math.max(0.85, 1 - y / 2600)}`;
  }, { passive: true });
}

/* ========= Progetti data ========= */
const PROJECTS = [
  {
    id: "p1",
    title: "Revamping linea automazione",
    text: "Aggiornamento logiche PLC e ottimizzazione tempi ciclo su impianto industriale.",
    location: "Udine, IT",
    coords: [46.0620, 13.2346],
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b74ac46?auto=format&fit=crop&w=700&q=70",
    tags: ["PLC", "HMI"]
  },
  {
    id: "p2",
    title: "Messa in servizio quadro e I/O remoti",
    text: "Avviamento e collaudo con verifiche funzionali e conformità Direttiva Macchine.",
    location: "Trieste, IT",
    coords: [45.6495, 13.7768],
    image: "https://images.unsplash.com/photo-1581092334494-1b1c2b6c7a90?auto=format&fit=crop&w=700&q=70",
    tags: ["Collaudo", "Safety"]
  },
  {
    id: "p3",
    title: "Integrazione drives e diagnostica",
    text: "Integrazione sistemi motion e diagnostica avanzata per riduzione downtime.",
    location: "Verona, IT",
    coords: [45.4384, 10.9916],
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=700&q=70",
    tags: ["Motion", "Diagnostica"]
  }
];

/* ========= Render project cards ========= */
const grid = $("[data-project-grid]");
const countEl = $("[data-project-count]");
const searchInput = $("[data-project-search]");
const resetBtn = $("[data-reset]");

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectCard(p) {
  const tagHtml = (p.tags || []).slice(0, 2).map(t => `<span class="badge">${escapeHtml(t)}</span>`).join(" ");
  return `
    <article class="project" data-project-id="${escapeHtml(p.id)}" tabindex="0" role="button" aria-label="Apri progetto ${escapeHtml(p.title)}">
      <img class="project-img" src="${p.image}" alt="" loading="lazy" />
      <div class="project-body">
        <h4 class="project-title">${escapeHtml(p.title)}</h4>
        <p class="project-text">${escapeHtml(p.text)}</p>
        <div class="project-loc">
          <span>${escapeHtml(p.location)}</span>
          <span style="opacity:.8">·</span>
          ${tagHtml}
        </div>
      </div>
    </article>
  `;
}

let map, markersById = new Map();

function renderProjects(list) {
  if (!grid || !countEl) return;

  grid.innerHTML = list.map(projectCard).join("");
  countEl.textContent = `${list.length} progetti`;

  $$("[data-project-id]", grid).forEach(card => {
    card.addEventListener("click", () => focusProject(card.dataset.projectId));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        focusProject(card.dataset.projectId);
      }
    });
  });
}

renderProjects(PROJECTS);

/* ========= Leaflet map ========= */
function initMap() {
  const mapEl = $("#map");
  if (!mapEl || typeof L === "undefined") return;

  map = L.map("map", { scrollWheelZoom: false });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const bounds = [];

  PROJECTS.forEach(p => {
    const marker = L.marker(p.coords).addTo(map);
    marker.bindPopup(`<strong>${escapeHtml(p.title)}</strong><br>${escapeHtml(p.location)}`);
    markersById.set(p.id, marker);
    bounds.push(p.coords);
  });

  if (bounds.length) map.fitBounds(bounds, { padding: [24, 24] });
}
initMap();

function focusProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p || !map) return;

  const marker = markersById.get(id);
  if (marker) {
    map.setView(p.coords, Math.max(map.getZoom(), 10), { animate: true });
    marker.openPopup();
  }

  if (grid) {
    $$("[data-project-id]", grid).forEach(el => {
      el.style.outline = (el.dataset.projectId === id) ? "2px solid rgba(47,107,255,.55)" : "none";
    });
  }
}

/* ========= Search filter ========= */
function normalize(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function applyFilter() {
  if (!searchInput) return;
  const q = normalize(searchInput.value.trim());
  if (!q) return renderProjects(PROJECTS);

  const filtered = PROJECTS.filter(p => {
    const hay = normalize([p.title, p.text, p.location, ...(p.tags || [])].join(" "));
    return hay.includes(q);
  });

  renderProjects(filtered);
}

if (searchInput) searchInput.addEventListener("input", applyFilter);
if (resetBtn) resetBtn.addEventListener("click", () => {
  if (!searchInput) return;
  searchInput.value = "";
  renderProjects(PROJECTS);
});

/* ========= Contact form (demo) ========= */
const form = $("[data-contact-form]");
const statusEl = $("[data-form-status]");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    statusEl.textContent = `Messaggio pronto: ${data.name} (${data.email}). Ti ricontatteremo a breve.`;
    form.reset();
  });
}