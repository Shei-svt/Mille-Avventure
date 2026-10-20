
import { useMemo, useState } from "react";
import "./App.css";

const videojuegos = [
  {
    id: 1,
    nombre: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura",
    anio: 2017,
    imagen: "/images/zelda.jpg",
    plataforma: "Nintendo Switch, Wii U",
    descripcion:
      "Link despierta después de un largo sueño y descubre que Hyrule ya no es el reino que recordaba. Sin tener todas las respuestas sobre su pasado, debe explorar sus tierras, recuperar sus recuerdos y encontrar la manera de detener la amenaza que pone en peligro al reino. Puedes recorrer montañas, descubrir santuarios, resolver acertijos, cocinar y enfrentarte a enemigos. Lo interesante es que el mundo te permite experimentar y encontrar tus propias soluciones, así que cada aventura puede ser diferente.",
    destacado: "Explorar sin seguir siempre el mismo camino.",
  },
  {
    id: 2,
    nombre: "Genshin Impact",
    genero: "RPG de acción",
    anio: 2020,
    imagen: "/images/genshin.jpg",
    plataforma: "PC, PlayStation, Android, iOS",
    descripcion:
      "Teyvat es un mundo lleno de regiones, culturas, personajes y secretos. En la historia acompañas al Viajero en su búsqueda de su hermano o hermana, mientras descubre misterios relacionados con los dioses y las naciones que visita. El combate se basa en combinar personajes y elementos como Pyro, Hydro, Electro y Cryo para crear reacciones. También puedes cocinar, completar misiones, abrir cofres, resolver acertijos y explorar a tu propio ritmo.",
    destacado: "Personajes con historias y habilidades diferentes.",
  },
  {
    id: 3,
    nombre: "Mobile Legends: Bang Bang",
    genero: "Estrategia",
    anio: 2016,
    imagen: "/images/mobile-legends.jpg",
    plataforma: "Android, iOS",
    descripcion:
      "Es un juego de batallas multijugador en el que dos equipos de cinco jugadores intentan destruir la base rival. Cada héroe cumple una función, como tanque, mago, tirador, asesino o apoyo, y elegirlo bien puede marcar la diferencia. Durante las partidas debes conseguir oro, mejorar tus habilidades, defender tus torres y coordinarte con el equipo. No basta con atacar sin pensar: saber cuándo avanzar, retirarse o ayudar a un compañero es parte de la estrategia.",
    destacado: "Trabajo en equipo y decisiones en tiempo real.",
  },
  {
    id: 4,
    nombre: "Snack Bar",
    genero: "Simulación",
    anio: 2023,
    imagen: "/images/snack-bar.jpg",
    plataforma: "Android, iOS",
    descripcion:
      "Comienzas con un pequeño negocio de comida y trabajas para convertirlo en un restaurante cada vez más completo. Atiendes a los clientes, mejoras las estaciones de trabajo, amplías el menú y utilizas las ganancias para seguir creciendo. La progresión es sencilla de entender, pero siempre aparece algo nuevo que mejorar. Es ideal para jugar un rato, avanzar poco a poco y disfrutar la sensación de ver cómo un negocio pequeño se transforma.",
    destacado: "Mejorar el negocio y avanzar poco a poco.",
  },
  {
    id: 5,
    nombre: "Papa's Freezeria",
    genero: "Cocina y gestión",
    anio: 2011,
    imagen: "/images/papas-freezeria.jpg",
    plataforma: "PC y dispositivos móviles, según la versión",
    descripcion:
      "Trabajas en una heladería donde cada cliente llega con un pedido particular. Debes preparar la base del helado, mezclar los ingredientes, añadir siropes y complementos y cuidar la presentación final. Cada estación requiere atención para que el pedido quede lo mejor posible. A medida que avanzas, aparecen nuevos clientes, ingredientes y desafíos. Es un juego de paciencia, organización y precisión, especialmente cuando tienes varios pedidos pendientes.",
    destacado: "Preparar cada pedido con atención a los detalles.",
  },
  {
    id: 6,
    nombre: "Minecraft",
    genero: "Supervivencia",
    anio: 2011,
    imagen: "/images/minecraft.jpg",
    plataforma: "PC, consolas y dispositivos móviles",
    descripcion:
      "Entras a un mundo generado con bloques donde puedes construir, explorar, fabricar herramientas y descubrir lugares inesperados. En supervivencia necesitas recolectar materiales, conseguir comida, crear refugios y prepararte para las criaturas que aparecen durante la noche. En creativo tienes libertad para construir ciudades, casas, mecanismos o cualquier estructura que imagines. También puedes explorar cuevas, visitar otras dimensiones y jugar con amigos. La experiencia depende mucho de lo que quieras hacer.",
    destacado: "Crear tu propio mundo desde cero.",
  },
  {
    id: 7,
    nombre: "Sand:box",
    genero: "Simulación",
    anio: 2011,
    imagen: "/images/sandbox.png",
    plataforma: "Móviles y otras versiones disponibles",
    descripcion:
      "Es una simulación de partículas en la que puedes experimentar con materiales como arena, agua, fuego y otros elementos. Cada material tiene comportamientos distintos y puedes observar cómo interactúan al mezclarlos. No necesitas superar niveles ni cumplir una historia: la gracia está en probar combinaciones, provocar reacciones y construir pequeñas escenas. Parece simple al principio, pero puedes terminar dedicándole bastante tiempo a descubrir qué ocurre cuando cambias algo.",
    destacado: "Experimentar y descubrir reacciones entre materiales.",
  },
  {
    id: 8,
    nombre: "Offline Games",
    genero: "Minijuegos",
    anio: 2022,
    imagen: "/images/offline-games.jpg",
    plataforma: "Principalmente dispositivos móviles",
    descripcion:
      "Es una colección de minijuegos pensada para quienes quieren entretenerse sin tener que entrar a una partida larga. Dependiendo de la aplicación, puedes encontrar retos de lógica, memoria, habilidad y rompecabezas. Cada actividad tiene sus propias reglas, por lo que puedes cambiar de juego cuando quieras probar algo diferente. Es una alternativa práctica para aprovechar unos minutos libres y mantener la mente activa sin depender de una conexión constante.",
    destacado: "Varios desafíos cortos en un mismo lugar.",
  },
  {
    id: 9,
    nombre: "Stardew Valley",
    genero: "Simulación y RPG",
    anio: 2016,
    imagen: "/images/stardew-valley.jpg",
    plataforma: "PC, consolas y móviles",
    descripcion:
      "Dejas atrás una vida rutinaria para comenzar de nuevo en una granja que necesita mucho trabajo. Puedes cultivar diferentes plantas según la estación, cuidar animales, pescar, explorar minas y conocer a los habitantes del pueblo. También hay secretos por descubrir y relaciones que puedes desarrollar a medida que avanzas. No tienes que hacer todo de inmediato: puedes organizar tus días como prefieras, mejorar tu granja poco a poco y construir una vida propia dentro del juego.",
    destacado: "Una aventura tranquila con muchas cosas por descubrir.",
  },
  {
    id: 10,
    nombre: "Just Dance",
    genero: "Ritmo y baile",
    anio: 2009,
    imagen: "/images/just-dance.jpg",
    plataforma: "Depende de la edición y la consola",
    descripcion:
      "La música es el centro de este videojuego. En cada canción debes seguir una coreografía que aparece en pantalla e intentar reproducir los movimientos para obtener una buena puntuación. Hay canciones de diferentes géneros y niveles de dificultad, así que puedes elegir entre rutinas más sencillas y otras que requieren coordinación y práctica. Puedes jugar por diversión, mejorar tus movimientos o competir con amigos. Es una forma de combinar música, actividad física y baile.",
    destacado: "Seguir coreografías y disfrutar la música.",
  },
  {
    id: 11,
    nombre: "Sky: Children of the Light",
    genero: "Aventura social",
    anio: 2019,
    imagen: "/images/sky.jpg",
    plataforma: "Móviles, PC y otras plataformas compatibles",
    descripcion:
      "Exploras un reino mágico donde los paisajes, la música y la luz tienen un papel importante. Como uno de los Niños de la Luz, recorres diferentes zonas, ayudas a liberar espíritus y descubres historias que se cuentan a través del entorno. Puedes volar, encontrar caminos ocultos y conocer a otros jugadores. En lugar de centrarse en combates constantes, propone una experiencia de exploración y cooperación en la que los pequeños encuentros también forman parte del viaje.",
    destacado: "Exploración, música y aventuras compartidas.",
  },
  {
    id: 12,
    nombre: "Honkai: Star Rail",
    genero: "RPG por turnos",
    anio: 2023,
    imagen: "/images/honkai-star-rail.jpg",
    plataforma: "PC, PlayStation y móviles",
    descripcion:
      "Acompañas a la tripulación del Expreso Astral en un viaje por mundos con ambientes, conflictos y personajes muy diferentes. La historia mezcla ciencia ficción, fantasía, humor y misterios relacionados con fuerzas capaces de cambiar el destino de civilizaciones enteras. Los combates son por turnos, así que debes pensar en las habilidades, los roles del equipo y las debilidades de los enemigos. Entre misiones también puedes explorar escenarios, encontrar tesoros y conocer mejor a los personajes.",
    destacado: "Historias de ciencia ficción y combates estratégicos.",
  },
];

function TarjetaVideojuego({
  videojuego,
  esFavorito,
  alCambiarFavorito,
  alVerDetalle,
}) {
  return (
    <article className="tarjeta">
      <div className="tarjeta-imagen">
        <img
          src={videojuego.imagen}
          alt={`Portada de ${videojuego.nombre}`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "flex";
          }}
        />

        <div className="imagen-fallback" aria-hidden="true">
          <span>✧</span>
          <span>{videojuego.nombre}</span>
        </div>

        <span className="estrella-decorativa" aria-hidden="true">✦</span>

        <button
          type="button"
          className={`boton-favorito ${esFavorito ? "activo" : ""}`}
          onClick={() => alCambiarFavorito(videojuego.id)}
          aria-label={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
          title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {esFavorito ? "♥" : "♡"}
        </button>
      </div>

      <div className="tarjeta-contenido">
        <span className="etiqueta-genero">✧ {videojuego.genero}</span>
        <h3>{videojuego.nombre}</h3>
        <p className="anio">Lanzamiento: {videojuego.anio}</p>

        <p className="resumen">
          {videojuego.descripcion.slice(0, 125)}...
        </p>

        <button
          type="button"
          className="boton-detalle"
          onClick={() => alVerDetalle(videojuego)}
        >
          Ver detalles <span>↗</span>
        </button>
      </div>
    </article>
  );
}

function DetalleVideojuego({
  videojuego,
  esFavorito,
  alCerrar,
  alCambiarFavorito,
}) {
  if (!videojuego) return null;

  return (
    <div className="modal-fondo" onClick={alCerrar}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-detalle"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="cerrar-modal"
          onClick={alCerrar}
          aria-label="Cerrar detalles"
        >
          ×
        </button>

        <div className="modal-imagen-contenedor">
          <img
            className="modal-imagen"
            src={videojuego.imagen}
            alt={`Portada de ${videojuego.nombre}`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <div className="modal-imagen-fallback" aria-hidden="true">
            <span>✧</span>
            <span>{videojuego.nombre}</span>
          </div>
          <span className="modal-estrella" aria-hidden="true">✦</span>
        </div>

        <div className="modal-contenido">
          <span className="etiqueta-genero">✧ {videojuego.genero}</span>
          <h2 id="titulo-detalle">{videojuego.nombre}</h2>

          <p className="dato-modal">
            <strong>Año de lanzamiento:</strong> {videojuego.anio}
          </p>
          <p className="dato-modal">
            <strong>Plataformas:</strong> {videojuego.plataforma}
          </p>

          <div className="descripcion-bloque">
            <h3>Sobre este juego</h3>
            <p className="descripcion-completa">{videojuego.descripcion}</p>
          </div>

          <div className="dato-destacado">
            <span className="destacado-estrella" aria-hidden="true">✦</span>
            <div>
              <strong>¿Qué lo hace especial?</strong>
              <p>{videojuego.destacado}</p>
            </div>
          </div>

          <button
            type="button"
            className="boton-principal boton-modal-favorito"
            onClick={() => alCambiarFavorito(videojuego.id)}
          >
            {esFavorito ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}
          </button>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState("Todos");
  const [favoritos, setFavoritos] = useState([]);
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);

  const generos = [
    "Todos",
    ...new Set(videojuegos.map((juego) => juego.genero)),
  ];

  const videojuegosFiltrados = useMemo(() => {
    return videojuegos.filter((videojuego) => {
      const texto = busqueda.trim().toLowerCase();

      const coincideNombre =
        videojuego.nombre.toLowerCase().includes(texto);

      const coincideGenero =
        generoSeleccionado === "Todos" ||
        videojuego.genero === generoSeleccionado;

      const coincideFavorito =
        !soloFavoritos || favoritos.includes(videojuego.id);

      return coincideNombre && coincideGenero && coincideFavorito;
    });
  }, [busqueda, generoSeleccionado, soloFavoritos, favoritos]);

  function cambiarFavorito(id) {
    setFavoritos((actuales) =>
      actuales.includes(id)
        ? actuales.filter((favorito) => favorito !== id)
        : [...actuales, id]
    );
  }

  function limpiarFiltros() {
    setBusqueda("");
    setGeneroSeleccionado("Todos");
    setSoloFavoritos(false);
  }

  return (
    <div className="pagina">
      <header className="encabezado">
        <a
          className="logo"
          href="#inicio"
          onClick={() => {
            limpiarFiltros();
            setVideojuegoSeleccionado(null);
          }}
        >
          <span className="logo-icono">✦</span>
          <span>Mille Avventure</span>
          <span className="logo-corazon">♡</span>
        </a>

        <nav className="navegacion">
          <a href="#catalogo">Catálogo</a>
          <button
            type="button"
            className={`enlace-favoritos ${soloFavoritos ? "seleccionado" : ""}`}
            onClick={() => setSoloFavoritos(!soloFavoritos)}
          >
            ♥ Favoritos ({favoritos.length})
          </button>
        </nav>
      </header>

      <main>
        <section className="presentacion" id="inicio">
          <span className="estrella-presentacion estrella-uno" aria-hidden="true">✦</span>
          <span className="estrella-presentacion estrella-dos" aria-hidden="true">✧</span>
          <span className="sobre-titulo">✧ BIENVENIDOS A MI UNIVERSO ✧</span>

          <h1>
            Mille Avventure
            <span>Un mundo lleno de posibilidades.</span>
          </h1>

          <p>
            Videojuegos que me acompañan entre mundos fantásticos,
            desafíos, creatividad y momentos que hacen que siempre
            quiera jugar una partida más. ♡
          </p>

          <a href="#catalogo" className="boton-principal boton-explorar">
            Explorar catálogo ✦
          </a>

          <div className="estadisticas">
            <div>
              <strong>{videojuegos.length}</strong>
              <span>Videojuegos</span>
            </div>
            <div>
              <strong>{generos.length - 1}</strong>
              <span>Géneros</span>
            </div>
            <div>
              <strong>{favoritos.length}</strong>
              <span>Favoritos ♥</span>
            </div>
          </div>
        </section>

        <section className="catalogo" id="catalogo">
          <div className="titulo-seccion">
            <div>
              <span className="sobre-titulo">✦ MI COLECCIÓN ✦</span>
              <h2>{soloFavoritos ? "Mis favoritos ♡" : "Mis videojuegos"}</h2>
              <p>Encuentra tu próxima aventura.</p>
            </div>

            <span className="contador">
              {videojuegosFiltrados.length}{" "}
              {videojuegosFiltrados.length === 1 ? "juego" : "juegos"}
            </span>
          </div>

          <div className="controles">
            <label className="buscador">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Buscar un videojuego..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                aria-label="Buscar videojuegos"
              />
              {busqueda && (
                <button
                  type="button"
                  className="limpiar-busqueda"
                  onClick={() => setBusqueda("")}
                  aria-label="Borrar búsqueda"
                >
                  ×
                </button>
              )}
            </label>

            <label className="selector-genero">
              <span>Género</span>
              <select
                value={generoSeleccionado}
                onChange={(e) => setGeneroSeleccionado(e.target.value)}
              >
                {generos.map((genero) => (
                  <option key={genero} value={genero}>
                    {genero === "Todos" ? "Todos los géneros" : genero}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className={`filtro-favoritos ${soloFavoritos ? "activo" : ""}`}
              onClick={() => setSoloFavoritos(!soloFavoritos)}
            >
              ♥ Solo favoritos
            </button>

            <button
              type="button"
              className="boton-limpiar"
              onClick={limpiarFiltros}
            >
              Limpiar filtros
            </button>
          </div>

          {videojuegosFiltrados.length > 0 ? (
            <div className="rejilla-videojuegos">
              {videojuegosFiltrados.map((videojuego) => (
                <TarjetaVideojuego
                  key={videojuego.id}
                  videojuego={videojuego}
                  esFavorito={favoritos.includes(videojuego.id)}
                  alCambiarFavorito={cambiarFavorito}
                  alVerDetalle={setVideojuegoSeleccionado}
                />
              ))}
            </div>
          ) : (
            <div className="sin-resultados">
              <span className="icono-vacio">♡</span>
              <h3>No encontramos ese videojuego</h3>
              <p>
                Prueba con otro nombre o cambia los filtros para encontrar
                lo que estás buscando.
              </p>
              <button
                type="button"
                className="boton-principal"
                onClick={limpiarFiltros}
              >
                Mostrar todos los juegos
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="pie-pagina">
        <p>Sheila Daniela Hernández Carrillo ♡</p>
      </footer>

      <DetalleVideojuego
        videojuego={videojuegoSeleccionado}
        esFavorito={
          videojuegoSeleccionado
            ? favoritos.includes(videojuegoSeleccionado.id)
            : false
        }
        alCerrar={() => setVideojuegoSeleccionado(null)}
        alCambiarFavorito={cambiarFavorito}
      />
    </div>
  );
}

export default App;
