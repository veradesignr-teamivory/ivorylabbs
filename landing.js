(function () {
  const LANDINGS = {
    website: {
      kicker: "Website design",
      title: "Websites that win clients while you sleep.",
      lede: "A site that looks expensive, loads fast, and gives a stranger one clear next step. Built for Ivorylabbs clients who are done with templates that all feel the same.",
      visual: "legal",
      packagesTitle: "What kind of site do you need?",
      packages: [
        { t: "Business / brochure site", d: "The core pages a company needs to be taken seriously." },
        { t: "E-commerce store", d: "Catalogue, cart, payments, and order email, ready to sell." },
        { t: "Landing page", d: "One offer, one action. Built for ads and launches." },
        { t: "Booking / services site", d: "Calendars, enquiries, and a path from visitor to appointment." },
        { t: "Church or community site", d: "Sermons, events, giving, and a home for your people." },
        { t: "Custom presence", d: "When the work doesn’t fit a category, we still build it." },
      ],
      includedTitle: "Everything included. No surprises.",
      included: [
        { t: "Mobile-first design", d: "Looks right on a phone first, because that’s where the traffic is." },
        { t: "SEO foundation", d: "Titles, structure, speed, and Search Console, not an afterthought." },
        { t: "Fast load times", d: "We treat performance as part of the design, not a later patch." },
        { t: "Contact that works", d: "Forms, WhatsApp, and email that actually arrive." },
        { t: "Analytics", d: "You’ll know what people do after they land." },
        { t: "Launch support", d: "Domain, hosting handoff, and a calm go-live." },
      ],
      steps: [
        { n: "01", t: "Discovery, not decoration", d: "We learn who you serve and what a win looks like before a single layout." },
        { n: "02", t: "Design you can react to", d: "High-fidelity pages, not mystery. You see it, we refine it, then we build." },
        { n: "03", t: "Build, launch, handoff", d: "We ship, we test on real phones, and we stay for the first weeks after launch." },
      ],
      articleKicker: "Field notes",
      articleTitle: "Why website design matters for commerce in 2026",
      article: [
        "Your website is often the first employee a stranger meets. If it looks unfinished, they assume the work is too. If it loads slowly, they leave before the offer. Design is not decoration, it is how trust is manufactured at a distance.",
        "Most businesses don’t need more pages. They need a clearer story, a faster path to contact, and proof that someone competent is behind the brand. That is the job of a site we would put our name on.",
        "Ivorylabbs builds for the way people actually buy: on a phone, in a hurry, comparing you with three tabs. We design for that moment, then we make the rest of the site earn its keep.",
      ],
      faqs: [
        ["How long does a website take?", "A focused marketing site is usually 1 to 2 weeks. A custom or e-commerce build is 3 to 6 weeks, depending on content and integrations."],
        ["Do you use templates?", "Not as the product. We may start from proven patterns, but the look, structure, and copy path are built for you."],
        ["Will I be able to edit it?", "Yes. We set up a CMS or a simple edit path so you can change pages without waiting on us for every comma."],
        ["What do you need from me?", "Brand assets if you have them, the offer, examples you like, and someone who can answer questions quickly."],
      ],
      cta: "Ready to build your website?",
      need: "Website",
    },
    "web-apps": {
      kicker: "Web app development",
      title: "Build the tool your business actually needs.",
      lede: "Off-the-shelf software asks you to change how you work. We build the dashboard, portal, or workflow around how you already operate.",
      visual: "memberships",
      packagesTitle: "What we build for you",
      packages: [
        { t: "Client portals", d: "A home for orders, files, and status so you stop living in WhatsApp threads." },
        { t: "Internal tools", d: "The admin your team actually uses, not a spreadsheet with extra steps." },
        { t: "Bookings & operations", d: "Calendars, assignments, and the rules your business already has." },
        { t: "Marketplaces", d: "Vendors, customers, and the payments in between." },
        { t: "Reporting", d: "The numbers you currently hunt for across five apps." },
        { t: "Integrations", d: "Paystack, Stripe, Google, WhatsApp, wired into one flow." },
      ],
      includedTitle: "Built for the long term.",
      included: [
        { t: "Product discovery", d: "We write down the jobs before we write the code." },
        { t: "Secure accounts", d: "Roles, sessions, and the boring work that keeps you out of trouble." },
        { t: "Handover you can run", d: "Docs, admin, and a system your team can live in." },
        { t: "Support after launch", d: "Fixes, small features, and someone who still knows the codebase." },
      ],
      steps: [
        { n: "01", t: "Map the work", d: "We sit with the real process, not the slide version of it." },
        { n: "02", t: "Ship a first slice", d: "A usable core in weeks, not a twelve-month theory." },
        { n: "03", t: "Harden and grow", d: "We add the next jobs only after the first one is in production." },
      ],
      articleKicker: "Field notes",
      articleTitle: "Why teams choose custom web apps over off-the-shelf software",
      article: [
        "SaaS is excellent until your edge cases become the product. Then you pay monthly for a tool you still work around with Excel. Custom software is expensive in the first month and cheap in the second year, if it is built against a real workflow.",
        "Ivorylabbs does not start with a stack. We start with the job: who logs in, what they must not break, and what “done” looks like on a Tuesday afternoon. The interface is the last thing we invent.",
        "If a spreadsheet is still the source of truth, you do not have a software problem yet. You have a process problem. We will tell you that. Then, if you still want the app, we will build the smallest version that can replace the sheet.",
      ],
      faqs: [
        ["How is this different from a website?", "A website persuades. A web app is a tool people log into and use every week."],
        ["Do you build mobile apps too?", "Yes, native-feeling mobile is a separate service. Many products start as a web app and grow."],
        ["Who owns the code?", "You do. We deliver the source, the access, and the documentation."],
        ["Can you work with our existing system?", "Usually. We integrate before we replace, unless the old system is the problem."],
      ],
      cta: "Have a web app idea?",
      need: "Web app",
    },
    mobile: {
      kicker: "Mobile app development",
      title: "Your business, in your customers’ pockets.",
      lede: "iOS and Android products for bookings, loyalty, catalogues, and the daily habits your customers already have, just not in an app yet.",
      visual: "courses",
      packagesTitle: "Types of apps we build",
      packages: [
        { t: "Consumer apps", d: "The public product: browse, book, buy, belong." },
        { t: "Business apps", d: "Field teams, stock, jobs, software that leaves the office." },
        { t: "Marketplace apps", d: "Two-sided products with vendors and buyers." },
        { t: "Membership apps", d: "Content, community, and a reason to open it tomorrow." },
      ],
      includedTitle: "What every app includes",
      included: [
        { t: "iOS & Android", d: "One product, both stores, unless you have a reason to pick a side." },
        { t: "Push notifications", d: "Used sparingly, so they still mean something." },
        { t: "Store listing", d: "Name, screenshots, and the copy the stores actually approve." },
        { t: "Admin", d: "You should not need us to change a banner." },
        { t: "Analytics", d: "What people tap, where they drop, what to build next." },
        { t: "Maintenance path", d: "OS updates are not optional. We plan for them." },
      ],
      steps: [
        { n: "01", t: "The one job", d: "If the app cannot say its job in a sentence, it is not ready to build." },
        { n: "02", t: "Flows before pixels", d: "We prototype the path, then we make it beautiful." },
        { n: "03", t: "Store and aftercare", d: "Submission, launch, and the first month of real users." },
      ],
      articleKicker: "Field notes",
      articleTitle: "Why businesses are building mobile apps in 2026",
      article: [
        "An app is not a trophy. It is a habit. If your customer already messages you, books you, or orders from you every week, an app can make that cheaper and more loyal. If they don’t, a website and WhatsApp will beat an empty icon on the home screen.",
        "We build mobile when there is a repeat action worth owning: orders, sessions, membership, a catalogue people browse on the bus. We will talk you out of an app if the math is a brochure in disguise.",
        "When we do build, we ship both stores, a real admin, and a maintenance plan. An abandoned app is worse than no app.",
      ],
      faqs: [
        ["Simple vs complex vs enterprise?", "Simple is one job. Complex is accounts, payments, and admin. Enterprise is integrations, roles, and a longer runway."],
        ["Do I need a website as well?", "Almost always. The app is the habit; the site is how new people find you."],
        ["What about App Store fees?", "Apple and Google charge their own cuts. We budget that into the conversation up front."],
        ["Can you take over an existing app?", "Yes, start with maintenance, then decide what to rebuild."],
      ],
      cta: "Ready to build your app?",
      need: "Mobile app",
    },
    design: {
      kicker: "UI/UX design",
      title: "Some designs just feel obvious to use.",
      lede: "Research, structure, and interfaces that do not need a tour. The highest-return work you can put in front of a product.",
      visual: "email",
      packagesTitle: "Our design process",
      packages: [
        { t: "01 · Discovery & research", d: "Who it is for, what they fear, what “done” looks like." },
        { t: "02 · Information architecture", d: "The map of the product before we argue about colour." },
        { t: "03 · High-fidelity design", d: "Screens that look like the real thing, because they almost are." },
        { t: "04 · Handoff & QA", d: "Specs, states, and a pass with engineering so nothing is guessed." },
      ],
      includedTitle: "What’s included in every project",
      included: [
        { t: "UX flows", d: "The unhappy paths, not just the hero journey." },
        { t: "UI kit", d: "Buttons, type, and components you can reuse." },
        { t: "Responsive layouts", d: "Phone, tablet, desktop, designed, not stretched." },
        { t: "Prototype", d: "Clickable enough to test with a real person." },
        { t: "Design QA", d: "We stay through build, because pixels drift." },
        { t: "Brand alignment", d: "Your existing identity, respected and tightened." },
      ],
      steps: [
        { n: "01", t: "Understand", d: "Interviews, existing analytics, and the job to be done." },
        { n: "02", t: "Structure", d: "IA and wireframes until the argument is about meaning, not taste." },
        { n: "03", t: "Craft", d: "The visual system, then the screens, then the edge states." },
        { n: "04", t: "Prove", d: "Prototype, test, hand off, and sit with the build." },
      ],
      articleKicker: "Field notes",
      articleTitle: "Why design is the highest-return investment a digital product can make",
      article: [
        "Engineering without design ships confusion at scale. A week of structure saves months of rebuilding screens people bounce from. Design is not a coat of paint after the backlog, it is how you decide what not to build.",
        "The teams that win are not the ones with more features. They are the ones whose product feels inevitable. That feeling is designed: hierarchy, language, empty states, the next action.",
        "Ivorylabbs will not decorate a broken flow. We will fix the flow, then we will make it look like it always knew what it was doing.",
      ],
      faqs: [
        ["Do you only design, or also build?", "Both. Design can stand alone, or it can be the first phase of a website or app we ship."],
        ["Can you redesign an existing product?", "Yes. We start with an audit of what’s failing, then we redesign the jobs that matter."],
        ["What files do we get?", "Figma (or equivalent), a component kit, and a prototype. If we also build, you get the working product."],
        ["How involved do we need to be?", "A weekly review is enough if decisions can be made in the room."],
      ],
      cta: "Let’s design something great.",
      need: "UI/UX design",
    },
  };

  const mount = document.querySelector("[data-landing]");
  if (!mount) return;
  const cfg = LANDINGS[mount.dataset.landing];
  if (!cfg) return;
  const root = document.body.dataset.root || "";

  const visuals = {
    frames: `<div class="viz viz-frames"><i></i><i></i><i></i></div>`,
    dashboard: `<div class="viz viz-dash"><div><b></b><b></b><b></b><b></b></div><span></span><span></span><span></span></div>`,
    phones: `<div class="viz viz-phones"><i></i><i></i></div>`,
    ui: `<div class="viz viz-ui"><i></i><i></i></div>`,
    audit: `<img class="lp-photo" src="${root}public/promo/website-audit.png" alt="Get a free website audit today">`,
    legal: `<img class="lp-photo" src="${root}public/work/sjm-legal.png" alt="SJM Legal website">`,
    builder: `<img class="lp-photo lp-photo-ui" src="${root}public/work/course-builder.png" alt="Course builder interface">`,
    memberships: `<img class="lp-photo lp-photo-ui" src="${root}public/work/kd-courses.png" alt="KD Squares memberships">`,
    settings: `<img class="lp-photo lp-photo-ui" src="${root}public/work/lms-settings.png" alt="Account settings portal">`,
    email: `<img class="lp-photo lp-photo-ui" src="${root}public/work/email-template.png" alt="Email campaign design">`,
    courses: `<img class="lp-photo lp-photo-ui" src="${root}public/work/lms-courses.png" alt="Learning platform courses">`,
  };

  mount.innerHTML = `
    <section class="lp-hero">
      <div class="wrap lp-hero-grid">
        <div>
          <p class="kicker gold-dim">${cfg.kicker}</p>
          <h1 class="serif">${cfg.title}</h1>
          <p class="lede quiz-sub">${cfg.lede}</p>
          <div class="hero-actions">
            <a class="btn btn-gold btn-lg" href="${root}quote.html?need=${encodeURIComponent(cfg.need || "")}">Get a Quote</a>
            <a class="btn btn-lg ghost-light" href="${root}work.html">See Our Work</a>
          </div>
        </div>
        ${visuals[cfg.visual] || ""}
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <h2 class="serif">${cfg.packagesTitle}</h2>
        <div class="lp-grid">
          ${cfg.packages.map((p) => `<article class="card"><h3>${p.t}</h3><p>${p.d}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section band">
      <div class="wrap">
        <h2 class="serif">${cfg.includedTitle}</h2>
        <div class="lp-grid">
          ${cfg.included.map((p) => `<article class="card"><h3>${p.t}</h3><p>${p.d}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section dark">
      <div class="wrap">
        <h2 class="serif">How it works</h2>
        <div class="lp-grid">
          ${cfg.steps.map((s) => `<article class="card"><p class="num serif">${s.n}</p><h3>${s.t}</h3><p>${s.d}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap article">
        <p class="kicker gold-dim">${cfg.articleKicker}</p>
        <h2 class="serif">${cfg.articleTitle}</h2>
        ${cfg.article.map((p) => `<p>${p}</p>`).join("")}
      </div>
    </section>
    <section class="section band">
      <div class="wrap">
        <h2 class="serif">Frequently Asked Questions</h2>
        <div class="faq" data-faq>
          ${cfg.faqs
            .map(
              ([q, a], i) => `<details ${i === 0 ? "open" : ""}><summary>${q}</summary><p>${a}</p></details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="lp-cta">
      <div class="wrap band-inner">
        <h2 class="serif">${cfg.cta}</h2>
        <a class="btn btn-gold btn-lg" href="${root}quote.html?need=${encodeURIComponent(cfg.need || "")}">Get a Quote</a>
      </div>
    </section>
  `;
})();
