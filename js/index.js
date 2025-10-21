const links = document.querySelectorAll(".toggleLink");
const secciones = document.querySelectorAll("div[id^='seccion']");

// Función para cerrar todas las secciones
function cerrarTodas() {
  secciones.forEach(seccion => {
    seccion.style.display = "none";
  });
}

// Evento para cada enlace
links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const targetId = this.getAttribute("data-target");
    const seccion = document.getElementById(targetId);

    // Cerrar todas antes de abrir la seleccionada
    cerrarTodas();

    // Mostrar solo la seleccionada
    seccion.style.display = "block";
  });
});

// Botón para cerrar todo
document.getElementById("cerrarTodo").addEventListener("click", function() {
  cerrarTodas();
});
