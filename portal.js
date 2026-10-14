(function () {
  const USERS = "ivorylabbs-users";
  const SESSION = "ivorylabbs-session";
  const ORDERS = "ivorylabbs-orders";

  function users() {
    try {
      return JSON.parse(localStorage.getItem(USERS) || "[]");
    } catch {
      return [];
    }
  }
  function saveUsers(list) {
    localStorage.setItem(USERS, JSON.stringify(list));
  }
  function orders() {
    try {
      return JSON.parse(localStorage.getItem(ORDERS) || "[]");
    } catch {
      return [];
    }
  }
  function saveOrders(list) {
    localStorage.setItem(ORDERS, JSON.stringify(list));
  }
  function sessionEmail() {
    return localStorage.getItem(SESSION) || "";
  }
  function currentUser() {
    const email = sessionEmail();
    return users().find((u) => u.email === email) || null;
  }
  function login(email, password) {
    const user = users().find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user || user.password !== password) return { ok: false, error: "Email or password is incorrect." };
    localStorage.setItem(SESSION, user.email);
    return { ok: true, user };
  }
  function register({ name, email, password }) {
    if (users().some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: "An account with that email already exists. Log in to link your orders." };
    }
    const user = { name, email, password };
    saveUsers([...users(), user]);
    localStorage.setItem(SESSION, email);
    return { ok: true, user };
  }
  function logout() {
    localStorage.removeItem(SESSION);
  }
  function placeOrder({ email, name, items, note }) {
    const order = {
      id: "IL-" + Date.now().toString(36).toUpperCase(),
      email,
      name,
      items,
      note: note || "",
      status: "pending",
      created: new Date().toISOString(),
      total: items.reduce((sum, row) => sum + row.price * row.qty, 0),
    };
    saveOrders([order, ...orders()]);
    return order;
  }
  function userOrders(email) {
    return orders().filter((o) => o.email.toLowerCase() === email.toLowerCase());
  }

  window.IvoryAccount = {
    currentUser,
    login,
    register,
    logout,
    placeOrder,
    userOrders,
  };

  const mount = document.querySelector("[data-portal]");
  if (!mount) return;

  function view(name) {
    const params = new URLSearchParams(location.search);
    return params.get("view") || name;
  }

  function go(v) {
    const url = new URL(location.href);
    if (v) url.searchParams.set("view", v);
    else url.searchParams.delete("view");
    history.replaceState(null, "", url);
    render();
  }

  function stats(list) {
    const count = (status) => list.filter((o) => o.status === status).length;
    return {
      pending: count("pending"),
      review: count("review"),
      progress: count("progress"),
      completed: count("completed"),
      cancelled: count("cancelled"),
    };
  }

  function renderLanding() {
    mount.innerHTML = `
      <section class="portal-gate wrap">
        <div class="portal-mark">▦</div>
        <h1>Client Portal</h1>
        <p>Track your orders, see real-time progress updates, and communicate with the Ivorylabbs team.</p>
        <a class="btn btn-gold btn-lg portal-wide" href="portal.html?view=login">→ Login to my account</a>
        <a class="btn btn-ghost btn-lg portal-wide" href="portal.html?view=register">Create an account →</a>
        <p class="portal-note">Already placed an order? <a href="portal.html?view=register">Register with the same email</a> to link your orders.</p>
      </section>
    `;
  }

  function renderForm(kind) {
    const isLogin = kind === "login";
    mount.innerHTML = `
      <section class="portal-gate wrap">
        <div class="portal-mark">▦</div>
        <h1>${isLogin ? "Login to my account" : "Create an account"}</h1>
        <p>${isLogin ? "Pick up your orders and progress updates." : "Use the same email you ordered with to link existing work."}</p>
        <form class="portal-form" data-auth-form="${kind}">
          ${isLogin ? "" : `<label>Full name<input name="name" required autocomplete="name"></label>`}
          <label>Email<input type="email" name="email" required autocomplete="email"></label>
          <label>Password<input type="password" name="password" required minlength="6" autocomplete="${isLogin ? "current-password" : "new-password"}"></label>
          <p class="form-error" data-auth-error hidden></p>
          <button class="btn btn-gold btn-lg portal-wide" type="submit">${isLogin ? "Login" : "Create account"}</button>
        </form>
        <p class="portal-note">
          ${isLogin ? `Need an account? <a href="portal.html?view=register">Create one</a>` : `Already registered? <a href="portal.html?view=login">Login</a>`}
        </p>
      </section>
    `;
  }

  function renderDash(user) {
    const list = userOrders(user.email);
    const s = stats(list);
    mount.innerHTML = `
      <section class="portal-dash wrap">
        <div class="dash-head">
          <div>
            <p class="kicker">Client portal</p>
            <h1>Welcome back, ${user.name.split(" ")[0]}</h1>
            <p class="dash-email">${user.email}</p>
          </div>
          <div class="dash-actions">
            <a class="btn btn-gold" href="order.html">+ New Order</a>
            <button class="btn btn-ghost" type="button" data-logout>Logout</button>
          </div>
        </div>
        <div class="stat-grid">
          ${[
            ["Pending Review", s.pending],
            ["Under Review", s.review],
            ["In Progress", s.progress],
            ["Completed", s.completed],
            ["Cancelled", s.cancelled],
          ]
            .map(
              ([label, n]) => `<div class="stat-card"><span>${label}</span><strong>${n}</strong></div>`,
            )
            .join("")}
        </div>
        <div class="dash-orders-head">
          <h2>Your Orders</h2>
          <button type="button" class="text-btn" data-refresh>Refresh</button>
        </div>
        ${
          list.length
            ? `<div class="order-list">${list
                .map(
                  (o) => `<article class="order-card">
                    <div><strong>${o.id}</strong><p>${o.items.map((i) => i.name).join(", ")}</p></div>
                    <span class="status">${o.status.replace("-", " ")}</span>
                    <strong>$${o.total.toLocaleString("en-US")}</strong>
                  </article>`,
                )
                .join("")}</div>`
            : `<div class="empty-orders">
                <div class="portal-mark">▦</div>
                <h3>No orders yet</h3>
                <p>Your orders will appear here once you place them.</p>
                <a class="btn btn-gold" href="order.html">Browse Services</a>
              </div>`
        }
        <aside class="help-bar">
          <div>
            <h3>Need help with your order?</h3>
            <p>Our team is available 9am to 8pm WAT, Mon to Sat</p>
          </div>
          <div class="cta-row">
            <a class="btn btn-wa" href="quote.html">WhatsApp</a>
            <a class="btn btn-ghost" href="mailto:hello@ivorylabbs.com">Email</a>
          </div>
        </aside>
      </section>
    `;
  }

  function render() {
    const user = currentUser();
    const v = view("");
    if (user && (v === "login" || v === "register" || v === "")) {
      if (v === "login" || v === "register") {
        history.replaceState(null, "", "portal.html");
      }
      mount.className = "portal-shell";
      document.body.classList.add("portal-page");
      renderDash(user);
      return;
    }
    document.body.classList.add("portal-page");
    mount.className = "portal-shell";
    if (v === "login" || v === "register") renderForm(v);
    else renderLanding();
  }

  mount.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-auth-form]");
    if (!form) return;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const result =
      form.dataset.authForm === "login"
        ? login(data.email, data.password)
        : register({ name: data.name, email: data.email, password: data.password });
    const err = form.querySelector("[data-auth-error]");
    if (!result.ok) {
      err.hidden = false;
      err.textContent = result.error;
      return;
    }
    location.href = "portal.html";
  });

  mount.addEventListener("click", (event) => {
    if (event.target.closest("[data-logout]")) {
      logout();
      location.href = "portal.html";
    }
    if (event.target.closest("[data-refresh]")) render();
  });

  render();
})();
