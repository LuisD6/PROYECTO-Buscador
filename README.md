# Práctica de Filtrado de Autos en JavaScript

Este proyecto consiste en una aplicación de filtrado de autos utilizando JavaScript. Durante esta práctica, aprendí a manipular el DOM, trabajar con eventos y aplicar funciones de filtrado en un arreglo de objetos. El objetivo es permitir al usuario buscar autos según diferentes criterios, como marca, año, precio mínimo y máximo, número de puertas, transmisión y color.


## Mis Aprendizajes

- Manipulación del DOM para agregar o eliminar elementos dinámicamente.
- Uso de eventos `change` y `DOMContentLoaded` para actualizar la interfaz en tiempo real.
- Creación de filtros personalizados utilizando funciones de comparación.
- Modularización de código en funciones para mantener una estructura organizada y fácil de mantener.

## Funcionalidades

1. **Interacción con el DOM**:
   - Se utilizan selectores para acceder a diferentes elementos de la interfaz, como los campos de selección (`select`) y el contenedor de resultados.
   
2. **Manejo de Eventos**:
   - Cada campo de filtro (marca, año, precio, etc.) tiene un evento asociado que se activa cuando el usuario selecciona una opción o ingresa un valor. Estos eventos actualizan el objeto `dataSearch` con los criterios de búsqueda seleccionados.

3. **Filtrado de Datos**:
   - El arreglo de autos se filtra en función de los criterios seleccionados por el usuario.
   - Cada función de filtro revisa una propiedad específica del auto (por ejemplo, marca, año, precio) y devuelve solo los autos que coincidan con los valores seleccionados en los filtros.

4. **Mostrar Resultados**:
   - Los autos que cumplen con los criterios de búsqueda se muestran en el contenedor `#resultado`.
   - Si no se encuentran resultados, se muestra un mensaje de "No hay resultado, filtra otras opciones".

## Código Explicado

### Variables

- Se definen selectores para los elementos del formulario, que permiten obtener las opciones seleccionadas por el usuario.
- `dataSearch`: Un objeto que guarda los valores seleccionados en cada uno de los filtros, facilitando la búsqueda dinámica.

### Eventos

- `DOMContentLoaded`: Cuando se carga la página, se muestran todos los autos y se llena el selector de años.
- `change`: Cada campo del formulario tiene un evento `change` que actualiza el valor correspondiente en `dataSearch` y llama a la función `filtrarAuto` para mostrar los resultados filtrados.

### Funciones Principales

- **mostrarAutos(autos)**: Muestra en el DOM los autos que cumplen con los criterios de búsqueda.
- **llenarSelect()**: Llena el selector de años de forma dinámica, desde el año actual hasta diez años atrás.
- **filtrarAuto()**: Aplica múltiples filtros al arreglo de autos según los criterios seleccionados. Si no se encuentran resultados, se llama a la función `noResultado`.
- **noResultado()**: Muestra un mensaje cuando no hay autos que cumplan con los filtros.

### Funciones de Filtrado

Cada filtro (por ejemplo, `filtrarMarca`, `filtrarYear`, etc.) compara el valor seleccionado con las propiedades de cada auto y devuelve solo los autos que cumplen con los criterios.
