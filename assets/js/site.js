(() => {
  const config = window.FOLIOSPACE_CONFIG || {};
  const toast = (message) => {
    const el = document.querySelector(".toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(window.__folioToastTimer);
    window.__folioToastTimer = setTimeout(() => el.classList.remove("show"), 3600);
  };
  window.folioToast = toast;

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    nav.id = "primary-navigation";
    toggle.setAttribute("aria-controls", nav.id);
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }));
    document.addEventListener("keydown", event => {
      if (event.key !== "Escape" || toggle.getAttribute("aria-expanded") !== "true") return;
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.focus();
    });
  }

  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const number = String(config.whatsappNumber || "").replace(/\D/g, "");
      if (!number) {
        toast("WhatsApp is not configured yet. Add your number in assets/js/config.js.");
        return;
      }
      const message = link.dataset.message || "Hello FolioSpace! I'd like to discuss a portfolio website.";
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-social-placeholder]").forEach(link => {
    link.addEventListener("click", event => {
      const url = config.instagramUrl || "";
      if (url) return;
      event.preventDefault();
      toast("Add your Instagram profile link in assets/js/config.js.");
    });
    if (config.instagramUrl) link.href = config.instagramUrl;
  });

  document.querySelectorAll("details").forEach(detail => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        document.querySelectorAll("details[open]").forEach(other => {
          if (other !== detail) other.open = false;
        });
      }
    });
  });

  // Screenshot gallery modal
  const modal = document.querySelector("[data-gallery-modal]");
  if (modal) {
    const image = modal.querySelector("[data-modal-image]");
    const count = modal.querySelector("[data-modal-count]");
    let gallery = [];
    let index = 0;
    const render = () => {
      if (!gallery.length) return;
      image.src = gallery[index];
      count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`;
    };
    const close = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    };
    document.addEventListener("click", event => {
      const trigger = event.target.closest("[data-open-gallery]");
      if (trigger) {
        gallery = (trigger.dataset.gallery || "").split("|").filter(Boolean);
        index = Number(trigger.dataset.galleryIndex || 0);
        if (!Number.isInteger(index) || index < 0 || index >= gallery.length) index = 0;
        document.querySelectorAll(".detail-thumb").forEach((thumb, thumbIndex) => {
          thumb.classList.toggle("selected", thumbIndex === index);
        });
        render();
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
      }
      if (event.target.closest("[data-modal-close]")) close();
      if (event.target.closest("[data-modal-next]")) { index = (index + 1) % gallery.length; render(); }
      if (event.target.closest("[data-modal-prev]")) { index = (index - 1 + gallery.length) % gallery.length; render(); }
    });
    document.addEventListener("keydown", event => {
      if (!modal.classList.contains("is-open")) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") { index = (index + 1) % gallery.length; render(); }
      if (event.key === "ArrowLeft") { index = (index - 1 + gallery.length) % gallery.length; render(); }
    });
  }

  const fitPreviewFrames = () => {
    document.querySelectorAll(".template-live-preview, .hero-desktop iframe").forEach(frame => {
      const parent = frame.parentElement;
      if (!parent?.clientWidth) return;
      if (!frame.dataset.fitRatio) {
        frame.dataset.fitRatio = String(frame.offsetWidth / parent.clientWidth);
        frame.dataset.fitHeightRatio = String(frame.offsetHeight / frame.offsetWidth);
      }
      const baseWidth = 1440;
      frame.style.width = `${baseWidth}px`;
      frame.style.height = `${baseWidth * Number(frame.dataset.fitHeightRatio)}px`;
      frame.style.setProperty("--preview-scale", String(parent.clientWidth * Number(frame.dataset.fitRatio) / baseWidth));
    });
  };
  window.fitFolioPreviewFrames = fitPreviewFrames;
  document.addEventListener("DOMContentLoaded", fitPreviewFrames, { once: true });
  window.addEventListener("resize", fitPreviewFrames);
})();
