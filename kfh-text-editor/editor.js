document.addEventListener("DOMContentLoaded", function() {
  
  // Variables globales
  let texto = document.getElementById("texto");
  let botones = document.getElementById("botones");

  // Negrita
  function negrita() {
    if (texto.style.fontWeight === "bold") {
      texto.style.fontWeight = "normal";
    } else {
      texto.style.fontWeight = "bold";
    }
  }

  // Cursiva
  function cursiva() {
    if (texto.style.fontStyle === "italic") {
      texto.style.fontStyle = "normal";
    } else {
      texto.style.fontStyle = "italic";
    }
  }

  // Subrayado
  function subrayado() {
    if (texto.style.textDecoration === "underline") {
      texto.style.textDecoration = "none";
    } else {
      texto.style.textDecoration = "underline";
    }
  }

  // Tachado
  function tachado() {
    if (texto.style.textDecoration === "line-through") {
      texto.style.textDecoration = "none";
    } else {
      texto.style.textDecoration = "line-through";
    }
  }

  // derecha
  function derecha() {
    if (texto.style.textAlign === "right") {
      texto.style.textAlign = "left";
    } else {
      texto.style.textAlign = "right";
    }
  }

  // Centrado
  function centrado() {
    if (texto.style.textAlign === "center") {
      texto.style.textAlign = "left";
    } else {
      texto.style.textAlign = "center";
    }
  }

  // izquierda
  function izquierda() {
    if (texto.style.textAlign === "left") {
      texto.style.textAlign = "right";
    } else {
      texto.style.textAlign = "left";
    }
  }

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

  // Función para guardar el documento con otro nombre
  function guardarComo() {
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

  // Función para imprimir el documento
  function imprimir() {
    window.print();
  }

    // Función para copiar el contenido del editor
  function copiar() {
    const texto = document.getElementById("texto");
    texto.select();

    navigator.clipboard.writeText(texto.value)
      .then(() => {
        console.log('Texto copiado con éxito');
      })
      .catch(err => {
        console.error('Error al copiar texto: ', err);
      });
  }

  // Función para cortar el contenido del editor
  function cortar() {
    const texto = document.getElementById("texto");

    const textoCortado = texto.value.substring(texto.selectionStart, texto.selectionEnd);
    navigator.clipboard.writeText(textoCortado)
      .then(() => {
        console.log('Texto cortado con éxito');
      })
      .catch(err => {
        console.error('Error al cortar texto: ', err);
      });

    texto.value = texto.value.substring(0, texto.selectionStart) + texto.value.substring(texto.selectionEnd);
  }

  // Función para pegar el contenido en el editor
  function pegar() {
    const texto = document.getElementById("texto");
    
    navigator.clipboard.readText()
      .then(clipText => {
        const currentText = texto.value;
        const selectionStart = texto.selectionStart;
        const selectionEnd = texto.selectionEnd;
        const newText = currentText.substring(0, selectionStart) + clipText + currentText.substring(selectionEnd);
        texto.value = newText;
      })
      .catch(err => {
        console.error('Error al pegar texto: ', err);
      });
  }
  
  // Eventos
  botones.addEventListener("click", function(event) {
    let elemento = event.target;
    if (elemento.id === "nuevo") {
      nuevo();
    } else if(elemento.id === "negrita"){
      negrita();
    } else if (elemento.id === "cursiva"){
      cursiva();
    } else if (elemento.id === "subrayado"){
      subrayado();
    } else if (elemento.id === "tachado"){
      tachado();
    } else if (elemento.id === "derecha"){
      derecha();
    } else if (elemento.id ="centrado"){
      centrado();
    } else if (elemento.id = "izquierda"){
      izquierda();
    } else if (elemento.id === "abrir") {
      abrir();
    } else if (elemento.id === "guardar") {
      guardar();
    } else if (elemento.id === "guardar-como") {
      guardarComo();
    } else if (elemento.id === "eliminar") {
      eliminar();
    } else if (elemento.id === "imprimir") {
      imprimir();
    } else if (elemento.id === "copiar") {
      copiar();
    } else if (elemento.id === "cortar") {
      cortar();
    } else if (elemento.id === "pegar") {
      pegar();
    }
  });
});