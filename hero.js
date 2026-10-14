(function () {
  const heading = document.querySelector("[data-animated-heading]");
  if (heading) {
    const source = heading.textContent.replace(/\r/g, "");
    const lines = source.split("\n").map((line) => line.trim()).filter(Boolean);
    const charDelay = 30;
    const initialDelay = 200;
    heading.textContent = "";
    heading.setAttribute("aria-label", lines.join(" "));
    lines.forEach((line, lineIndex) => {
      const row = document.createElement("span");
      row.className = "site-hero-line";
      let word = document.createElement("span");
      word.className = "site-hero-word";
      [...line].forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.className = "site-hero-char";
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.transitionDuration = "500ms";
        span.style.transitionDelay =
          initialDelay + lineIndex * line.length * charDelay + charIndex * charDelay + "ms";
        if (char === " ") {
          word.appendChild(span);
          row.appendChild(word);
          word = document.createElement("span");
          word.className = "site-hero-word";
        } else {
          word.appendChild(span);
        }
      });
      row.appendChild(word);
      heading.appendChild(row);
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => heading.classList.add("is-in"));
    });
  }

  document.querySelectorAll("[data-fade-in]").forEach((el) => {
    const delay = Number(el.dataset.fadeDelay || 0);
    const duration = Number(el.dataset.fadeDuration || 1000);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transitionProperty = "opacity";
    el.style.transitionDuration = duration + "ms";
    window.setTimeout(() => {
      el.style.opacity = "1";
    }, delay);
  });
})();
