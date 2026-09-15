(() => {
  const STORAGE_KEY = "mob-motion";
  const root = document.documentElement;
  const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const readStored = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  };

  const writeStored = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      // Private mode can block persistence; the in-session toggle still works.
    }
  };

  const resolveMotion = (stored) => {
    if (stored === "on" || stored === "off") return stored;
    return reduceQuery.matches ? "off" : "on";
  };

  const syncToggle = (value) => {
    const button = document.querySelector("[data-motion-toggle]");
    if (!button) return;
    const on = value === "on";
    button.setAttribute("aria-pressed", on ? "true" : "false");
    button.setAttribute("aria-label", on ? "Disable motion" : "Enable motion");
  };

  const applyMotion = (value) => {
    root.dataset.motion = value;
    syncToggle(value);
    if (value === "off") {
      document.querySelectorAll("[data-chapter]").forEach((chapter) => {
        chapter.classList.remove("is-away");
      });
    }
  };

  const initMotion = () => {
    applyMotion(resolveMotion(readStored()));

    const button = document.querySelector("[data-motion-toggle]");
    if (button) {
      button.addEventListener("click", () => {
        const next = root.dataset.motion === "on" ? "off" : "on";
        writeStored(next);
        applyMotion(next);
      });
    }

    const followSystem = () => {
      if (readStored() == null) applyMotion(resolveMotion(null));
    };
    if (typeof reduceQuery.addEventListener === "function") {
      reduceQuery.addEventListener("change", followSystem);
    } else if (typeof reduceQuery.addListener === "function") {
      reduceQuery.addListener(followSystem);
    }
  };

  const initHeader = () => {
    const header = document.querySelector("[data-site-header]");
    const hero = document.querySelector("[data-hero]");
    if (!header || !hero || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle("is-solid", !entry.isIntersecting);
      },
      { threshold: 0.12 }
    );
    observer.observe(hero);
  };

  const initChapters = () => {
    const chapters = document.querySelectorAll("[data-chapter]");
    if (!chapters.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (root.dataset.motion !== "on") return;
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-away", !entry.isIntersecting);
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );
    chapters.forEach((chapter) => observer.observe(chapter));
  };

  const boot = () => {
    initMotion();
    initHeader();
    initChapters();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
