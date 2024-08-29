//cria-se as variáveis
var pontos = 0;
var form, player, game, inimigo;
var portão, portãoImg;
var arvore, arvoreImg;
var arbusto, arbustoImg;
var arbustos, torres, arvores, pedras, portões;
var cenarioIMG, cenario;
var corCenario;
var gif;
var p = 1;
var img, ataque;
var sfundo;
var Schave;
var sprite1,
  sprite2,
  sprite3,
  sprite4,
  sprites = [],
  index = 0;
var elfoMagones = [];
var personagem = 0;
var playerCount = 0;
var cavaleirofanImg, caveiraImg, elfoMagoneImg, ogrodfogImg;
var elfoNegroImg, centauroImg, minotauroImg, cavaleiroImg;
var cavAndando, cavAtaque;
var elfoNAndando, elfoNAtaque;
var centAndando, centAtaque;
var minoAndando, minoAtaque;
var allPlayers;
var todos;
var x = 0;
var y = 0;
var listaJogadores = [];
var dados;
var vidaImg;
var vida;
var gameState = 0;
var ani;
var espImg;
var esp;
var gameOver;
var gameOverImg;
var elfo;
var iCE = 0;

var chaveElfica, chaveElImg;
var inventarioImg;
var moeda, moedaImg;
var desceu = "não",
  p,
  meuIndice,
  meuJogador,
  nome,
  moedas
function preload() {
  cavAndando = loadAnimation("ani/cav1.png", "ani/cav2.png");
  cavAtaque = loadAnimation(
    "ani/ataqCav0.png",
    "ani/ataqCav1.png",
    "ani/ataqCav2.png"
  );

  elfoNAndando = loadAnimation("ani/elfoN1.png", "ani/elfoN2.png");
  elfoNAtaque = loadAnimation("ani/ataqElfoN1.png", "ani/ataqElfoN2.png");

  centAndando = loadAnimation("ani/cent1.png", "ani/cent2.png");
  centAtaque = loadAnimation("ani/ataqCent1.png", "ani/ataqCent2.png");

  minoAndando = loadAnimation("ani/mino1.png", "ani/mino2.png");
  minoAtaque = loadAnimation("ani/ataqMino1.png", "ani/ataqMino2.png");

  arbustoImg = loadImage("Img/arbusto.png");
  arvoreImg = loadImage("Img/arvoreFloresta.png");
  portãoImg = loadImage("Img/portão.png");

  cavaleirofanImg = loadImage("Img/cavaleiroFantasma.png");
  caveiraImg = loadImage("Img/caveira.png");
  elfoMagoneImg = loadImage("Img/elfoMagone.png");
  ogrodfogImg = loadImage("Img/ogroDeFogo.png");

  elfoNegroImg = loadImage("Img/elfoNegro.png");
  centauroImg = loadImage("Img/centauro.png");
  minotauroImg = loadImage("Img/minotauro.png");
  cavaleiroImg = loadImage("Img/cavaleiroEscuro.png");

  sfundo = loadSound("fundo.mp3");
  Schave = loadSound("efeitoChave.mp3");

  vidaImg = loadImage("Img/vida.png");
  espImg = loadImage("Img/ataquemg.png");

  gameOverImg = loadImage("Img/gameOver.png");
  chaveElImg = loadImage("Img/chaveElfica.png");
  inventarioImg = loadImage("Img/inventario2.png");

  //carrega os arquivos de mídia
  // cenarioIMG = loadImage("Img/mapaJogo.png")
}

function setup() {
  //códigos a serem executados uma vez
  createCanvas(windowWidth, windowHeight);
  pegarPlayers();
  desceu = localStorage.getItem("desceu2");
  meuJogador = localStorage.getItem("player");
  meuIndice = localStorage.getItem("indice");
  nome = localStorage.getItem("nome");
  p = localStorage.getItem("p");
  moedas = localStorage.getItem("moedas")

  //cria as sprites
  //cenario = createSprite(width/2,height/2);
  // cenario.addImage(cenarioIMG);
  //cenario.scale=12;
  corCenario = "darkgreen";

  sfundo.loop()

  sfundo.setVolume(0.1);
  // form = new Form()

  game = new Game();
  game.start();
  //form.mostrar()
  sprite1 = createSprite(100, 100, 100, 100);
  sprite1.addImage("normal", cavaleiroImg);
  sprite1.addAnimation("ataque", cavAtaque);
  sprite1.addAnimation("correndo", cavAndando);
  sprite1.scale = 2;

  sprite2 = createSprite(100, 150, 100, 100);
  sprite2.addImage("normal", elfoNegroImg);
  sprite2.addAnimation("ataque", elfoNAtaque);
  sprite2.addAnimation("correndo", elfoNAndando);
  sprite2.scale = 2;

  sprite3 = createSprite(100, 200, 100, 100);
  sprite3.addImage("normal", centauroImg);
  sprite3.addAnimation("ataque", centAtaque);
  sprite3.addAnimation("correndo", centAndando);
  sprite3.scale = 2;

  sprite4 = createSprite(100, 250, 100, 100);
  sprite4.addImage("normal", minotauroImg);
  sprite4.addAnimation("ataque", minoAtaque);
  sprite4.addAnimation("correndo", minoAndando);
  sprite4.scale = 2;

  sprites = [sprite1, sprite2, sprite3, sprite4];
}

function draw() {
  background(corCenario);
  //códigos a serem executados durante todo o jogo

  if (playerCount == 4) {
    game.play();
  }
  //window.location = "nivel2.html"
}
function pegarJogador() {
  database.ref("players").on("value", (data) => {
    allPlayers = data.val();
    listaJogadores = [];
    for (var p in allPlayers) {
      if (!player && allPlayers[p].indice == meuJogador) {
        player = new Player(
          allPlayers[p].personagem,
          allPlayers[p].nome,
          allPlayers[p].indice,
          allPlayers[p].moedas
        );
      }
      if (allPlayers[p].nivel == 1) {
        sprites[allPlayers[p].personagem - 1].visible = true;
        listaJogadores.push(allPlayers[p]);
      }
    }
  });
}

function pegarPlayers() {
  console.log("chamando a função");
  database.ref("players").on("value", (data) => {
    console.log("lendo o bd");
    allPlayers = data.val();
    console.log("guardou os players");
    console.log(allPlayers);
  });
}
