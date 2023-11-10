document.addEventListener('DOMContentLoaded', function () { 
  let btnCambiarColor = document.getElementById('cambiarColor')
  let input = document.getElementById('color')
  btnCambiarColor.addEventListener('click', cambiarColor(input.value)); 
});

function cambiarColor(input) { 
  let color = document.body.style
  color.backgroundColor=input.value
}