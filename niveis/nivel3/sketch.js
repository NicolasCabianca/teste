var pedra, pedraImg;
var pedras;
var torreQ, torreQImg;
var torresQ;
var portão, portãoImg;
var barraquinha, barraquinhaImg;
var meuJogador;
var allPlayers;
var pontos = 0;
var form, player, game, inimigo;
var arbustos, torres, arvores, pedras, portões;
var cenarioIMG, cenario;
var corCenario;
var gif;
var p = 1;
var img, ataque;
var sfundo;
var spoder;
var Schave;
var sprite1,
  sprite2,
  sprite3,
  sprite4,
  sprites = [],
  index = 0;
var elfoMagones = [];
var cavaleirofan = [];
var ogrodfog
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
var ICD = 0;
var listaNivel3 = [];
var indice = 0;
var cavF;
var chaveDugeon, chaveDImg;
var inventarioImg;
var invBarracaImg;
var pocaoC, pocaoCImg;
var PT1, PT2;
var PT3, PT4;
var PT5, PT6;
var PT3Img, PT4Img;
var PT1Img, PT2Img;
var PT5Img, PT6Img;
var SUkunaPT1, SUkunaPT1Img;
var BT1, BT2, BT3;
var BT1Img, BT2Img, BT3Img;
var bau;
var bauImg;
var moedaImg, moeda;
var iB = 0;
var coin;
var NPC1, NPC1Img;
var NPC2, NPC2Img;
var NPC3, NPC3Img; 
var NPC4, NPC4Img;
var NPC5, NPC5Img;
var casaNpc, casaNpcImg, casasNpc;
var esPt1, esPt1Img;
var cPt5, cPt5Img;
var c5, c5Img;
var poder1, poder1Img, poder2, poder2Img, poder3, poder3Img;
var portal, portalImg;
var moedas = 0;
var carreg
var torreF, torreFImg, torresF
var ogrodfogAtaque
var ogrodfogAtaqueImg
var ogrodfM
var ogrodfMImg
var inimigo;
var dadosInimigos;
var ogroAtaque;
var gameState


function preload() {
  esPt1Img = loadImage("Img/Espt1.png");

  portalImg = loadImage("Img/PortãoV.png");
  espImg = loadImage("Img/ataquemg.png");

  ogroAtaque = loadAnimation(
  "ani/derrota1.png",
  "ani/derrota2.png",
  "ani/derrota3.png",
  "ani/derrota4.png",
  "ani/derrota5.png",
  )

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

  barraquinhaImg = loadAnimation("ani/barra1.png", "ani/barra2.png");

  NPC1Img = loadImage("Img/NPC1.png");
  NPC2Img = loadImage("Img/NPC2.png");
  NPC3Img = loadImage("Img/NPC3.png");
  NPC4Img = loadImage("Img/NPC4.png");
  NPC5Img = loadImage("Img/NPC5.png");

  casaNpcImg = loadImage("Img/casaNpc.png");

  cavaleirofanImg = loadImage("Img/cavaleiroFantasma.png");
  caveiraImg = loadImage("Img/caveira.png");
  elfoMagoneImg = loadImage("Img/elfoMagone.png");
  ogrodfogImg = loadImage("Img/ogroDeFogo.png");
  ogrodfogAtaqueImg = loadImage("Img/ataqueOgroDFogo.png")
  ogrodfMImg = loadImage("gif/derrotaOgro.gif")


  elfoNegroImg = loadImage("Img/elfoNegro.png");
  centauroImg = loadImage("Img/centauro.png");
  minotauroImg = loadImage("Img/minotauro.png");
  cavaleiroImg = loadImage("Img/cavaleiroEscuro.png");

  sfundo = loadSound("SfundoF.mp3")
  Schave = loadSound("efeitoChave.mp3");
  spoder = loadSound("audioPD.mp3");

  vidaImg = loadImage("Img/vida.png");
  espImg = loadImage("Img/ataquemg.png");

  gameOverImg = loadImage("Img/gameOver.png");
  chaveDImg = loadImage("Img/chaveDugeon.png");

  portãoImg = loadImage("Img/portão.png");

  pedraImg = loadImage("Img/pedra.png");
  torreQImg = loadImage("Img/torre.png");
  torreFImg = loadImage("Img/torreFinal.png")

  chaveDImg = loadImage("Img/chaveDugeon.png");
  inventarioImg = loadImage("Img/inventario2.png");
  invBarracaImg = loadImage("Img/invBarraca.png");

  pocaoCImg = loadImage("Img/maisVida.png");

  PT1Img = loadImage("Img/PT1.png");
  PT2Img = loadImage("Img/PT2.png");
  PT3Img = loadImage("Img/PT3.png");
  PT4Img = loadImage("Img/PT4.png");
  PT5Img = loadImage("Img/PT5.png");
  PT6Img = loadImage("Img/PT6.png");

  cPt5Img = loadImage("Img/CPT5.png");
  c5Img = loadImage("Img/c5.png");

  BT1Img = loadImage("Img/botãoM2.png");
  BT2Img = loadImage("Img/botãoM2.png");
  BT3Img = loadImage("Img/botãoM1.png");

  poder1Img = loadImage("Img/PD1.png");
  poder2Img = loadImage("Img/PD2.png");
  poder3Img = loadImage("Img/PD3.png");

  bauImg = loadImage("Img/báu.png");
  moedaImg = loadImage("Img/moeda.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  ogroAtaque.looping = false;
  ogroAtaque.frameDelay = 20


  sprite1 = createSprite(100, 100, 100, 100);
  sprite1.addImage("normal", cavaleiroImg);
  sprite1.addAnimation("ataque", cavAtaque);
  sprite1.addAnimation("correndo", cavAndando);
  sprite1.scale = 2;
  sprite1.visible = false;

  sprite2 = createSprite(100, 150, 100, 100);
  sprite2.addImage("normal", elfoNegroImg);
  sprite2.addAnimation("ataque", elfoNAtaque);
  sprite2.addAnimation("correndo", elfoNAndando);
  sprite2.scale = 2;
  sprite2.visible = false;

  sprite3 = createSprite(100, 200, 100, 100);
  sprite3.addImage("normal", centauroImg);
  sprite3.addAnimation("ataque", centAtaque);
  sprite3.addAnimation("correndo", centAndando);
  sprite3.scale = 2;
  sprite3visible = false;

  sprite4 = createSprite(100, 250, 100, 100);
  sprite4.addImage("normal", minotauroImg);
  sprite4.addAnimation("ataque", minoAtaque);
  sprite4.addAnimation("correndo", minoAndando);
  sprite4.scale = 2;
  sprite4.visible = false;

  sprites = [sprite1, sprite2, sprite3, sprite4];

  carreg = createButton("")
  carreg.class("loading")
  carreg.position(width / 2 - 100, height / 2 - 100);

  meuJogador = localStorage.getItem("player");
  moedas = localStorage.getItem("moedas")

  pegarJogador()
  
  sfundo.loop()

  sfundo.setVolume(0.1);

 
  game = new Game()
  game.start()
  game.getState()
}
function draw() {
  background("gray");
  
  if(player && gameState != 3){
    game.play(listaNivel3)
    game.update(gameState)
  }
  
  drawSprites();
 
}
function pegarJogador() {
  database.ref("players").on("value", (data) => {
    carreg.class("sumir")
    allPlayers = data.val();
    listaNivel3 = [];
    for (var p in allPlayers) {
      if (!player && allPlayers[p].indice == meuJogador) {
        player = new Player(
          allPlayers[p].personagem,
          allPlayers[p].nome,
          allPlayers[p].indice,
          Number(moedas)
        );
      }
      if (allPlayers[p].nivel == 3) {
        sprites[allPlayers[p].personagem - 1].visible = true;
        listaNivel3.push(allPlayers[p]);
      }
    }
  });
}


