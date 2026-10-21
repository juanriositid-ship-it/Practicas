const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const edad = document.getElementById("edad").value;

      document.getElementById("resultado").textContent = `Hola ${nombre}, tienes ${edad} años.`;
    });