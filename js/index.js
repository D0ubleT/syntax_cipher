const links = document.querySelectorAll(".toggleLink");
const secciones = document.querySelectorAll("section.acordeon");

function cerrarTodas() {
  secciones.forEach(seccion => {
    seccion.classList.remove("activa");
  });
}

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const targetId = this.getAttribute("data-target");
    const seccion = document.getElementById(targetId);

    if (!seccion.classList.contains("activa")) {
      cerrarTodas();
      seccion.classList.add("activa");
    } else {
      seccion.classList.remove("activa");
    }
  });
});

document.getElementById("cerrarTodo").addEventListener("click", cerrarTodas);
