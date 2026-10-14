(function () {
  const search = document.querySelector("[data-home-search]");
  if (search) {
    search.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(search));
      const need = (data.need || "").toLowerCase();
      sessionStorage.setItem(
        "ivorylabbs-home-intent",
        JSON.stringify({ kind: data.kind, need: data.need || "" }),
      );
      if (/portal|app|software|dashboard/.test(need)) location.href = "services/web-apps.html";
      else if (/lead|pipeline|crm|follow|whatsapp|booking/.test(need)) location.href = "leads-engine.html";
      else if (/mobile|ios|android/.test(need)) location.href = "services/mobile.html";
      else if (/design|brand|ui|ux/.test(need)) location.href = "services/design.html";
      else if (/web|site|store|page/.test(need)) location.href = "services/website.html";
      else if (/google|seo|ads|social|market/.test(need)) location.href = "order.html";
      else location.href = "find-services.html";
    });
  }

  const stages = {
    site: { src: "public/work/sjm-legal.png", alt: "Brand website work" },
    app: { src: "public/work/kd-courses.png", alt: "Client portal work" },
    campaign: { src: "public/work/email-template.png", alt: "Campaign design work" },
  };
  const stageRoot = document.querySelector("[data-home-stage]");
  const stageImg = document.querySelector("[data-stage-img]");
  stageRoot?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-stage]");
    if (!btn) return;
    stageRoot.querySelectorAll("[data-stage]").forEach((el) => el.classList.toggle("is-on", el === btn));
    const next = stages[btn.dataset.stage];
    if (next && stageImg) {
      stageImg.classList.add("is-swap");
      window.setTimeout(() => {
        stageImg.src = next.src;
        stageImg.alt = next.alt;
        stageImg.classList.remove("is-swap");
      }, 180);
    }
  });

  const loops = {
    site: {
      src: "public/work/sjm-legal.png",
      title: "The site that does the selling",
      copy: "A presence that looks expensive, loads fast, and gives a stranger one clear next step. Built for firms, consumer brands, and operators who are done with templates that all feel the same.",
      href: "services/website.html",
      label: "See website work",
    },
    portal: {
      src: "public/work/kd-courses.png",
      title: "The tool your team actually uses",
      copy: "Portals, memberships, and operations software around how you already work. Off-the-shelf tools ask you to change. We build the system around the job.",
      href: "services/web-apps.html",
      label: "See product work",
    },
    engine: {
      src: "public/work/n8n-flow.png",
      title: "The machine that runs the pipeline",
      copy: "Capture the lead, qualify it, follow up, and book the call in one system. Built for agencies and brands tired of chasing enquiries by hand.",
      href: "leads-engine.html",
      label: "See the leads engine",
    },
    growth: {
      src: "public/work/cashflow-nation.png",
      title: "The layer that keeps demand coming",
      copy: "Search, Google, campaigns, and content systems so the brand is findable after launch. Presence without a path to contact is decoration.",
      href: "order.html",
      label: "Explore growth work",
    },
  };
  const tabs = document.querySelector("[data-loop-tabs]");
  const loopImg = document.querySelector("[data-loop-img]");
  const loopTitle = document.querySelector("[data-loop-title]");
  const loopCopy = document.querySelector("[data-loop-copy]");
  const loopLink = document.querySelector(".home-loop-panel a");
  tabs?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-loop]");
    if (!btn) return;
    tabs.querySelectorAll("[data-loop]").forEach((el) => el.classList.toggle("is-on", el === btn));
    const next = loops[btn.dataset.loop];
    if (!next) return;
    if (loopImg) {
      loopImg.classList.add("is-swap");
      window.setTimeout(() => {
        loopImg.src = next.src;
        loopImg.alt = next.title;
        loopImg.classList.remove("is-swap");
      }, 180);
    }
    if (loopTitle) loopTitle.textContent = next.title;
    if (loopCopy) loopCopy.textContent = next.copy;
    if (loopLink) {
      loopLink.href = next.href;
      loopLink.textContent = next.label;
    }
  });

  const visitors = document.querySelector("[data-calc-visitors]");
  const rate = document.querySelector("[data-calc-rate]");
  const visitorsLabel = document.querySelector("[data-calc-visitors-label]");
  const rateLabel = document.querySelector("[data-calc-rate-label]");
  const lost = document.querySelector("[data-calc-lost]");

  function format(n) {
    return Number(n).toLocaleString("en-US");
  }

  function updateCalc() {
    if (!visitors || !rate || !lost) return;
    const v = Number(visitors.value);
    const r = Number(rate.value);
    if (visitorsLabel) visitorsLabel.textContent = format(v);
    if (rateLabel) rateLabel.textContent = r + "%";
    lost.textContent = format(Math.round(v * 12 * (r / 100)));
  }

  visitors?.addEventListener("input", updateCalc);
  rate?.addEventListener("input", updateCalc);
  updateCalc();

  const marquee = document.querySelector("[data-client-marquee]");
  if (marquee && window.IVORY_CLIENTS) {
    const tile = (client, hidden) => {
      const faint = client.faint ? " is-faint" : "";
      const alt = hidden ? "" : ` alt="${client.name}"`;
      return `<span class="client-logo${faint}"><img src="${client.image}"${alt}></span>`;
    };
    const row = window.IVORY_CLIENTS.map((client) => tile(client, false)).join("");
    const copy = window.IVORY_CLIENTS.map((client) => tile(client, true)).join("");
    marquee.innerHTML = row + copy;
    window.ivoryPunchClientLogos?.(marquee);
  }
})();
