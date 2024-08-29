class Player {
constructor(p, nome, indice, moedas) {
    this.nome = nome;
    this.indice = indice;
    this.vida = 100;
    this.moedas = moedas;
    this.atacando = false;
    this.ani = "normal";
    this.esp = 100;
    this.nivel = 3;

    this.personagem = p;
    this.colisao = createSprite(100, 100, 600, 600);
    // this.colisao.setCollider("circle", 0,0, 300)
    // this.colisao.debug = true

    this.colisao.visible = false;

    // EZGIF.COM -> CROP -> SPLIT -> BAIXA E EXTRAI -> RENOMEIA -> CARREGA A ANIMAÇÃO NO CODIGO
 
    this.posX = 100;
    this.posY = 100;
    this.tocou = false;
    this.temchaveDungeon = false;
    this.podeTerChave = false;

    this.inventario = createSprite(100, 100, 10, 10);
    this.inventario.addImage("in", inventarioImg);
    this.inventario.visible = false;
    this.invAberto = false;

    this.chaveDugeon = createSprite(100, 100, 10, 10);
    this.chaveDugeon.addImage("cvD", chaveDImg);
    this.chaveDugeon.visible = false;
    this.chaveDugeon.scale = 5;
    this.abriuloja = false;

    this.temPocao = false;
    this.temPT3 = false;
    this.temPT4 = false;
    this.temPT2 = false;
    this.temPT1 = false;
    this.temPT5 = false;
    this.temPT6 = false;
    this.temCPT5 = false;
    this.temSUkunaPT1 = false;
  }

  update() {
    database.ref("players/player" + this.indice).update({
      posX: this.posX,
      posY: this.posY,
      atacando: this.atacando,
      vida: this.vida,
      ani: this.ani,
      nivel: this.nivel,
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
    });
  }
  static getInfo() {
    //LÊ BANCO DE DADOS
    database.ref("players").on("value", (data) => {
      allPlayers = data.val();
    });
  }
}   

