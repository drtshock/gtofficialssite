/* ==========================================================================
   GT OFFICIALS — Main JavaScript
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Header scroll effect ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }


  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      // Swap icon
      const iconOpen = menuToggle.querySelector(".icon-menu");
      const iconClose = menuToggle.querySelector(".icon-close");
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? "none" : "block";
        iconClose.style.display = isOpen ? "block" : "none";
      }
      // Lock body scroll
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close menu on link click
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        const iconOpen = menuToggle.querySelector(".icon-menu");
        const iconClose = menuToggle.querySelector(".icon-close");
        if (iconOpen) iconOpen.style.display = "block";
        if (iconClose) iconClose.style.display = "none";
        document.body.style.overflow = "";
      });
    });
  }


  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.contains("open");

      // Close all items in the same group
      const group = item.closest(".faq-group");
      if (group) {
        group.querySelectorAll(".faq-item.open").forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove("open");
            const ans = openItem.querySelector(".faq-answer");
            if (ans) ans.style.maxHeight = null;
          }
        });
      }

      // Toggle current
      item.classList.toggle("open", !isOpen);
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });


  /* ---------- Scroll-triggered fade-in animations ---------- */
  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    fadeEls.forEach(el => el.classList.add("visible"));
  }


  /* ---------- Active nav link ---------- */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });


  /* ---------- Netlify form: simple success message ---------- */
  document.querySelectorAll("form[data-netlify='true']").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
        .then(() => {
          form.innerHTML = `
            <div style="text-align:center; padding: 2rem 1rem;">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <h3 style="margin-top:1rem; color:#0C2340;">Thank you!</h3>
              <p style="color:#6B7785; margin-top:0.5rem;">We've received your message and will be in touch soon.</p>
            </div>
          `;
        })
        .catch(() => {
          alert("Something went wrong. Please call us at 612-720-1822 or email gtofficials@puzlinc.com.");
        });
    });
  });
});
