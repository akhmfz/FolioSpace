(() => {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug") || "minimalist";
  const item = (window.FOLIO_TEMPLATES || []).find(template => template.slug === slug) || window.FOLIO_TEMPLATES[0];
  if (!item) return;
  document.title = `${item.name} | FolioSpace`;
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", item.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://foliospace.akhmfz.my.id/template.html?slug=${encodeURIComponent(item.slug)}`);
  const set = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
  set("[data-detail-name]", item.name);
   set("[data-detail-category]", item.category);
   set("[data-detail-title]", item.name);
  set("[data-detail-description]", item.description);
  set("[data-detail-long]", item.longDescription);
  set("[data-detail-audience]", item.audience);
  const frame = document.querySelector("[data-main-preview]");
   if (frame) { frame.src = item.demo; frame.title = `${item.name} portfolio example preview`; }
  document.querySelectorAll("[data-demo-link]").forEach(link => link.href = item.demo);
  document.querySelectorAll("[data-template-whatsapp]").forEach(link => {
     link.dataset.message = `Hello FolioSpace! I'd like to use the ${item.name} example as a starting point for a portfolio website. Could you send me a quote?`;
  });
  const features = document.querySelector("[data-detail-features]");
  if (features) features.innerHTML = item.features.map((feature, i) => `<div class="detail-feature"><span>${String(i + 1).padStart(2, "0")}</span>${feature}</div>`).join("");

  const preview = document.querySelector(".detail-live-preview");
  const controls = document.querySelectorAll("[data-preview-size]");
  const setPreviewWidth = () => {
    if (!preview || !frame) return;
    const size = preview.dataset.size || "desktop";
    frame.style.width = size === "desktop" ? "100%" : `${Math.min(size === "mobile" ? 390 : 768, preview.clientWidth)}px`;
  };
  controls.forEach(button => button.addEventListener("click", () => {
    if (!preview || !frame) return;
    const size = button.dataset.previewSize;
    controls.forEach(control => {
      const selected = control === button;
      control.classList.toggle("is-selected", selected);
      control.setAttribute("aria-pressed", String(selected));
    });
    preview.dataset.size = size;
    setPreviewWidth();
  }));
  window.addEventListener("resize", setPreviewWidth);
})();
