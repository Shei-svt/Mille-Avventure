# Mille Avventure ♡

## ¿De qué trata mi proyecto?

Mille Avventure es un catálogo de videojuegos que hice con React. La idea es tener un espacio donde pueda ver diferentes juegos, conocer un poco sobre ellos y guardar mis favoritos.

Quise darle un estilo bonito, con tonos lilas y rosados, y agregar algunas funciones para que sea más fácil encontrar los juegos que me interesan.

## ¿Qué tiene?

- Un catálogo con diferentes videojuegos y sus portadas.
- Una barra de búsqueda para encontrar juegos por su nombre.
- Un filtro para organizar los juegos por género.
- Una opción para ver solamente los videojuegos favoritos.
- Un botón para agregar o quitar juegos de favoritos.
- Una ventana con más información de cada videojuego.
- Un diseño adaptable a diferentes tamaños de pantalla.

## ¿Cómo ejecutar el proyecto?

Para abrir el proyecto en mi computador, primero necesito tener instalado Node.js.

1. Abro la carpeta del proyecto en Visual Studio Code.
2. Abro la terminal desde Visual Studio Code.
3. Escribo el siguiente comando para instalar las dependencias:

   npm install   

4. Cuando termine la instalación, ejecuto el proyecto con:

   npm run dev

5. En la terminal aparece una dirección local. La abro en el navegador para ver el catálogo.

Para detener el proyecto, presiono `Ctrl + C` en la terminal.

## ¿Cómo está organizado?

- `src`: contiene los archivos principales de la aplicación, como los componentes y los estilos.
- `public`: contiene los recursos públicos del proyecto, como las imágenes de los videojuegos.
- `package.json`: contiene la información del proyecto, las dependencias y los comandos que se utilizan para ejecutarlo.
- `index.html`: es el archivo HTML desde el que se carga la aplicación.

## ¿Cómo utilicé React?

**Componentes:** los utilicé para dividir la página en partes, como las tarjetas de los videojuegos y la ventana donde se muestra su información. Así, cada parte tiene su propia función.

**Props:** me permiten pasar información de un componente a otro. Por ejemplo, cada tarjeta recibe los datos del videojuego que debe mostrar, como su nombre, imagen y descripción.

**Estado (`useState`):** lo utilicé para manejar los cambios que ocurren en la página, como escribir en el buscador, seleccionar filtros, abrir los detalles de un juego y marcarlo como favorito.

**Eventos:** permiten que la página responda a las acciones del usuario. Por ejemplo, cuando escribo el nombre de un juego, selecciono un género, presiono el botón de favoritos o abro los detalles, se ejecutan las funciones correspondientes.

## ¿Cómo probarlo?

Para comprobar que las funciones sirven, puedo:

1. Escribir el nombre de un videojuego en la barra de búsqueda.
2. Seleccionar un género y revisar los resultados.
3. Marcar uno o varios juegos como favoritos.
4. Activar el filtro de favoritos para ver solamente los seleccionados.
5. Abrir los detalles de un videojuego y consultar su información.


**Proyecto realizado por:** Sheila Daniela Hernández Carrillo.

