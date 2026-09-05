import type { Gif } from "../models/gif.interface";

export function createGifCard(gif: Gif): string {
  const {
    id,
    title,
    url,
    username = "Autor no disponible",
    tags,
    rating,
  } = gif;

  return `
    <article class="gif-card">
      <img src="${url}" alt="${title}" loading="lazy" />
      <div class="gif-card_content">
        <h2>${title}</h2>
        <p class="author"><strong>Autor:</strong> ${username} • ${rating.toUpperCase()}</p>
        <p class="tags">${tags.map((tag) => `#${tag}`).join(" ")}</p>
        <button class="btn-detail" data-gif-id="${id}">Ver detalle</button>
      </div>
    </article>
  `;
}

export function renderGallery(container: HTMLElement, collection: Gif[]): void {
  if (collection.length === 0) {
    container.innerHTML = `
      <p class="empty-state">
        No se encontraron GIFs. Prueba con otra palabra.
      </p>
    `;
    return;
  }

  container.innerHTML = collection.map(createGifCard).join("");
}
