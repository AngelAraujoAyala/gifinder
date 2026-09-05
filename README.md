# GIFinder - Explorador de Contenido Multimedia

Aplicación web desarrollada con Vite y TypeScript para la exploración y búsqueda de GIFs. Proyecto correspondiente a la asignatura **Diseño Frontend con Frameworks**.

## Funcionalidades actuales
* **Representación tipada de GIFs:** Modelo mediante interfaces y tipos en TypeScript (`Gif` y `GifRating`) sin uso de `any`.
* **Galería local dinámica:** Generación de tarjetas HTML dinámicas en el DOM a partir de una colección local de objetos.
* **Búsqueda y filtrado:** Búsqueda en tiempo real por título, autor, etiquetas y descripción ignorando mayúsculas y espacios externos.
* **Manejo de estados:** Comunicación clara de número de resultados e interfaz para el caso sin coincidencias.
* **Diseño responsivo:** Adaptación de la galería y controles para pantallas angostas.

## Estado del proyecto
EC1 F1 A2 completada. Los datos aún son locales; la integración con Giphy API y Fetch API se realizará en las siguientes fases del desarrollo.

## Tecnologías utilizadas
* HTML5 / CSS3
* TypeScript
* Vite
* pnpm

## Instrucciones de ejecución

1. Instalar dependencias:
   ```bash
   pnpm install