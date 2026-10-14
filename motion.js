(function () {
  if (window.__ivoryMotion) return;
  window.__ivoryMotion = true;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (reduce) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
  });

  const liquid = document.querySelector("[data-liquid]");
  const hero = document.querySelector(".home-hero");
  if (liquid && hero && !reduce && fine) {
    hero.addEventListener("pointermove", (event) => {
      const box = hero.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      liquid.style.setProperty("--lx", `${x * 48}px`);
      liquid.style.setProperty("--ly", `${y * 36}px`);
    });
  }

  const wave = document.querySelector("[data-wave]");
  if (wave && !reduce) {
    let t = 0;
    const tick = () => {
      t += 0.018;
      const a = 46 + Math.sin(t) * 16;
      const b = 46 + Math.cos(t * 0.85) * 18;
      const c = 46 + Math.sin(t * 1.15 + 1) * 14;
      wave.setAttribute(
        "d",
        `M0,${a} C240,${b} 480,${c} 720,${a} C960,${b} 1200,${c} 1440,${a} L1440,90 L0,90 Z`,
      );
      requestAnimationFrame(tick);
    };
    tick();
  }

  if (!reduce && fine) {
    const cursor = document.createElement("div");
    cursor.className = "ivory-cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.innerHTML = '<i class="ivory-cursor-ring"></i><i class="ivory-cursor-dot"></i>';
    document.body.appendChild(cursor);
    const ring = cursor.querySelector(".ivory-cursor-ring");
    const dot = cursor.querySelector(".ivory-cursor-dot");
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    const hotSel = "a, button, summary, input, select, textarea, .work-card, .card, .svc-card, .quiz-option";

    window.addEventListener("pointermove", (event) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add("is-on");
    });
    window.addEventListener("pointerleave", () => cursor.classList.remove("is-on"));
    document.addEventListener("pointerover", (event) => {
      if (event.target.closest(hotSel)) cursor.classList.add("is-hot");
    });
    document.addEventListener("pointerout", (event) => {
      if (event.target.closest(hotSel) && !event.relatedTarget?.closest(hotSel)) {
        cursor.classList.remove("is-hot");
      }
    });

    const follow = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(follow);
    };
    follow();
  }
})();
