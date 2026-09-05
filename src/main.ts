import "./styles/style.css";
import { gifs } from "./data/gifs";
import { RequestStatus } from "./models/gif.interface";
import { searchGifs, findGifById } from "./services/gif.service";
import { renderGallery } from "./components/gallery";
import { renderGifDetail, clearGifDetail } from "./components/gif-detail";
import { renderStatus } from "./components/status";

// 1. Renderizar estructura base en el DOM
const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("No se encontró el elemento #app.");
}

app.innerHTML = `
<main class="app-shell">
  <header class="hero">
    <p class="eyebrow">EC1 — Refactorización Modular</p>
    <h1>GIFinder</h1>
    <p>Explora una colección local de GIFs estructurada en módulos.</p>
  </header>

  <form id="search-form" class="search-form">
    <label for="search-input">Buscar por título, autor, etiqueta o descripción</label>
    <div class="search-row">
      <input id="search-input" name="query" type="search" placeholder="Ejemplo: gato o café" autocomplete="off" />
      <button type="submit">Buscar</button>
    </div>
  </form>

  <p id="search-status" class="status" aria-live="polite"></p>

  <aside id="gif-detail-container" class="detail-container hidden"></aside>

  <section id="gif-gallery" class="gallery" aria-label="Resultados"></section>
</main>
`;

// 2. Selección y validación estricta de elementos DOM
const form = document.querySelector<HTMLFormElement>("#search-form");
const input = document.querySelector<HTMLInputElement>("#search-input");
const gallery = document.querySelector<HTMLElement>("#gif-gallery");
const statusElem =
  document.querySelector<HTMLParagraphElement>("#search-status");
const detailContainer = document.querySelector<HTMLElement>(
  "#gif-detail-container",
);

if (!form || !input || !gallery || !statusElem || !detailContainer) {
  throw new Error("No se pudieron inicializar los elementos de la interfaz.");
}

// 3. Función auxiliar recibiendo los elementos DOM validados
function updateUI(
  query: string,
  galleryEl: HTMLElement,
  statusEl: HTMLElement,
  detailEl: HTMLElement,
): void {
  clearGifDetail(detailEl);
  const results = searchGifs(gifs, query);

  if (results.length === 0) {
    renderStatus(statusEl, RequestStatus.Empty);
  } else {
    renderStatus(statusEl, RequestStatus.Success, results.length);
  }

  renderGallery(galleryEl, results);
}

// 4. Conexión de Eventos
form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  updateUI(input.value, gallery, statusElem, detailContainer);
});

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    updateUI("", gallery, statusElem, detailContainer);
  }
});

// Delegación de eventos para los botones "Ver detalle"
gallery.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const detailBtn = target.closest<HTMLButtonElement>("[data-gif-id]");

  if (detailBtn) {
    const gifId = detailBtn.dataset.gifId;
    if (gifId) {
      const selectedGif = findGifById(gifId, gifs);
      if (selectedGif) {
        renderGifDetail(detailContainer, selectedGif);
      }
    }
  }
});

detailContainer.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.id === "close-detail-btn") {
    clearGifDetail(detailContainer);
  }
});

// 5. Carga inicial
updateUI("", gallery, statusElem, detailContainer);
