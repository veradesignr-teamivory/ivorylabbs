(function () {
  const form = document.querySelector("[data-quote-form]");
  const preview = document.querySelector("[data-brief-preview]");
  if (!form) return;

  function selected() {
    return window.IvoryBrief?.items?.() || [];
  }

  function renderPreview() {
    if (!preview) return;
    const list = selected();
    if (!list.length) {
      preview.hidden = true;
      preview.innerHTML = "";
      return;
    }
    preview.hidden = false;
    preview.innerHTML = `
      <p class="kicker gold-dim">Your plan so far</p>
      <h2 class="serif">We’ll quote this work together.</h2>
      <p class="lede quiz-sub">Add or remove items, then tell us the outcome you want. Starting prices are a guide, the written quote is what we stand behind.</p>
      <ul class="brief-chips">
        ${list
          .map(
            (item) => `<li>
              <span>${item.name}</span>
              <small>${formatIvoryPrice(item)}</small>
              <button type="button" data-brief-remove="${item.id}" aria-label="Remove ${item.name}">×</button>
            </li>`,
          )
          .join("")}
      </ul>
    `;
    const details = form.querySelector("[name=details]");
    if (details && !details.dataset.filled) {
      details.value = `Please quote: ${list.map((item) => item.name).join(", ")}.`;
      details.dataset.filled = "1";
    }
    const need = form.querySelector("[name=need]");
    if (need && !need.value) {
      const first = list[0];
      if (first?.id === "agency-leads-engine") need.value = "Agency Leads Engine";
      else if (first?.category === "web") need.value = "Website";
      else if (first?.category === "mobile") need.value = "Mobile app";
      else if (first?.categoryLabel?.includes("script")) need.value = "Ready-made script";
      else if (first?.category === "marketing" || first?.category === "google") need.value = "Marketing / Google";
    }
  }

  function applyParams() {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get("service");
    if (serviceId && window.IvoryBrief && !IvoryBrief.has(serviceId) && getIvoryService(serviceId)) {
      IvoryBrief.add(serviceId);
    }
    const need = form.querySelector("[name=need]");
    const needParam = params.get("need");
    if (need && needParam) {
      const match = [...need.options].find(
        (option) => option.value.toLowerCase() === needParam.toLowerCase(),
      );
      if (match) need.value = match.value;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const list = selected();
    const quotes = JSON.parse(localStorage.getItem("ivorylabbs-quotes") || "[]");
    quotes.unshift({
      ...data,
      services: list.map((item) => ({ id: item.id, name: item.name, price: item.price })),
      created: new Date().toISOString(),
    });
    localStorage.setItem("ivorylabbs-quotes", JSON.stringify(quotes));
    IvoryBrief?.clear();
    form.hidden = true;
    if (preview) preview.hidden = true;
    document.querySelector("[data-quote-done]").hidden = false;
  });

  document.addEventListener("ivory-brief-change", renderPreview);
  applyParams();
  renderPreview();
})();
