import type { Gif } from "../models/gif.interface";

const MEDIA_URL = 'https://media.giphy.com/media';


export const gifs: Gif[] = [
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
