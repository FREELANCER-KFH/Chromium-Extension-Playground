document.addEventListener('DOMContentLoaded', main());

function main() {
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

  let btnCambiarBorder = document.getElementById('cambiarBorder')
  let inputBorder = document.getElementById('border')
  btnCambiarBorder.addEventListener('click', cambiarBorder(inputBorder.value));

  let btnCambiarBorderRadius = document.getElementById('cambiarBorderRadius')
  let inputRadius = document.getElementById('borderRadius')
  btnCambiarBorderRadius.addEventListener('click', cambiarRadius(inputRadius.value));

  let btnCambiarMargin = document.getElementById('cambiarMargin')
  let inputMargin = document.getElementById('margin')
  btnCambiarMargin.addEventListener('click', cambiarMargin(inputMargin.value));

  let btnCambiarPadding = document.getElementById('cambiarPadding')
  let inputPadding = document.getElementById('padding')
  btnCambiarPadding.addEventListener('click', cambiarPadding(inputPadding.value));
}

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

function cambiarBorder(inputBorder) {
  let border = document.body.style
  border.border=inputBorder.value
}

function cambiarRadius(inputRadius) {
  let radius = document.body.style
  radius.borderRadius=inputRadius.value
}

function cambiarMargin(inputMargin) {
  let margin = document.body.style
  margin.margin=inputMargin.value
}

function cambiarPadding(inputPadding) {
  let padding = document.body.style
  padding.padding=inputPadding.value
}