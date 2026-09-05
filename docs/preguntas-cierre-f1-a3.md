# Preguntas de Cierre — EC1 F2 A3

**Nombre:** Angel Rodrigo Araujo Ayala  
**Asignatura:** Diseño Frontend con Frameworks  
**Proyecto:** GIFinder  

## 1. Organización Modular
Separar la aplicación en módulos (`components`, `data`, `services`, `utils`) mejora la mantenibilidad, legibilidad, escalabilidad y reusabilidad del código. Permite aislar responsabilidades sin saturar `main.ts`.

## 2. Tipado y Enumeraciones
El uso de `enum RequestStatus` previene errores de escritura (*typos*) y restringe las posibilidades de estado a valores válidos e inmutables en tiempo de desarrollo.

## 3. Capa de Servicios
`gif.service.ts` encapsula la lógica de negocio (búsqueda y consulta por id) fuera de los componentes visuales o del archivo de arranque `main.ts`.

## 4. Búsqueda por Identificador
`findGifById` recibe una colección y una cadena `id`, utilizando el método `.find()` para retornar el primer objeto `Gif` coincidente o `undefined`.

## 5. Delegación de Eventos
Se escuchan los eventos `click` en el contenedor padre (`gallery`) y se identifica cuál tarjeta fue presionada a través del atributo `data-gif-id`, evitando adjuntar un *event listener* por cada tarjeta.

## 6. Estado del Detalle
El componente `gif-detail.ts` recibe un objeto `Gif` para renderizar el panel informativo e inyectar/remover la clase CSS `.hidden` según corresponda.

## 7. Manejo de Estados de la Interfaz
Mediante un bloque `switch` operando sobre `RequestStatus`, se renderizan los mensajes visuales correctos para el estado inicial, búsqueda exitosa, sin resultados o error.

## 8. Desestructuración y Spread/Rest
* Desestructuración: extrae propiedades del objeto `Gif` directamente a variables locales.
* Operador Spread (`...`): clona arreglos e inserta etiquetas en arreglos de búsqueda sin modificar las referencias originales.

## 9. Limpieza del Detalle
Al realizar una nueva búsqueda en el input/formulario, la función `clearGifDetail()` oculta el contenedor del detalle para evitar inconsistencias visuales.

## 10. Principio de Responsabilidad Única
Cada módulo realiza exclusivamente una función: `text.ts` normaliza textos, `gifs.ts` almacena datos, `status.ts` gestiona mensajes y `main.ts` orquesta eventos.

## 11. Ventajas sobre un Código Monolítico
Facilita la refactorización futura (por ejemplo, reemplazar datos locales por la API de Giphy) modificando únicamente la capa de servicios sin alterar los componentes UI ni `main.ts`.

## 12. Compilación Estricta
Garantiza que no existan errores de tipo en tiempo de compilación con `pnpm build`, asegurando la ausencia del tipo `any` y previniendo fallos en tiempo de ejecución.