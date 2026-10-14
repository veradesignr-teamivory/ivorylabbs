(function () {
  const KEY = "ivorylabbs-brief";

  function getIds() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  }

  function setIds(ids) {
    const next = [...new Set(ids.filter(Boolean))];
    localStorage.setItem(KEY, JSON.stringify(next));
    document.dispatchEvent(new CustomEvent("ivory-brief-change"));
    renderBar();
    return next;
  }

  function add(id) {
    return setIds([...getIds(), id]);
  }

  function remove(id) {
    return setIds(getIds().filter((item) => item !== id));
  }

  function toggle(id) {
    return has(id) ? remove(id) : add(id);
  }

  function has(id) {
    return getIds().includes(id);
  }

  function clear() {
    return setIds([]);
  }

  function items() {
    return getIds()
      .map((id) => window.getIvoryService?.(id))
      .filter(Boolean);
  }

  function quoteHref() {
    const root = document.body.dataset.root || "";
    return `${root}quote.html`;
  }

  function renderBar() {
    const path = (location.pathname.split("/").pop() || "").toLowerCase();
    if (path === "quote.html" || path === "portal.html") {
      document.querySelector("[data-brief-bar]")?.remove();
      document.body.classList.remove("has-brief");
      return;
    }
    const list = items();
    let bar = document.querySelector("[data-brief-bar]");
    if (!list.length) {
      bar?.remove();
      document.body.classList.remove("has-brief");
      return;
    }
    if (!bar) {
      bar = document.createElement("aside");
      bar.className = "brief-bar";
      bar.dataset.briefBar = "";
      document.body.appendChild(bar);
    }
    document.body.classList.add("has-brief");
    const names = list.map((item) => item.name).slice(0, 3);
    const extra = list.length > 3 ? ` +${list.length - 3} more` : "";
    bar.innerHTML = `
      <div class="brief-bar-copy">
        <strong>${list.length} item${list.length === 1 ? "" : "s"} on your plan</strong>
        <p>${names.join(", ")}${extra}. We’ll quote outcomes, timeline, and what to skip. Nothing to pay today.</p>
      </div>
      <a class="btn btn-gold" href="${quoteHref()}">Get a tailored plan</a>
    `;
  }

  window.IvoryBrief = { getIds, setIds, add, remove, toggle, has, clear, items, renderBar };

  document.addEventListener("click", (event) => {
    const drop = event.target.closest("[data-brief-remove]");
    if (drop) {
      event.preventDefault();
      remove(drop.dataset.briefRemove);
    }
  });

  document.addEventListener("DOMContentLoaded", renderBar);
  document.addEventListener("ivory-brief-change", renderBar);
})();
