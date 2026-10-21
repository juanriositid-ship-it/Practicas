const boton = document.getElementById("boton-medicion");
const valorCO2 = document.getElementById("valor-co2");
const estado = document.getElementById("estado");


const lecturasEjemplo = [420, 550, 680, 750, 900];

let indice = 0;


boton.addEventListener("click", function () {

  
    const lectura = lecturasEjemplo[indice];

    valorCO2.textContent = lectura;

    estado.textContent =
        "Lectura ilustrativa. No procede de un sensor real.";

    
    boton.textContent = "Mostrar otra lectura";

    indice++;

    if (indice >= lecturasEjemplo.length) {
        indice = 0;
    }

});