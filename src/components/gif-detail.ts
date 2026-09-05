import type { Gif } from "../models/gif.interface";

export function renderGifDetail(container: HTMLElement, gif: Gif): void {
  const {
    title,
    url,
    username = "Autor no disponible",
    tags,
    rating,
    description = "Sin descripción disponible.",
  } = gif;

  container.innerHTML = `
    <div class="detail-card">
      <button id="close-detail-btn" class="btn-close">&times;</button>
      <div class="detail-grid">
        <img src="${url}" alt="${title}" />
        <div class="detail-info">
          <h2>${title}</h2>
          <p><strong>Autor:</strong> ${username}</p>
          <p><strong>Clasificación:</strong> ${rating.toUpperCase()}</p>
          <p><strong>Descripción:</strong> ${description}</p>
          <p class="tags"><strong>Etiquetas:</strong> ${tags.map((tag) => `#${tag}`).join(" ")}</p>
        </div>
      </div>
    </div>
  `;
  container.classList.remove("hidden");
}

export function clearGifDetail(container: HTMLElement): void {
  container.innerHTML = "";
  container.classList.add("hidden");
}
