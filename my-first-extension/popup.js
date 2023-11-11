document.addEventListener('DOMContentLoaded', function () { 
  let btnCambiarColor = document.getElementById('cambiarColor')
  let input = document.getElementById('color')
  btnCambiarColor.addEventListener('click', cambiarColor(input.value)); 

  let btnCambiarSize = document.getElementById('cambiarSize')
  let inputSize = document.getElementById('size')
  btnCambiarSize.addEventListener('click', cambiarSize(inputSize.value));
});

function cambiarColor(input) { 
  let color = document.body.style
  color.backgroundColor=input.value
}

function cambiarSize(inputSize) { 
  let size = document.body.style
  size.fontSize=inputSize.value
}