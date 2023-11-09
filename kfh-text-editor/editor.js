document.addEventListener("DOMContentLoaded", function() {
  
  // Variables globales
  let texto = document.getElementById("texto");
  let botones = document.getElementById("botones");

  // Función para crear un nuevo documento
  function nuevo() {
    texto.value = "";
  }

  // Función para abrir un documento existente
  function abrir() {
    let file = window.prompt("Elige un archivo:");
    if (file) {
      // Cargamos el contenido del archivo en el editor
      texto.value = new FileReader().readAsText(file).toString();
    }
  }

  // Función para guardar el documento
  function guardar() {
    let file = window.prompt("Escribe el nombre del archivo:");
    if (file) {
      // Guardamos el contenido del editor en el archivo
      new FileWriter(file).write(texto.value);
    }
  }

  //Funcion para eliminar el documento
  function eliminar() {
    let file = window.prompt("Escribe el nombre del archivo:");
    if (file) {
      // Eliminamos el contenido del editor en el archivo
      new FileWriter(file).delete(texto.value);
    }
  }

  // Eventos
  botones.addEventListener("click", function(event) {
    let elemento = event.target;
    if (elemento.id === "nuevo") {
      nuevo();
    } else if (elemento.id === "abrir") {
      abrir();
    } else if (elemento.id === "guardar") {
      guardar();
    } else if (elemento.id === "eliminar") {
      eliminar();
    }
  });
});