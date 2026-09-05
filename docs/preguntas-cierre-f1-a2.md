# Preguntas de cierre EC1 F1 A2

**Nombre:** Angel Rodrigo Araujo Ayala  
**Grupo:** 001

## 1. Modelo Gif
Garantiza que todos los GIFs tengan una estructura uniforme en tiempo de desarrollo. Define propiedades obligatorias y opcionales, evita inconsistencias de datos, previene errores de acceso y ofrece autocompletado e intellisense en el editor.

## 2. Interfaz y objeto literal
La **interfaz** es un contrato/molde de TypeScript que describe la forma del objeto y desaparece al compilar a JS. El **objeto literal** es la instancia concreta almacenada en memoria durante la ejecución con valores reales asignados.

## 3. Arreglo tipado
`Gif[]` indica que el arreglo solo admite objetos que cumplan con la interfaz `Gif`. Evita que se introduzcan objetos incompletos, tipos erróneos o valores primitivos (como números o strings sueltos).

## 4. Propiedades opcionales
Porque no todos los GIFs cuentan con un usuario creador o una descripción. El operador `?` permite omitir esas claves al instanciar el objeto sin marcar error de tipo.

## 5. Uso de let y const
`const` se usa para referencias que no cambian (arreglos, elementos del DOM). Se usaría `let` para variables reasignables, como un contador dentro de un bucle o una variable global que almacene la lista filtrada tras cada búsqueda.

## 6. Firma de funciones
* `normalizeText`: recibe `string` y devuelve `string` (limpio y en minúsculas).
* `searchGifs`: recibe `collection: Gif[]` y `value: string`; devuelve `Gif[]` filtrado.
* `createGifCard`: recibe `gif: Gif` y devuelve `string` (el HTML de la tarjeta).

## 7. Métodos de arreglos
* `forEach`: ejecuta una acción por elemento y devuelve `void`.
* `filter`: devuelve un nuevo arreglo con los elementos que cumplen una condición.
* `map`: transforma cada elemento y devuelve un nuevo arreglo de igual tamaño.
* `find`: devuelve el primer elemento que coincide con la condición o `undefined`.

## 8. Control de undefined en find
Devuelve `undefined` cuando ninguna tarjeta coincide. Se controló combinando encadenamiento opcional y coalescencia nula: `firstSafeGif?.title ?? 'Ninguno'`, evitando errores en tiempo de ejecución.

## 9. Callbacks
Es una función enviada como argumento a otra para ejecutarse después. 
Ejemplos: `(gif) => matchesQuery(gif, query)` en `.filter()` y `(tag) => '#' + tag` en `.map()`.

## 10. Template strings
Permiten intercalar variables e insertar expresiones con `${expresion}` de forma limpia, además de escribir cadenas HTML multilínea legibles sin concatenar con `+`.

## 11. Destructuración y valor predeterminado
Extrae propiedades del objeto `gif` en variables locales sin repetir `gif.propiedad`. El valor predeterminado (`username = 'Autor no disponible'`) muestra una cadena alternativa cuando la propiedad opcional es `undefined`.

## 12. Validación del DOM
`querySelector` retorna `null` si el elemento no existe en el HTML. Se validó comprobando las referencias con un bloque `if (!form || !input ...)` y lanzando un `throw new Error()`, asegurando que para TypeScript los elementos no sean `null`.

## 13. Evento preventDefault
Detiene el envío tradicional del formulario HTML que recargaría la página. Permite procesar la búsqueda de manera fluida en memoria dentro de la aplicación (SPA).

## 14. Búsqueda sin coincidencias
`searchGifs` retorna `[]`. `renderGifs` detecta la longitud 0, actualiza el contador a `0 resultados` en el DOM, inserta el mensaje de estado vacío `<p class="empty-state">` y realiza un retorno temprano.

## 15. Cambio con Giphy API
La obtención de datos pasará a ser asíncrona (`async/await` y `fetch`), requerirá mapear/normalizar la respuesta JSON externa hacia nuestra interfaz `Gif`, y exigirá manejar estados de carga (loading) y errores de red.

## 16. Dificultades y solución
Me pasó que al ejecutar el pnpm build me aparecía el error de que gallery y status podían ser null, esto es porque la funcion de renderGifs estaba declarada con "function" esto hace que typescript la tratae como si existiera desde el inicio del módulo, antes de la validación if (!gallery || !status) throw. Como en ese punto status y gallery aún podrían ser null, dentro de la función el compilador no aplica el narrowing y ve el tipo original T | null. La solución fue cambiar la declaración de función a una arrow function asignada a una constante, creada después de la validación.