const servicios = {
  limpieza: {
    titulo: "Ritual de Limpieza Energética",
    precio: "$28.000",
    texto: "Primero se realiza un testeo a través de las cartas para saber cómo estás fluyendo energéticamente, detectar cargas, trabajos o entidades pegadas y determinar cuántos días es necesario realizar la limpieza. Luego se realiza la limpieza energética completa. Todo va incluido en el precio."
  },
  abre: {
    titulo: "Ritual de Abre Caminos",
    precio: "$20.000",
    texto: "Si te sentís estancad@ en el trabajo, si las oportunidades no llegan o sentís que no estás fluyendo bien en distintos aspectos de tu vida, este ritual ayuda a destrabar y activar tu camino."
  },
  vinculos: {
    titulo: "Ritual de Limpieza de Vínculos",
    precio: "$24.000",
    texto: "Las limpiezas energéticas de pareja armonizan y liberan la energía compartida dentro de un vínculo. Recomendado cuando la relación se siente pesada, hay discusiones sin sentido o la energía entre ambos cambió."
  },
  endulzamiento: {
    titulo: "Ritual de Endulzamiento",
    precio: "$22.000",
    texto: "Trabajo energético positivo que suaviza energías y favorece una conexión más armoniosa. No es un amarre."
  },
  abundancia: {
    titulo: "Ritual de Abundancia",
    precio: "$18.000",
    texto: "Trabaja sobre la energía del dinero y la prosperidad. Ayuda a atraer clientes, aumentar ingresos y potenciar el crecimiento económico."
  },
  estudio: {
    titulo: "Ritual de Estudio",
    precio: "$17.000",
    texto: "Favorece el enfoque, la predisposición, la retención y la comprensión al estudiar."
  },
  proteccion: {
    titulo: "Ritual de Protección",
    precio: "$16.000",
    texto: "Trabajo energético de protección espiritual para resguardar tu energía de influencias negativas."
  },
  corte: {
    titulo: "Ritual de Corte de Lazos",
    precio: "$24.000",
    texto: "Ayuda a liberar lazos energéticos con personas, vínculos o situaciones que ya no querés sostener."
  },
  retorno: {
    titulo: "Ritual de Retorno de Parejas",
    precio: "$24.000",
    texto: "Trabajo energético para vínculos donde todavía existe conexión real. No fuerza voluntades."
  },
  sanacion: {
    titulo: "Ritual de Sanación Personal",
    precio: "$20.000",
    texto: "Acompaña procesos emocionales o energéticos difíciles de resolver, ayudando a transitar la sanación."
  }
};

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalPrecio = document.getElementById("modalPrecio");
const modalTexto = document.getElementById("modalTexto");
const cerrarModal = document.getElementById("cerrarModal");

document.querySelectorAll("[data-servicio]").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.servicio;
    const info = servicios[key];

    if (info) {
      modalTitulo.textContent = info.titulo;
      modalPrecio.textContent = info.precio;
      modalTexto.textContent = info.texto;
    } else {
      modalTitulo.textContent = card.querySelector("h3").textContent;
      modalPrecio.textContent = card.querySelector("p").textContent;
      modalTexto.textContent = "Consultá por WhatsApp para recibir más información.";
    }

    modal.classList.add("activo");
  });
});

cerrarModal.addEventListener("click", () => {
  modal.classList.remove("activo");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("activo");
});
