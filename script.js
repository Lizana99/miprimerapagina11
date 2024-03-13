//alert("Hola este es mi Javascript");

// let nombre = "Rosa";
// nombre = "Angi";

// var nombre1 = "Rosa";

// const nombre2 = "Rosa";
// //nombre2 = "Maria";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Marta";

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}

//FUNCIONES

let nombre = "Angi";
let ciudad = "Bs As";
let ciencia = "Medicina";

let parrafo = document.querySelector(".parrafo2");


function cambiarTexto(nombre, ciudad, ciencia) {
    let contenido = `Me llamo ${nombre} y soy de ${ciudad}. Aprederemos juntos cosas de ${ciencia}.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, ciencia);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});