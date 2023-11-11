document.addEventListener('DOMContentLoaded', function () { 
  let btnCambiarColor = document.getElementById('cambiarColor')
  let input = document.getElementById('color')
  btnCambiarColor.addEventListener('click', cambiarColor(input.value)); 

  let btnCambiarSize = document.getElementById('cambiarSize')
  let inputSize = document.getElementById('size')
  btnCambiarSize.addEventListener('click', cambiarSize(inputSize.value));

  let btnCambiarFont = document.getElementById('cambiarFont')
  let inputFont = document.getElementById('font')
  btnCambiarFont.addEventListener('click', cambiarFont(inputFont.value));

  let btnCambiarBackground = document.getElementById('cambiarBackground')
  let inputBackground = document.getElementById('background')
  btnCambiarBackground.addEventListener('click', cambiarBackground(inputBackground.value));
});

function cambiarColor(input) { 
  let color = document.body.style
  color.backgroundColor=input.value
}

function cambiarSize(inputSize) { 
  let size = document.body.style
  size.fontSize=inputSize.value
}

function cambiarFont(inputFont) { 
  let font = document.body.style
  font.fontFamily=inputFont.value
}

function cambiarBackground(inputBackground) {
  let background = document.body.style
  background.backgroundImage=inputBackground.value
}