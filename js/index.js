document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".comandos a[data-target]");
  const sections = document.querySelectorAll(".accordion");
  const closeBtn = document.getElementById("closeAll");

  function closeAllSections() {
    sections.forEach(section => {
      section.classList.remove("active");
      section.style.maxHeight = null;
    });
    updateCloseButton();
  }

  function updateCloseButton() {
    const anyOpen = Array.from(sections).some(section =>
      section.classList.contains("active")
    );
    closeBtn.style.display = anyOpen ? "inline-block" : "none";
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      closeAllSections();
      targetSection.classList.add("active");
      targetSection.style.maxHeight = targetSection.scrollHeight + "px";

      updateCloseButton();
    });
  });

  closeBtn.addEventListener("click", () => {
    closeAllSections();
  });

  updateCloseButton();
});
