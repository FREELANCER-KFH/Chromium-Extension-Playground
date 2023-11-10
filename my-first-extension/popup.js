document.addEventListener("DOMContentLoaded", function() {
  let boton = document.getElementById("cambiarColor");
  boton.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {accion: "cambiarColor"});
    });
  });
});