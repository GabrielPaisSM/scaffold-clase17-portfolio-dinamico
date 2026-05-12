const proyectos = [
  {
    titulo: "Identidad Tipo Casa",
    categoria: "branding",
    imagen: "https://picsum.photos/seed/casa/600/400",
  },
  {
    titulo: "Plataforma Mirador",
    categoria: "web",
    imagen: "https://picsum.photos/seed/mirador/600/400",
  },
  {
    titulo: "Aceite Pradera",
    categoria: "packaging",
    imagen: "https://picsum.photos/seed/aceite/600/400",
  },
  {
    titulo: "Catálogo Norte 2024",
    categoria: "editorial",
    imagen: "https://picsum.photos/seed/catalogo/600/400",
  },
  {
    titulo: "Estación 9",
    categoria: "branding",
    imagen: "https://picsum.photos/seed/estacion/600/400",
  },
  {
    titulo: "Galería Atlas",
    categoria: "web",
    imagen: "https://picsum.photos/seed/atlas/600/400",
  },
  {
    titulo: "Té Volcán",
    categoria: "packaging",
    imagen: "https://picsum.photos/seed/te/600/400",
  },
  {
    titulo: "Memoria anual",
    categoria: "editorial",
    imagen: "https://picsum.photos/seed/memoria/600/400",
  },
  {
    titulo: "Galería Atlas",
    categoria: "web",
    imagen: "https://picsum.photos/seed/atlas/600/400",
  },
  {
    titulo: "Té Volcán",
    categoria: "packaging",
    imagen: "https://picsum.photos/seed/te/600/400",
  },
  {
    titulo: "Memoria anual",
    categoria: "editorial",
    imagen: "https://picsum.photos/seed/memoria/600/400",
  },
];

function renderizarProyectos(lista) {
  const contenedor = document.querySelector("#galeria");
  contenedor.innerHTML = "";

  lista.forEach(function (proyecto) {
    contenedor.insertAdjacentHTML(
      "beforeend",

      `<article class="card" data-categoria="${proyecto.categoria}">
            <img src="${proyecto.imagen}" alt="Identidad Tipo Casa">
            <div class="card-body">
                <span class="etiqueta">${proyecto.categoria}</span>
                <h3>${proyecto.titulo}</h3>
            </div>
        </article>`,
    );
  });
}

function inicializarFiltros() {
  document.querySelectorAll(".filtro").forEach(function (boton) {
    boton.addEventListener("click", function () {
      const categoriaElegida = this.dataset.filtro;

      let listaFiltrada;

      if (categoriaElegida === "todos") {
        listaFiltrada = proyectos;
      } else {
        listaFiltrada = proyectos.filter(function (proyecto) {
          return proyecto.categoria === categoriaElegida;
        });
      }

      renderizarProyectos(listaFiltrada);

      document.querySelectorAll(".filtro").forEach(function (b) {
        b.classList.remove("activo");
      });

      this.classList.add("activo");
    });
  });
}

function inicializarAnimacionScroll() {
  const observador = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  ); // ← nuevo

  document.querySelectorAll(".animar-scroll").forEach(function (elemento) {
    observador.observe(elemento);
  });
}

inicializarFiltros();
renderizarProyectos(proyectos);
inicializarAnimacionScroll();
