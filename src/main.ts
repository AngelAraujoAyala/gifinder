import './styles/style.css';
import type { Gif } from './models/gif.interface';

const MEDIA_URL = 'https://media.giphy.com/media';

// Arreglo local tipado (incluye datos iniciales + desafío)
const gifs: Gif[] = [
  {
    id: 'cat-01',
    title: 'Gato programando',
    url: `${MEDIA_URL}/JIX9t2j0ZTN9S/giphy.gif`,
    username: 'gifinder',
    tags: ['gato', 'programación', 'computadora'],
    rating: 'g',
    description: 'Un gato escribiendo código en la computadora.'
  },
  {
    id: 'celebration-01',
    title: 'Celebración del equipo',
    url: `${MEDIA_URL}/g9582DNuQppxC/giphy.gif`,
    tags: ['equipo', 'éxito', 'celebración'],
    rating: 'g'
  },
  {
    id: 'coding-01',
    title: 'Código en progreso',
    url: `${MEDIA_URL}/13HgwGsXF0aiGY/giphy.gif`,
    username: 'developer',
    tags: ['código', 'desarrollo', 'teclado'],
    rating: 'pg',
    description: 'Pantalla con líneas de código en desarrollo.'
  },
  {
    id: 'idea-01',
    title: 'Nueva idea',
    url: `${MEDIA_URL}/10HlRnAWXxn0MhKLK/giphy.gif`,
    tags: ['idea', 'creatividad', 'solución'],
    rating: 'g'
  },
  {
    id: 'coffee-01',
    title: 'Café matutino',
    url: `${MEDIA_URL}/vxCqvjvJqjJHW/giphy.gif`,
    username: 'coffee_lover',
    tags: ['café', 'mañana', 'energía'],
    rating: 'g',
    description: 'Taza de café humeante para empezar el día.'
  },
  {
    id: 'rocket-01',
    title: 'Despliegue exitoso',
    url: `${MEDIA_URL}/b85mPT4Usz7fq/giphy.gif`,
    tags: ['cohete', 'despliegue', 'éxito'],
    rating: 'g'
  }
];

// Montar interfaz base en el DOM
const app = document.querySelector<HTMLDivElement>('#app');
if (!app) {
  throw new Error('No se encontró el elemento #app.');
}

app.innerHTML = `
  <main class="app-shell">
    <header class="hero">
      <p class="eyebrow">EC1 — Fundamentos de TypeScript</p>
      <h1>GIFinder</h1>
      <p>Explora una colección local de GIFs.</p>
    </header>

    <form id="search-form" class="search-form">
      <label for="search-input">Buscar por título, autor, etiqueta o descripción</label>
      <div class="search-row">
        <input id="search-input" name="query" type="search" placeholder="Ejemplo: gato" autocomplete="off" />
        <button type="submit">Buscar</button>
      </div>
    </form>

    <p id="search-status" class="status" aria-live="polite"></p>
    <section id="gif-gallery" class="gallery" aria-label="Resultados"></section>
  </main>
`;

// Seleccionar y validar elementos del DOM
const form = document.querySelector<HTMLFormElement>('#search-form');
const input = document.querySelector<HTMLInputElement>('#search-input');
const gallery = document.querySelector<HTMLElement>('#gif-gallery');
const status = document.querySelector<HTMLParagraphElement>('#search-status');

if (!form || !input || !gallery || !status) {
  throw new Error('No se pudo inicializar la interfaz de búsqueda.');
}

// Funciones de utilidad y filtrado
function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase('es-MX');
}

function matchesQuery(gif: Gif, query: string): boolean {
  const searchableText = [
    gif.title,
    gif.username ?? '',
    gif.description ?? '',
    ...gif.tags
  ].join(' ');

  return normalizeText(searchableText).includes(query);
}

function searchGifs(collection: Gif[], value: string): Gif[] {
  const query = normalizeText(value);
  if (!query) {
    return [...collection];
  }
  return collection.filter((gif) => matchesQuery(gif, query));
}

// Funciones para construir tarjetas y renderizar
function createGifCard(gif: Gif): string {
  const {
    title,
    url,
    username = 'Autor no disponible',
    description = 'Sin descripción',
    tags,
    rating
  } = gif;

  return `
    <article class="gif-card">
      <img src="${url}" alt="${title}" loading="lazy" />
      <div class="gif-card_content">
        <h2>${title}</h2>
        <p><strong>Autor:</strong> ${username}</p>
        <p><small>${description}</small></p>
        <p>Clasificación: ${rating.toUpperCase()}</p>
        <p class="tags">
          ${tags.map((tag) => `#${tag}`).join(' ')}
        </p>
      </div>
    </article>
  `;
}

const renderGifs = (collection: Gif[]): void => {
  const total = collection.length;
  const label = total === 1 ? 'resultado' : 'resultados';
  status.textContent = `${total} ${label}`;

  if (total === 0) {
    gallery.innerHTML = `
      <p class="empty-state">
        No se encontraron GIFs. Prueba con otra palabra.
      </p>
    `;
    return;
  }

  gallery.innerHTML = collection?.map(createGifCard).join('');
};


// Eventos
form.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  const results = searchGifs(gifs, input.value);
  renderGifs(results);
});

input.addEventListener('input', () => {
  if (input.value.trim() === '') {
    renderGifs(gifs);
  }
});

// Verificación inicial con find (requisito de la práctica)
const firstSafeGif = gifs.find((gif) => gif.rating === 'g');
console.log(`Primer GIF clasificación G: ${firstSafeGif?.title ?? 'Ninguno'}`);

// Carga inicial
renderGifs(gifs);