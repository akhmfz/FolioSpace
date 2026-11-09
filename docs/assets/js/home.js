(() => {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid || !window.FOLIO_TEMPLATES) return;
  const featured = window.FOLIO_TEMPLATES.slice(0, 6);
  grid.innerHTML = featured.map((item, index) => `
    <article class="template-card">
      <div class="template-image-wrap">
        <iframe class="template-live-preview" src="${item.demo}" title="${item.name} live website preview" loading="lazy" tabindex="-1" aria-hidden="true" scrolling="no"></iframe>
         <a class="template-preview-hitarea" href="template.html?slug=${item.slug}" aria-label="Open the ${item.name} example"></a>
         <span class="preview-live-label">Live demo</span>
      </div>
       <div class="template-card-meta"><span>${item.category}</span></div>
       <div class="template-card-title"><div><h3>${item.name}</h3><p>${item.short}</p></div><a class="round-arrow" href="template.html?slug=${item.slug}" aria-label="See details for ${item.name}">↗</a></div>
       <div class="template-card-actions"><a href="template.html?slug=${item.slug}">Details</a><a href="${item.demo}">Open demo ↗</a></div>
    </article>`).join("");
})();
