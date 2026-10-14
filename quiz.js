(function () {
  const root = document.querySelector("[data-quiz]");
  if (!root) return;

  const QUESTIONS = [
    {
      id: "business",
      title: "What type of business do you have?",
      subtitle: "This helps us tailor our recommendations to your specific situation.",
      options: [
        { id: "local", title: "Local / Physical Business", copy: "Restaurant, salon, store, clinic…" },
        { id: "online", title: "Online Business / E-commerce", copy: "Sell products or services online" },
        { id: "startup", title: "Startup / Tech Company", copy: "Building a product or platform" },
        { id: "creator", title: "Personal Brand / Creator", copy: "Freelancer, influencer, coach…" },
        { id: "nonprofit", title: "Non-profit / NGO / Church", copy: "Community or faith-based org" },
        { id: "exploring", title: "Just Exploring", copy: "Not sure yet, show me everything" },
      ],
    },
    {
      id: "goals",
      title: "What are your main goals?",
      subtitle: "Select all that apply, we’ll recommend services for each.",
      multi: true,
      action: "Continue",
      options: [
        { id: "found", title: "Get Found Online", copy: "Show up on Google & social media" },
        { id: "sell", title: "Sell Products / Services", copy: "Accept payments online" },
        { id: "leads", title: "Generate Leads & Enquiries", copy: "Get people contacting you" },
        { id: "app", title: "Build a Mobile App", copy: "iOS & Android application" },
        { id: "social", title: "Grow on Social Media", copy: "Build audience & engagement" },
        { id: "ads", title: "Run Paid Advertising", copy: "Facebook, Google, TikTok ads" },
      ],
    },
    {
      id: "website",
      title: "Do you currently have a website?",
      subtitle: "Be honest, we can work with any starting point.",
      options: [
        { id: "good", title: "Yes, and it works well", copy: "Just need other services" },
        { id: "needs", title: "Yes, but it needs improvement", copy: "Outdated, slow, or not converting" },
        { id: "none", title: "No, I need one built", copy: "Starting from scratch" },
      ],
    },
    {
      id: "google",
      title: "Are you on Google Business?",
      subtitle: "Google Business helps local customers find you on Maps and Search.",
      showIf: (a) => a.business === "local" || (a.goals || []).includes("found"),
      options: [
        { id: "active", title: "Yes, fully set up & active", copy: "I manage it regularly" },
        { id: "quiet", title: "Yes, but it’s not active", copy: "Set up but rarely updated" },
        { id: "none", title: "No, I don’t have one", copy: "Not set up at all" },
        { id: "unsure", title: "I’m not sure what that is", copy: "Explain it to me" },
      ],
    },
    {
      id: "social",
      title: "How’s your social media presence?",
      subtitle: "Social media is often the first impression for new customers.",
      showIf: (a) =>
        (a.goals || []).some((g) => ["social", "found", "ads"].includes(g)) ||
        a.business === "creator",
      options: [
        { id: "strong", title: "Strong, I’m very active", copy: "Consistent, growing audience" },
        { id: "inconsistent", title: "Inconsistent, I post sometimes", copy: "Could be much better" },
        { id: "none", title: "Not started yet", copy: "I need to set up pages" },
        { id: "irrelevant", title: "Not relevant to my business", copy: "I rely on other channels" },
      ],
    },
    {
      id: "budget",
      title: "What’s your approximate budget?",
      subtitle: "This helps us prioritise the right services for your situation.",
      options: [
        { id: "under100", title: "Under $100", copy: "Starting small, testing the waters" },
        { id: "100-500", title: "$100 to $500", copy: "Ready to invest in growth" },
        { id: "500-2000", title: "$500 to $2,000", copy: "Serious about scaling up" },
        { id: "2kplus", title: "$2,000+", copy: "Full-scale digital transformation" },
        { id: "flex", title: "Flexible / Not Sure", copy: "Show me what’s worth investing in" },
      ],
    },
    {
      id: "when",
      title: "When are you looking to get started?",
      subtitle: "Be honest, there’s no wrong answer. This just helps us prioritise.",
      options: [
        { id: "now", title: "Ready now, let’s go!", copy: "I want to move forward immediately" },
        { id: "month", title: "Within the next month", copy: "Almost ready, finalising details" },
        { id: "later", title: "In the next 2 to 3 months", copy: "Planning ahead, not urgent yet" },
        { id: "research", title: "Just researching for now", copy: "Not sure when I’ll commit" },
      ],
    },
  ];

  const answers = {};
  let step = 0;
  let packageIds = [];

  function visibleQuestions() {
    return QUESTIONS.filter((q) => !q.showIf || q.showIf(answers));
  }

  function current() {
    return visibleQuestions()[step];
  }

  function selected(question) {
    return answers[question.id];
  }

  function recommend() {
    const ids = [];
    const goals = answers.goals || [];
    const budget = answers.budget;

    if (answers.website === "none") {
      if (answers.business === "online" || goals.includes("sell")) ids.push("ecommerce-store");
      else if (budget === "under100") ids.push("website-design");
      else ids.push("custom-website");
    } else if (answers.website === "needs") {
      ids.push("seo-services");
      if (budget === "500-2000" || budget === "2kplus" || budget === "flex") ids.push("landing-page");
    }

    if (answers.google === "none" || answers.google === "unsure") ids.push("google-business-setup");
    if (answers.google === "quiet" || answers.google === "active") ids.push("google-monthly");
    if (answers.business === "local" && !ids.includes("google-business-setup") && answers.google !== "active") {
      ids.push("google-business-setup");
    }

    if (goals.includes("found") && !ids.includes("seo-services")) ids.push("seo-services");
    if (goals.includes("leads")) {
      ids.push("agency-leads-engine");
      if (!ids.includes("landing-page")) ids.push("landing-page");
    }
    if (goals.includes("sell") && answers.website !== "none") ids.push("payment-gateway");
    if (goals.includes("ads")) ids.push("paid-ads");
    if (goals.includes("app")) {
      ids.push(budget === "2kplus" ? "complex-app" : "simple-app");
    }

    if (answers.social === "none") ids.push("social-page-setup");
    if (answers.social === "inconsistent" || answers.social === "none" || goals.includes("social")) {
      ids.push("social-media-management");
    }

    if (ids.length === 0) ids.push("seo-services", "google-business-setup");
    return [...new Set(ids)].slice(0, 6);
  }

  function canNext() {
    const q = current();
    if (!q) return false;
    const value = selected(q);
    return q.multi ? Array.isArray(value) && value.length > 0 : Boolean(value);
  }

  function renderQuiz() {
    const list = visibleQuestions();
    const q = list[step];
    if (!q) return renderPackage();

    const value = selected(q);
    const picks = q.multi ? value || [] : [];

    root.innerHTML = `
      <div class="quiz-progress">
        <span>Find your services</span>
        <span>${step + 1} of ${list.length}</span>
      </div>
      <div class="quiz-bar"><i style="width:${((step + 1) / list.length) * 100}%"></i></div>
      <h1 class="serif">${q.title}</h1>
      <p class="lede quiz-sub">${q.subtitle}</p>
      ${q.multi ? `<p class="quiz-hint">Select all that apply</p>` : ""}
      <div class="quiz-grid">
        ${q.options
          .map((opt) => {
            const on = q.multi ? picks.includes(opt.id) : value === opt.id;
            return `<button type="button" class="quiz-option ${on ? "is-on" : ""}" data-opt="${opt.id}">
              <i></i>
              <span><strong>${opt.title}</strong><span>${opt.copy}</span></span>
            </button>`;
          })
          .join("")}
      </div>
      <div class="quiz-nav">
        ${step > 0 ? `<button type="button" class="btn quiz-back" data-back>← Back</button>` : `<span></span>`}
        <button type="button" class="btn btn-gold btn-lg quiz-next" data-next ${canNext() ? "" : "disabled"}>
          ${q.action || "Next"} →
        </button>
      </div>
      <p class="quiz-skip"><a href="order.html">Skip quiz, browse all services</a></p>
    `;
  }

  function urgencyCopy() {
    if (answers.when === "now") {
      return "Great news, you’re ready to hit the ground running. We’ll prioritise your enquiry.";
    }
    if (answers.when === "month") return "You’re close. We’ll keep this package ready for a start this month.";
    if (answers.when === "later") return "Plenty of time to shape this. We’ll hold the plan until you’re ready.";
    return "No rush, use this as a map of what’s worth investing in.";
  }

  function renderPackage() {
    packageIds = packageIds.length ? packageIds : recommend();
    const items = packageIds.map(getIvoryService).filter(Boolean);
    const priced = items.filter((s) => !s.quoteOnly);
    const sum = priced.reduce((n, s) => n + s.price, 0);

    root.innerHTML = `
      <div class="pkg-hero">
        <div class="pkg-mark">⬡</div>
        <h1 class="serif">Your Personalised Package</h1>
        <p class="lede quiz-sub">Based on your answers, we recommend these services. Remove anything you don’t need or add more below.</p>
      </div>
      <div class="pkg-banner">${urgencyCopy()}</div>
      <div class="pkg-list">
        ${items
          .map(
            (s) => `
          <article class="pkg-item">
            <div>
              <p class="svc-cat">${s.categoryLabel}</p>
              <h3>${s.name}</h3>
              <p>${s.blurb}</p>
              ${s.href ? `<p><a class="link" href="${s.href}">See how it works</a></p>` : ""}
            </div>
            <div class="pkg-side">
              <strong>${formatIvoryPrice(s)}</strong>
              <button type="button" data-remove="${s.id}">Remove</button>
            </div>
          </article>
        `,
          )
          .join("")}
        <div class="pkg-total">
          <span>${items.length} recommendation${items.length === 1 ? "" : "s"}<br><small>Starting range so you can plan. The written quote is scoped to your outcome.</small></span>
          <strong>${priced.length ? `From $${sum.toLocaleString("en-US")}` : "Written plan"}</strong>
        </div>
      </div>
      <p class="pkg-add"><a href="order.html">Shape this further</a></p>
      <div class="pkg-cta">
        <button type="button" class="pkg-pay" data-request-plan>
          <h3>Request this plan</h3>
          <p>We’ll reply within 24 hours with outcomes, timeline, and what not to spend on. Nothing to pay today.</p>
        </button>
        <div class="pkg-quote pkg-steps">
          <h3>What happens next</h3>
          <ol>
            <li>We read your answers, not a generic package.</li>
            <li>You get a written plan you can say yes or no to.</li>
            <li>Work starts only when the quote feels right.</li>
          </ol>
        </div>
      </div>
      <p class="quiz-skip"><button type="button" data-restart>Start over</button></p>
    `;
  }

  root.addEventListener("click", (event) => {
    const q = current();
    const opt = event.target.closest("[data-opt]");
    if (opt && q) {
      if (q.multi) {
        const next = new Set(answers[q.id] || []);
        if (next.has(opt.dataset.opt)) next.delete(opt.dataset.opt);
        else next.add(opt.dataset.opt);
        answers[q.id] = [...next];
      } else {
        answers[q.id] = opt.dataset.opt;
      }
      renderQuiz();
      return;
    }
    if (event.target.closest("[data-next]") && canNext()) {
      if (step + 1 >= visibleQuestions().length) {
        packageIds = recommend();
        renderPackage();
      } else {
        step += 1;
        renderQuiz();
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (event.target.closest("[data-back]")) {
      step = Math.max(0, step - 1);
      renderQuiz();
      return;
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) {
      packageIds = packageIds.filter((id) => id !== remove.dataset.remove);
      renderPackage();
      return;
    }
    if (event.target.closest("[data-request-plan]")) {
      IvoryBrief.setIds(packageIds);
      location.href = "quote.html";
      return;
    }
    if (event.target.closest("[data-restart]")) {
      Object.keys(answers).forEach((k) => delete answers[k]);
      packageIds = [];
      step = 0;
      renderQuiz();
    }
  });

  renderQuiz();
})();
