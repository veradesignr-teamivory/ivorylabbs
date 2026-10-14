(function () {
  const work = document.querySelector("[data-work]");
  if (work) {
    work.innerHTML = `
      <section class="wrap work-hero">
        <h1 class="serif">Our Work</h1>
        <p class="lede">See how careful web design can improve a brand and a real online presence.</p>
      </section>
      <section class="wrap client-wall">
        <p class="kicker gold-dim">Previous clients</p>
        <div class="client-grid">
          ${IVORY_CLIENTS.map((client) => {
            const faint = client.faint ? " is-faint" : "";
            return `<figure class="client-logo${faint}"><img src="${client.image}" alt="${client.name}"><figcaption>${client.name}</figcaption></figure>`;
          }).join("")}
        </div>
      </section>
      <section class="wrap work-grid">
        ${IVORY_WORK.map((item) => {
          const shot = item.image
            ? `<img class="work-shot-img" src="${item.image}" alt="${item.title}">`
            : `<div class="work-shot theme-${item.theme}"><span>${item.title.split(" ")[0]}</span></div>`;
          return `
          <article class="work-card">
            ${shot}
            <div class="work-meta">
              <h3>${item.title}</h3>
              <p>${item.place}</p>
              <a href="quote.html">View live site →</a>
            </div>
          </article>`;
        }).join("")}
      </section>
    `;
    window.ivoryPunchClientLogos?.(work.querySelector(".client-grid"));
  }

  const scripts = document.querySelector("[data-scripts]");
  if (scripts) {
    scripts.innerHTML = `
      <section class="wrap scripts-hero">
        <div>
          <p class="kicker gold-dim">Ready-made systems</p>
          <h1 class="serif">Ship faster with production-ready scripts</h1>
          <p class="lede quiz-sub">Websites and systems Ivorylabbs has already shipped. Request a script, we deploy it with docs and support, then you own the source.</p>
        </div>
        <div class="script-stats">
          <div><strong>3</strong><span>Same-day delivery</span></div>
          <div><strong>100%</strong><span>Production-ready</span></div>
          <div><strong>Free</strong><span>Lifetime support</span></div>
        </div>
      </section>
      <section class="wrap">
        <div class="script-tags">
          <span>Same-day delivery</span><span>Full source code</span><span>Documented</span><span>Lifetime support</span>
        </div>
        <div class="script-grid">
          ${IVORY_SCRIPTS.map(
            (s) => `
            <article class="script-card">
              <div class="work-shot theme-${s.theme}"><span>${s.name.split(" ")[0]}</span></div>
              <h3>${s.name}</h3>
              <p class="script-tag">${s.tag}</p>
              <p>${s.blurb}</p>
              <p class="svc-price">${formatIvoryPrice(s)}</p>
              <div class="svc-actions">
                <button class="btn btn-gold" type="button" data-buy-script="${s.id}">Request this script</button>
                <button type="button" data-script-details="${s.id}">Details</button>
              </div>
            </article>
          `,
          ).join("")}
        </div>
      </section>
      <section class="section band">
        <div class="wrap">
          <h2 class="serif">More than a script. A complete product.</h2>
          <p class="lede quiz-sub">Every script ships production-ready: source, docs, and a path to customise.</p>
          <div class="lp-grid">
            <article class="card"><h3>Full source code</h3><p>Yours to host, edit, and extend.</p></article>
            <article class="card"><h3>Clean architecture</h3><p>Readable structure, not a dump of files.</p></article>
            <article class="card"><h3>Docs &amp; handoff</h3><p>Enough to launch without guessing.</p></article>
            <article class="card"><h3>Lifetime support</h3><p>Questions after you go live still get an answer.</p></article>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <h2 class="serif">Everything you need to know about our scripts.</h2>
          <div class="faq">
            <details open><summary>What website scripts does Ivorylabbs offer?</summary><p>Church sites, club sites, school tools, and other production systems we have already shipped for clients, cleaned, documented, and ready to deploy.</p></details>
            <details><summary>Can I get a church website in Nigeria from Ivorylabbs?</summary><p>Yes. The church script is built for ministries that need sermons, events, giving, and an admin a volunteer can actually use.</p></details>
            <details><summary>What is a school result management script?</summary><p>A system for entering results, managing classes, and giving parents a login, instead of paper and WhatsApp groups.</p></details>
            <details><summary>What’s included when I request a website script?</summary><p>Source code, documentation, same-day delivery on current products, and lifetime support for that version.</p></details>
            <details><summary>Can Ivorylabbs still build a custom site?</summary><p>Yes. If a script is not the right shape, we design and build from scratch, start a custom project below.</p></details>
          </div>
        </div>
      </section>
      <section class="lp-cta">
        <div class="wrap band-inner">
          <div>
            <h2 class="serif">We’ll build it for you.</h2>
            <p>Don’t see what you need? Tell us the job and we’ll quote a custom build.</p>
          </div>
          <div class="cta-row">
            <a class="btn btn-gold btn-lg" href="quote.html">Start a custom project</a>
            <a class="btn btn-lg ghost-light" href="work.html">View our work</a>
          </div>
        </div>
      </section>
      <div class="overlay" data-script-modal hidden>
        <div class="modal" data-script-body></div>
      </div>
    `;

    scripts.addEventListener("click", (event) => {
      const buy = event.target.closest("[data-buy-script]");
      const details = event.target.closest("[data-script-details]");
      const overlay = event.target.classList.contains("overlay")
        ? event.target
        : event.target.closest("[data-close-modal]")?.closest(".overlay");
      if (buy) {
        IvoryBrief.add(buy.dataset.buyScript);
        location.href = "quote.html";
      }
      if (details) {
        const s = getIvoryService(details.dataset.scriptDetails);
        const modal = scripts.querySelector("[data-script-modal]");
        modal.hidden = false;
        modal.querySelector("[data-script-body]").innerHTML = `
          <div class="modal-head">
            <span class="svc-cat">${s.categoryLabel}</span>
            <button type="button" class="modal-close" data-close-modal>×</button>
          </div>
          <h2>${s.name}</h2>
          <div class="modal-meta"><span class="price-pill">${formatIvoryPrice(s)}</span></div>
          <p class="modal-copy">${s.blurb}</p>
          <h3>What’s included</h3>
          <ul class="modal-list">${s.included.map((i) => `<li>${i}</li>`).join("")}</ul>
          <button class="btn btn-gold btn-lg modal-cta" data-buy-script="${s.id}">Request this script</button>
        `;
      }
      if (overlay) overlay.hidden = true;
    });
  }
})();
