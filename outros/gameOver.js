//pegando um item e guardando na variável nivel
var nivel = localStorage.getItem("nivel");

function trocarNivel() {
  if (nivel == 2) {
    window.location = "nivel2.html";
  } else if (nivel == 3) {
    window.location = "nivel3.html";
  } else {
    window.location = "index.html";
  }
}

var video;
var sPerdeu;
function preload() {
  sPerdeu = loadSound("perdeu.mp3");
}
function setup() {
  sPerdeu.loop();
  sPerdeu.setVolume(0.1);
}
