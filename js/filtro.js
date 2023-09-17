document.addEventListener("DOMContentLoaded", function() {
    const filtroBtn = document.querySelector(".filtro-btn");
    const opciones = document.querySelector(".opciones");
  
    filtroBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      opciones.style.display = opciones.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", function() {
      opciones.style.display = "none";
    });
  });
  