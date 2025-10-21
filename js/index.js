document.getElementById("toggleLinkAbout").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  const seccion = document.getElementById("about");
  if (seccion.style.display === "none" || seccion.style.display === "") {
    seccion.style.display = "block";
  } else {
    seccion.style.display = "none";
  }
});
document.getElementById("toggleLinkServices").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  const seccion = document.getElementById("services");
  if (seccion.style.display === "none" || seccion.style.display === "") {
    seccion.style.display = "block";
  } else {
    seccion.style.display = "none";
  }
});
document.getElementById("toggleLinkContact").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  const seccion = document.getElementById("contact");
  if (seccion.style.display === "none" || seccion.style.display === "") {
    seccion.style.display = "block";
  } else {
    seccion.style.display = "none";
  }
});
document.getElementById("toggleLinkMap").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  const seccion = document.getElementById("map");
  if (seccion.style.display === "none" || seccion.style.display === "") {
    seccion.style.display = "block";
  } else {
    seccion.style.display = "none";
  }
});
