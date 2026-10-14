const root = document.body.dataset.root || "";
const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();

function navClass(file) {
  return currentPage === file ? "active" : "";
}

function headerHtml() {
  return `
    <div class="wrap header-inner">
      <a class="brand" href="${root}index.html">
        <img src="${root}public/logo.png" alt="Ivorylabbs LLC logo" />
        <span class="serif brand-name">Ivorylabbs<span class="brand-llc">LLC</span></span>
      </a>
      <nav class="nav">
        <div class="drop">
          <button type="button">Services ▾</button>
          <div class="drop-menu">
            <div class="drop-panel">
              <a href="${root}services/website.html">Website Design<small>Sites that win clients while you sleep.</small></a>
              <a href="${root}services/web-apps.html">Web App Development<small>Custom software for how you actually work.</small></a>
              <a href="${root}services/mobile.html">Mobile App Development<small>iOS and Android in your customers’ pockets.</small></a>
              <a href="${root}services/design.html">UI/UX Design<small>Interfaces that feel obvious to use.</small></a>
              <a class="${navClass("leads-engine.html")}" href="${root}leads-engine.html">Agency Leads Engine<small>Capture, follow up, and book from one system.</small></a>
            </div>
          </div>
        </div>
        <a class="${navClass("work.html")}" href="${root}work.html">Our Work</a>
        <a class="${navClass("scripts.html")}" href="${root}scripts.html">Scripts</a>
        <a class="${navClass("order.html")}" href="${root}order.html">Explore</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-ghost" href="${root}find-services.html">Find my plan</a>
        <a class="btn btn-gold" href="${root}quote.html">Get My Free Quote</a>
      </div>
      <button class="menu-btn" type="button" data-menu-toggle aria-label="Menu"><span></span></button>
    </div>
    <div class="wrap mobile-nav" data-mobile-nav>
      <div class="kicker">Services</div>
      <a href="${root}services/website.html">Website Design</a>
      <a href="${root}services/web-apps.html">Web App Development</a>
      <a href="${root}services/mobile.html">Mobile App Development</a>
      <a href="${root}services/design.html">UI/UX Design</a>
      <a href="${root}leads-engine.html">Agency Leads Engine</a>
      <a href="${root}work.html">Our Work</a>
      <a href="${root}scripts.html">Scripts</a>
      <a href="${root}order.html">Explore services</a>
      <a href="${root}find-services.html">Find my plan</a>
      <a href="${root}portal.html">Portal</a>
      <a href="${root}quote.html">Get My Free Quote</a>
    </div>
  `;
}

function footerHtml() {
  return `
    <div class="wrap footer-grid">
      <div>
        <a class="brand" href="${root}index.html">
          <img src="${root}public/logo.png" alt="Ivorylabbs LLC logo" />
          <span class="serif brand-name">Ivorylabbs<span class="brand-llc">Digital Agency</span></span>
        </a>
        <p class="lede" style="margin-top:16px">Rooted in craft. Built for growth. We build websites, apps, and systems that take root and keep producing.</p>
        <a href="mailto:hello@ivorylabbs.com" style="color:var(--gold);display:inline-block;margin-top:16px">hello@ivorylabbs.com</a>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li><a href="${root}services/website.html">Website Design</a></li>
          <li><a href="${root}services/web-apps.html">Web App Development</a></li>
          <li><a href="${root}services/mobile.html">Mobile App Development</a></li>
          <li><a href="${root}services/design.html">UI/UX Design</a></li>
          <li><a href="${root}leads-engine.html">Agency Leads Engine</a></li>
          <li><a href="${root}method.html">How it works</a></li>
        </ul>
      </div>
      <div>
        <h3>Links</h3>
        <ul>
          <li><a href="${root}work.html">Our Work & Results</a></li>
          <li><a href="${root}quote.html">Contact</a></li>
          <li><a href="${root}portal.html">Client Portal</a></li>
          <li><a href="${root}order.html">Explore services</a></li>
        </ul>
      </div>
    </div>
    <div class="wrap legal">
      <p>© ${new Date().getFullYear()} Ivorylabbs LLC. All rights reserved.</p>
      <div>
        <a href="${root}privacy.html">Privacy Policy</a>
        &nbsp;&nbsp;
        <a href="${root}terms.html">Terms & Conditions</a>
      </div>
    </div>
  `;
}

const header = document.querySelector("[data-header]");
const footer = document.querySelector("[data-footer]");
if (header) header.innerHTML = headerHtml();
if (footer) footer.innerHTML = footerHtml();

document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => {
  document.querySelector("[data-mobile-nav]")?.classList.toggle("open");
});

window.IvoryBrief?.renderBar();

if (!document.querySelector("script[data-ivory-motion]")) {
  const motion = document.createElement("script");
  motion.src = (document.body.dataset.root || "") + "motion.js";
  motion.dataset.ivoryMotion = "1";
  document.body.appendChild(motion);
}

(function () {
  const href = (document.body.dataset.root || "") + "quote.html";
  let wa = document.querySelector(".wa");
  if (!wa) {
    wa = document.createElement("a");
    wa.className = "wa";
    document.body.appendChild(wa);
  }
  wa.href = href;
  wa.setAttribute("aria-label", "Chat with Ivorylabbs");
  wa.innerHTML =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.9 9.9 0 0 0 12.04 2C6.55 2 2.08 6.46 2.08 11.96c0 1.77.46 3.5 1.34 5.02L2 22l5.16-1.35a9.93 9.93 0 0 0 4.88 1.24h.01c5.49 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.96-7.02Zm-7.01 15.32h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.24 8.24 0 0 1-1.27-4.45c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.56-3.72 8.26-8.32 8.26Z"/></svg>';
})();
