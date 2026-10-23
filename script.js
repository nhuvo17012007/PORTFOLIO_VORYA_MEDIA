(() => {
  // ---------- Năm ở footer ----------
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Menu mobile ----------
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Gallery: sinh 6 ô, tự dùng ảnh nếu có ----------
  const grid = document.getElementById("galleryGrid");
  for (let i = 1; i <= 6; i++) {
    const item = document.createElement("div");
    item.className = "g-item reveal";
    const img = new Image();
    img.alt = `Ấn phẩm ${i}`;
    img.loading = "lazy";
    img.src = `assets/gallery/g${i}.jpg`;
    img.onload = () => { item.textContent = ""; item.appendChild(img); };
    item.textContent = `0${i}`;
    grid.appendChild(item);
  }

  // ---------- Reveal khi cuộn + biểu đồ + đếm số ----------
  const animateBars = (root) => {
    root.querySelectorAll(".bar").forEach((bar) => {
      const pct = (Number(bar.dataset.value) / Number(bar.dataset.max)) * 100;
      bar.querySelector("i").style.width = pct + "%";
    });
  };

  const animateCounts = (root) => {
    root.querySelectorAll(".count").forEach((el) => {
      const to = Number(el.dataset.to);
      const suffix = el.dataset.suffix || "";
      const dec = Number(el.dataset.decimals || 0);
      const fmt = (v) => v.toFixed(dec).replace(".", ",") + suffix;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { el.textContent = fmt(to); return; }
      const start = performance.now();
      const dur = 1200;
      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(to * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("in");
      animateBars(el);
      animateCounts(el);
      io.unobserve(el);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // ---------- Đánh dấu mục menu đang xem ----------
  const sections = [...document.querySelectorAll("main section[id]")];
  const navAnchors = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
})();
