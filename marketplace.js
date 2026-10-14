(function () {
  const grid = document.querySelector("[data-service-grid]");
  if (!grid) return;

  const search = document.querySelector("[data-service-search]");
  const filters = document.querySelector("[data-filters]");
  const countEl = document.querySelector("[data-service-count]");
  const modal = document.querySelector("[data-service-modal]");
  let category = "all";
  let query = "";

  function matches(service) {
    const hay = `${service.name} ${service.blurb} ${service.categoryLabel}`.toLowerCase();
    const q = query.trim().toLowerCase();
    const catOk = category === "all" || service.category === category;
    return catOk && (!q || hay.includes(q));
  }

  function includeLabel(id) {
    return IvoryBrief.has(id) ? "Included" : "Include";
  }

  function render() {
    const list = IVORY_SERVICES.filter(matches);
    countEl.textContent = `${list.length} way${list.length === 1 ? "" : "s"} we can help`;
    grid.innerHTML = list
      .map(
        (service) => `
      <article class="svc-card ${IvoryBrief.has(service.id) ? "is-picked" : ""}" data-id="${service.id}">
        <div class="svc-card-top">
          <span class="svc-cat">${service.categoryLabel}</span>
          ${service.popular ? `<span class="svc-popular">High impact</span>` : ""}
        </div>
        <h3>${service.name}</h3>
        <p>${service.blurb}</p>
        <p class="svc-price">${formatIvoryPrice(service)}</p>
        <div class="svc-actions">
          <button type="button" data-details="${service.id}">See the value</button>
          ${service.href ? `<a class="svc-page" href="${service.href}">See how it works</a>` : ""}
          <button type="button" class="svc-add ${IvoryBrief.has(service.id) ? "is-on" : ""}" data-add="${service.id}">${includeLabel(service.id)}</button>
        </div>
      </article>
    `,
      )
      .join("");
  }

  function openModal(id) {
    const service = getIvoryService(id);
    if (!service || !modal) return;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector("[data-modal-body]").innerHTML = `
      <div class="modal-head">
        <span class="svc-cat">${service.categoryLabel}</span>
        <button type="button" class="modal-close" data-close-modal aria-label="Close">×</button>
      </div>
      <h2>${service.name}</h2>
      <div class="modal-meta">
        <span class="price-pill">${formatIvoryPrice(service)}</span>
        <span class="duration">${service.duration}</span>
      </div>
      <p class="modal-copy">${service.summary}</p>
      <h3>What you walk away with</h3>
      <ul class="modal-list">
        ${service.included.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p class="modal-note">Starting rates help you plan. The written quote is scoped to your outcome, then work begins.</p>
      ${service.href ? `<a class="btn btn-lg modal-secondary" href="${service.href}">See how it works</a>` : ""}
      <button type="button" class="btn btn-gold btn-lg modal-cta" data-quote-service="${service.id}">Get a tailored quote</button>
      <button type="button" class="btn btn-lg modal-secondary" data-add="${service.id}">${IvoryBrief.has(service.id) ? "Remove from plan" : "Save to my plan"}</button>
    `;
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  }

  function toast(message) {
    let el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 1800);
  }

  document.addEventListener("click", (event) => {
    const details = event.target.closest("[data-details]");
    const add = event.target.closest("[data-add]");
    const quote = event.target.closest("[data-quote-service]");
    const overlay = event.target.classList.contains("overlay") ? event.target : event.target.closest("[data-close-modal]")?.closest(".overlay");
    if (details) openModal(details.dataset.details);
    if (add) {
      IvoryBrief.toggle(add.dataset.add);
      toast(IvoryBrief.has(add.dataset.add) ? "Saved to your plan" : "Removed from your plan");
      closeModal();
      render();
    }
    if (quote) {
      IvoryBrief.add(quote.dataset.quoteService);
      const service = getIvoryService(quote.dataset.quoteService);
      const need = service?.id === "agency-leads-engine" ? "Agency Leads Engine" : "";
      location.href = need
        ? `quote.html?need=${encodeURIComponent(need)}&service=${encodeURIComponent(service.id)}`
        : "quote.html";
    }
    if (overlay) {
      overlay.hidden = true;
      document.body.style.overflow = "";
    }
  });

  filters?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn) return;
    category = btn.dataset.filter;
    filters.querySelectorAll("[data-filter]").forEach((el) => {
      el.classList.toggle("is-on", el === btn);
    });
    render();
  });

  search?.addEventListener("input", () => {
    query = search.value;
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  document.addEventListener("ivory-brief-change", render);

  render();

  const hash = location.hash.replace("#", "");
  if (hash && getIvoryService(hash)) openModal(hash);

  const customForm = document.querySelector("[data-custom-form]");
  customForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    toast("Request saved. We’ll follow up with a plan.");
    customForm.reset();
    document.querySelector("[data-custom-modal]").hidden = true;
  });

  document.querySelector("[data-open-custom]")?.addEventListener("click", () => {
    document.querySelector("[data-custom-modal]").hidden = false;
  });
})();
