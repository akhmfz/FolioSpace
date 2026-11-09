(() => {
  const grid = document.querySelector("[data-template-grid]");
  if (!grid || !window.FOLIO_TEMPLATES) return;
  const empty = document.querySelector(".empty-state");
  const render = filter => {
    const items = window.FOLIO_TEMPLATES.filter(item => filter === "all" || item.category.toLowerCase() === filter);
    grid.innerHTML = items.map((item, index) => `
      <article class="template-card">
        <a class="template-image-link" href="template.html?slug=${item.slug}" aria-label="Open the ${item.name} example">
          <div class="template-image-wrap"><iframe class="template-live-preview" src="${item.demo}" title="${item.name} live website preview" loading="lazy" tabindex="-1" aria-hidden="true" scrolling="no"></iframe><span class="preview-live-label">Live demo</span></div>
        </a>
        <div class="template-card-meta"><span>${item.category}</span></div>
        <div class="template-card-title"><div><h3>${item.name}</h3><p>${item.short}</p></div><a class="round-arrow" href="template.html?slug=${item.slug}" aria-label="See details for ${item.name}">↗</a></div>
        <div class="template-card-actions"><a href="template.html?slug=${item.slug}">Details</a><a href="${item.demo}">Open demo ↗</a></div>
      </article>`).join("");
    if (empty) empty.hidden = items.length > 0;
    window.fitFolioPreviewFrames?.();
  };
  render("all");
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(item => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      render(button.dataset.filter);
    });
  });
})();
