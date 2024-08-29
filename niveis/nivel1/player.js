
class Player {
  constructor(p, nome, indice, moedas) {
    this.nome = nome;
    this.indice = indice;
    this.vida = 100;
    this.moedas = moedas;
    this.atacando = false;
    this.ani = "normal";
    this.esp = 100;
    this.nivel = 1;

    this.personagem = p;
    this.colisao = createSprite(100, 100, 600, 600);
    this.colisao.visible = false;

    // EZGIF.COM -> CROP -> SPLIT -> BAIXA E EXTRAI -> RENOMEIA -> CARREGA A ANIMAÇÃO NO CODIGO

    this.posX = 100;
    this.posY = 100;
    this.tocou = false;
    this.temchaveElfica = false;
    this.podeTerChave = false;
    this.inventario = createSprite(100, 100, 10, 10);
    this.inventario.addImage("in", inventarioImg);
    this.inventario.visible = false;
    this.invAberto = false;
    this.chaveElfica = createSprite(100, 100, 10, 10);
    this.chaveElfica.addImage("cvEl", chaveElImg);
    this.chaveElfica.visible = false;
    this.chaveElfica.scale = 5;

    this.temPTA1 = false;
    this.temPTA2 = false;
    this.temPTA3 = false;
    this.temPTA4 = false;
  }

  update() {
    database.ref("players/player" + this.indice).update({
      posX: this.posX,
      posY: this.posY,
      atacando: this.atacando,
      vida: this.vida,
      ani: this.ani,
      nivel: this.nivel,
      moedas: this.moedas,
    });
  }

  addPlayer() {
    database.ref("players/player" + this.indice).set({
      nome: this.nome,
      posX: this.posX,
      posY: this.posY,
      personagem: this.personagem,
      indice: this.indice,
      atacando: false,
      vida: this.vida,
      ani: this.ani,
      nivel: this.nivel,
      moedas: this.moedas,
    });
  }

  // static getInfo() {
  // database.ref("players").on("value", (data) => {
  //  allPlayers = data.val();
  // });
  //}
  static getInfo() {
    //LÊ BANCO DE DADOS
    database.ref("players").on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
