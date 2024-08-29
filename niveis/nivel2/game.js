class Game {
  constructor() {

   
    this.mostrarpedra();
    this.mostrarTorreQ();
    this.mostrarBarraquinha();
    this.mostrarEspt1();
    this.mostrarc5();
    this.mostrarNPC1();
    this.mostrarNPC2();
    this.mostrarNPC3();
    this.mostrarNPC4();
    this.mostrarNPC5();
    this.posInimigos = [
      { x: 534, y: 336 },
      { x: 934, y: 604 },
      { x: 345, y: 874 },
      /*{ x: 534, y: 434 },
      { x: 435, y: 295 },
      { x: 452, y: 254 },
      { x: 444, y: 204 },
      { x: 504, y: 652 },
      { x: 647, y: 532 },
      { x: 453, y: 868 },
      { x: 1352, y: 868 },
      { x: 1547, y: 432 },
      { x: 1364, y: 542 },
      { x: 354, y: 678 },
      { x: 560, y: 987 },
      { x: 1594, y: 423 },
      { x: 1694, y: 756 },
      { x: 1889, y: 792 },
      { x: 1964, y: 336 },
      { x: 1764, y: 152 },
      { x: 1394, y: 345 },
      { x: 1215, y: 345 },
      { x: 1215, y: 432 },
      { x: 1215, y: 432 },
      { x: 1215, y: 654 },
      { x: 1215, y: 654 },
      { x: 1674, y: 854 },
      { x: 1674, y: 854 },
      { x: 2674, y: 85 },
      { x: 2674, y: 85 },
      { x: 2674, y: 620 },
      { x: 2674, y: 1674 },
      { x: 2674, y: 2000 },
      { x: 2674, y: 2000 },
      { x: 1856, y: 204 },
      { x: 1864, y: 204 },
      { x: 1286, y: 204 },
      { x: 1786, y: 2234 },
      { x: 1686, y: 2234 },
      { x: 1844, y: 2234 },
      { x: 1844, y: 2234 },
      { x: 1844, y: 1423 },
      { x: 1844, y: 1423 },
        { x: 1844, y: 1356 },
          { x: 1844, y: 1356 },
          { x: 1844, y: 1356 },
          { x: 1844, y: 1989 },
          { x: 1412, y: 1989 },
          { x: 1412, y: 1989 },
          { x: 1412, y: 244 },
          { x: 1412, y: 244 },
          { x: 1424, y: 1256 },
          { x: 1624, y: 1256 },
          { x: 1224, y: 1256 },
          { x: 1124, y: 1224 },
          { x: 1264, y: 1224 },
          { x: 1254, y: 1523 },
          { x: 1284, y: 1723 },
          { x: 1203, y: 1623 },
          { x: 3517, y: 1214 },
          { x: 3517, y: 431 },
          { x: 323, y: 356 },
          { x: 3787, y: 353 },
          { x: 3566, y: 355 },
          { x: 357, y: 556 },
          { x: 517, y: 355 },
          { x: 351, y: 2555 },
          { x: 6000, y: 1122 },
          { x: 543, y: 336 },
          { x: 635, y: 336 },
          { x: 4512, y: 336 },*/
    ];
    this.Nperdeu = true;

    this.chaveDugeon = createSprite( 50,  50);
    this.chaveDugeon.addImage("chaveD", chaveDImg);
    this.chaveDugeon.scale = 2;
    this.chaveDugeon.visible = false;

    this.poderAtivado = false;

    this.objInfo = createElement("h2");
    this.objInfo.class("sumir");

    this.missaoDesbloqueada = false;
    this.missaoNumero = 0;

    this.missaoDesbloqueada2 = false;
    this.missaoNumero2 = 0;

    this.missaoDesbloqueada3 = false;
    this.missaoNumero3 = 0;

    this.missaoDesbloqueada4 = false;
    this.missaoNumero4 = 0;

    this.missaoDesbloqueada5 = false;
    this.missaoNumero5 = 0;

    this.missaoTxt = "";
    this.missaoElemento = createElement("h2");
    this.missaoElemento.class("objetivo");
    this.missaoElemento.position(width - 250, height / 5 + 10);
    this.missaoElemento.html(this.missaoTxt);

    this.missaoTxt2 = "";
    this.missaoElemento2 = createElement("h2");
    this.missaoElemento2.class("objetivo");
    this.missaoElemento2.position(width - 250, height / 3.3 + 10);
    this.missaoElemento2.html(this.missaoTxt2);

    this.missaoTxt3 = "";
    this.missaoElemento3 = createElement("h2");
    this.missaoElemento3.class("objetivo");
    this.missaoElemento3.position(width - 250, height / 2.5 + 10);
    this.missaoElemento3.html(this.missaoTxt3);

    this.missaoTxt4 = "";
    this.missaoElemento4 = createElement("h2");
    this.missaoElemento4.class("objetivo");
    this.missaoElemento4.position(width - 250, height / 2 + 10);
    this.missaoElemento4.html(this.missaoTxt4);

    this.missaoTxt5 = "";
    this.missaoElemento5 = createElement("h2");
    this.missaoElemento5.class("objetivo");
    this.missaoElemento5.position(width - 250, height / 1.5 + 10);
    this.missaoElemento5.html(this.missaoTxt5);

    this.saldo = createElement("h2");
    this.saldoImg = createImg("./Img/moeda.png");
    this.saldoImg.position(width / 100 + 20, height / 100 + 10);
    this.saldo.position(width / 100, height / 100);
    this.saldo.class("sumir");
    this.saldoImg.class("moedas");

    this.loja = createSprite(100, 100, 10, 10);
    //this.loja.scale = 20;
    this.loja.addAnimation("lj", invBarracaImg);
    this.loja.visible = false;
    this.loja.depth = 99999;

    this.pocaoC = createSprite(
      this.loja.position.x,
      this.loja.position.y + 50,
      10,
      10
    );
    this.pocaoC.addImage("VD", pocaoCImg);
    this.pocaoC.scale = 3;
    this.pocaoC.visible = false;

    this.PT6 = createSprite(1, 110, 10, 10);
    this.PT6.addImage("6", PT6Img);
    this.PT6.scale = 3;
    this.PT6.visible = false;

    this.cPt5 = createSprite(1, 110, 10, 10);
    this.cPt5.addImage("5", cPt5Img);
    this.cPt5.scale = 3;
    this.cPt5.visible = false;

    this.PT5 = createSprite(1, 110, 10, 10);
    this.PT5.addImage("5", PT5Img);
    this.PT5.scale = 3;
    this.PT5.visible = false;

    this.PT1 = createSprite(1, 110, 10, 10);
    this.PT1.addImage("1", PT1Img);
    this.PT1.scale = 3;
    this.PT1.visible = false;

    this.PT2 = createSprite(1, 110, 10, 10);
    this.PT2.addImage("2", PT2Img);
    this.PT2.scale = 3;
    this.PT2.visible = false;

    this.PT3 = createSprite(
      this.loja.position.x - 100,
      this.loja.position.y - 50,
      10,
      10
    );
    this.PT3.addImage("3", PT3Img);
    this.PT3.scale = 3;
    this.PT3.visible = false;

    this.PT4 = createSprite(
      this.loja.position.x + 100,
      this.loja.position.y - 30,
      10,
      10
    );
    this.PT4.addImage("4", PT4Img);
    this.PT4.scale = 3;
    this.PT4.visible = false;

    this.BT1 = createSprite(this.PT3.x, this.PT3.y + 70, 10, 10);
    this.BT1.addImage("1", BT1Img);
    this.BT1.scale = 4;
    this.BT1.visible = false;

    this.BT2 = createSprite(this.PT4.x, this.PT4.y + 50, 10, 10);
    this.BT2.addImage("2", BT2Img);
    this.BT2.scale = 4;
    this.BT2.visible = false;

    this.BT3 = createSprite(this.pocaoC.x, this.pocaoC.y + 70, 10, 10);
    this.BT3.addImage("3", BT3Img);
    this.BT3.scale = 4;
    this.BT3.visible = false;

    this.posbau = [
      { x: width*0.5, y: height * 0.2 },
      { x: width*0.2, y: height * 0.9 },
      { x: width*0.7, y: height * 0.1 },
      { x: width*0.3, y: height * 0.8 },
      { x: width*0.8, y: height * 0.3 },
      { x: width*0.1, y: height * 1 },
      { x: width*0.9, y: height * 2.2 },
      { x: width*0.2, y: height * 2.8 },
      { x: width*0.8, y: height * 1.5 },
      { x: width*0.3, y: height * 0.25 },
      { x: width*0.7, y: height * 2.72 },
      { x: width*0.4, y: height * 0.82 },
      { x: width*0.5, y: height * 1.29 },
      { x: width*0.2, y: height * 2.28 },
      { x: width*0.6, y: height * 0.23 },
      { x: width*0.75, y: height * 1.25 },
      
    ];
  }
  mostrarBarraDelay() {
    push();
    //rectMode(CENTER)
    image(espImg, player.posX - 75, player.posY - 55, 20, 20);
    fill("white");
    rect(player.posX - 50, player.posY - 50, 100, 5);

    fill("blue");
    rect(player.posX - 50, player.posY - 50, player.esp, 5);

    pop();
  }

  lidarMunicao() {
    if (player.atacando == true && player.esp > 5) {
      player.esp -= 2;
    }
  } 
  mostrarObejtivo() {
    this.objInfo.class("objetivo");
    this.objInfo.position(width / 1.2, height / 10);
    this.objInfo.html("");
  }
  mostrarBarraVida() {
    push();
    //rectMode(CENTER)
    image(vidaImg, player.posX - 68, player.posY - 40, 10, 10);
    fill("white");
    rect(player.posX - 50, player.posY - 40, 100, 5);

    fill("red");
    rect(player.posX - 50, player.posY - 40, player.vida, 5);

    pop();
  }
  play(lista) {
    if (lista.length > 0) {
    
      if (
        sprites[player.personagem - 1].isTouching(bau) &&
        keyWentDown("Z")
      ) {

        moeda.x = bau.position.x + 50;
        moeda.y = bau.position.y + 50;
        moeda.visible = true;
        console.log("Indice: ",iB);
        console.log("Antes de trocar: ", bau.position.x)
       
        bau.position.x = this.posbau[iB % this.posbau.length].x;
        bau.position.y = this.posbau[iB % this.posbau.length].y;
        console.log("Dps de trocar: ", bau.position.x)
        
        iB++;
        console.log("Indice: ",iB);
      }

      if (moeda.visible && sprites[player.personagem - 1].isTouching(moeda)) {
        moeda.x = bau.x + 50;
        moeda.y = bau.y + 50;
        moeda.visible = false;
        player.moedas += 80; //15;
      }
      if (coin.visible && sprites[player.personagem - 1].isTouching(coin)) {
        coin.visible = false;
        player.moedas += 1;
      }
      if (
        !player.temPT4 &&
        mousePressedOver(this.BT2) &&
        this.PT4.visible &&
        player.moedas >= 40
      ) {
        player.moedas -= 40;
        this.BT2.visible = false;
        this.PT4.visible = false;
        player.temPT4 = true;
      }
      if (
        !player.temPT3 &&
        mousePressedOver(this.BT1) &&
        this.PT3.visible &&
        player.moedas >= 40
      ) {
        player.moedas -= 40;
        this.BT1.visible = false;
        this.PT3.visible = false;
        player.temPT3 = true;
      }
      if (
        !player.temPocao &&
        mousePressedOver(this.BT3) &&
        this.pocaoC.visible &&
        player.moedas >= 10
      ) {
        player.moedas -= 10;
        this.BT3.visible = false;
        this.pocaoC.visible = false;
        player.temPocao = true;
      }

      if (this.missaoDesbloqueada2) {
        this.missaoTxt2 =
          "Missão2: Mate " + this.missaoNumero2 + "  /10 inimigos ";
        this.missaoElemento2.html(this.missaoTxt2);
      }
      if (
        sprites[player.personagem - 1].isTouching(NPC2) &&
        keyWentDown("Z")
      ) {
        this.missaoDesbloqueada2 = true;
      }
      if (this.missaoDesbloqueada3) {
        this.missaoTxt3 =
          "Missão3: Mate " + this.missaoNumero3 + "  /20 inimigos ";
        this.missaoElemento3.html(this.missaoTxt3);
      }

      if (this.missaoDesbloqueada4) {
        this.missaoTxt4 =
          "Missão4: Mate " + this.missaoNumero4 + " /18 inimigos";
        this.missaoElemento4.html(this.missaoTxt4);
      }

      if (
        sprites[player.personagem - 1].isTouching(NPC3) &&
        keyWentDown("Z")
      ) {
        this.missaoDesbloqueada3 = true;
      }

      if (this.missaoDesbloqueada) {
        this.missaoTxt =
          "Missão1: Mate " + this.missaoNumero + "  /5 inimigos ";
        this.missaoElemento.html(this.missaoTxt);
      }
      /* if (this.missaoDesbloqueada5) {
        this.missaoTxt5 =
          "Missão5: Mate " + this.missaoNumero + "  /25 inimigos ";
        this.missaoElemento5.html(this.missaoTxt5);
      }*/
      if (
        sprites[player.personagem - 1].isTouching(NPC4) &&
        keyWentDown("Z")
      ) {
        this.missaoDesbloqueada4 = true;
      }
      if (
        sprites[player.personagem - 1].isTouching(NPC5) &&
        keyWentDown("Z")
      ) {
        this.missaoDesbloqueada5 = true;
      }

      if (
        sprites[player.personagem - 1].isTouching(NPC1) &&
        keyWentDown("Z")
      ) {
        this.missaoDesbloqueada = true;
      }
      if (
        sprites[player.personagem - 1].isTouching(esPt1) &&
        keyWentDown("Z")
      ) {
        esPt1.visible = false;
        if (!player.temPT1) {
          player.temPT1 = true;
        }
      }
      if (sprites[player.personagem - 1].isTouching(c5) && keyWentDown("Z")) {
        c5.visible = false;
        if (!player.temCPT5) {
          player.temCPT5 = true;
        }
      }

      if (player.temPT1 && player.temPT2 && player.temPT3 && player.temPT4) {
        this.PT1.visible = false;
        this.PT2.visible = false;
        this.PT3.visible = false;
        this.PT4.visible = false;

        if (!player.temPT5) {
          player.temPT5 = true;
        }
      }
      if (player.temPT5 && player.temCPT5) {
        this.PT5.visible = false;
        this.cPt5.visible = false;

        if (!player.temPT6) {
          player.temPT6 = true;
        }
      }
      if (!this.poderAtivado && player.temPT6 && keyWentDown("F")) {
        // if (!spoder.isPlaying() && !player.tocou) {
        spoder.play();
        // player.tocou = true;
        // }

        poder1 = createSprite(player.posX + 40, player.posY + 40, 100, 100);
        poder1.addImage("p1", poder1Img);
        poder1.addImage("p3", poder3Img);
        poder1.scale = 2.2;
        poder1.velocityY = 0;
        poder1.velocityX = -0.1;
        poder1.setCollider("circle", 5, 5, 3);

        this.poderAtivado = true;

        poder2 = createSprite(player.posX - 40, player.posY + 40, 100, 100);
        poder2.addImage("p2", poder2Img);
        poder2.scale = 2.2;
        poder2.velocityY = 0;
        poder2.velocityX = 0.1;
        poder2.setCollider("circle", 5, 5, 3);
      }
      if (this.poderAtivado && poder1.isTouching(poder2)) {
        poder1.changeImage("p3");
        poder1.scale = 2.2;
        poder1.velocityX = 0;
        poder1.velocityY = 0;
        poder1.setCollider("circle", 8, 8, 6);

        poder2.destroy();
      }

      for (var n = 0; n < cavaleirofan.length; n++) {
        if (this.poderAtivado && poder1.isTouching(cavaleirofan[n])) {
          cavaleirofan[n].visible = false;
        }
      }
      if(this.poderAtivado && frameCount % 1000 == 0){
        poder1.velocityY = -12
      }

      if (this.poderAtivado && frameCount % 1500 == 0) {
        this.poderAtivado = false;
        poder1.destroy();
      }
     

      if (
        sprites[player.personagem - 1].isTouching(barraquinha) &&
        keyWentDown("Z")
      ) {
        sprites[player.personagem - 1].visible = false;
        if (!player.abriuloja) {
          this.loja.position.x = player.posX;
          this.loja.position.y = player.posY;
          player.abriuloja = true;

          this.loja.visible = true;

          if (!player.temPocao) {
            this.pocaoC.position.x = this.loja.position.x;
            this.pocaoC.position.y = this.loja.position.y + 50;
            this.pocaoC.visible = true;

            this.BT3.position.x = this.pocaoC.position.x;
            this.BT3.position.y = this.pocaoC.position.y + 70;
            this.BT3.visible = true;
          }
          if (!player.temPT3) {
            this.PT3.position.x = this.loja.position.x - 100;
            this.PT3.position.y = this.loja.position.y - 50;
            this.PT3.visible = true;

            this.BT1.position.x = this.PT3.position.x;
            this.BT1.position.y = this.PT3.position.y + 70;
            this.BT1.visible = true;
          }
          if (!player.temPT4) {
            this.PT4.position.x = this.loja.position.x + 100;
            this.PT4.position.y = this.loja.position.y - 30;
            this.PT4.visible = true;

            this.BT2.position.x = this.PT4.position.x;
            this.BT2.position.y = this.PT4.position.y + 50;
            this.BT2.visible = true;
          }
        } else {
          this.loja.visible = false;
          player.abriuloja = false;
          this.pocaoC.visible = false;
          this.PT3.visible = false;
          this.PT4.visible = false;
          this.BT1.visible = false;
          this.BT2.visible = false;
          this.BT3.visible = false;
        }
      }

      background("lightgray");
      this.mostrarBarraVida();
      this.saldo.html(player.moedas);
     
    this.mostrarBarraDelay();
    this.lidarMunicao();

      for (var p in lista) {
       
        indice = lista[p].indice;
        
        personagem = lista[p].personagem;
        ani = lista[p].ani;

      sprites[personagem - 1].changeAnimation(ani)

      


        
        this.DetectarColisao(personagem, indice, lista[p].atacando);
        x = lista[p].posX;

        y = lista[p].posY;

        sprites[personagem - 1].position.x = x;
        sprites[personagem - 1].position.y = y;
        textSize(20);
        fill("black");
        textAlign(CENTER);
        text(lista[p].nome, x, y + 50);
        
      }

      if (!player.abriuloja && !this.poderAtivado) {
        this.Controle();
      }
      drawSprites();
    }
    if (player.vida <= 2 && this.Nperdeu) {
      player.moedas = 0;

      localStorage.setItem("nome", player.nome);
      localStorage.setItem("p", player.personagem);
      localStorage.setItem("indice", player.indice);
      localStorage.setItem("moedas", player.moedas);
      localStorage.setItem("nivel", player.nivel);
     
      player.update();
      window.location = "gameOver.html";
      this.Nperdeu = false;
    }
  }
  mostrarPortal() {
    portal = createSprite(width / 10, height * 2, 100, 100);
    portal.addImage(portalImg);
    portal.scale = 3.5;
  }
  start() {
    this.saldo.class("");

    this.mostrarportão();
    this.mostrarPortal();

    this.mostrarObejtivo();

    this.mostrarBau();

    pedras = new Group();
    torresQ = new Group();
    casasNpc = new Group();

   

    ICD = Math.round(random(0, this.posInimigos.length - 1));

    this.addSprites(
      this.posInimigos.length,
      cavaleirofanImg,
      2,
      cavaleirofan,
      this.posInimigos
    );

    this.addSprites(50, pedraImg, 3, pedras);
    this.addSprites(50, torreQImg, 2, torresQ);
    
  }
  addSprites(numero, imagem, tamanho, grupo, pos = []) {
    for (var i = 0; i < numero; i++) {
      if (pos.length > 0) {
        var x = pos[i].x;
        var y = pos[i].y;
      } else {
        var x = random(-(width * 1), +(width * 1));
        var y = random(-(height * 3), +(height * 3));
      }

      var sprite = createSprite(x, y);
      sprite.addImage(imagem);
      sprite.scale = tamanho;
      if (pos.length > 0) {
        grupo.push(sprite);
      } else {
        grupo.add(sprite);
      }
    }
  }
  mostrarportão() {
    portão = createSprite(width / 3, height / 1, 100, 100);
    portão.addImage(portãoImg);
    portão.scale = 3.5;
  }
  mostrarBau() {
    bau = createSprite(width / 1, height / 1, 100, 100);
    bau.addImage(bauImg);
    bau.scale = 3.5;

    moeda = createSprite(width / 1, height / 1, 100, 100);
    moeda.addImage(moedaImg);
    moeda.scale = 1.2;
    moeda.visible = false;

    coin = createSprite(width / 1, height / 1, 100, 100);
    coin.addImage(moedaImg);
    coin.scale = 1.2;
    coin.visible = false;
  }
  mostrarc5() {
    c5 = createSprite(width / 5, height / 0.6, 100, 100);
    c5.addImage(c5Img);
    c5.scale = 3.2;
  }

  mostrarEspt1() {
    esPt1 = createSprite(width / 5, height / 0.5, 100, 100);
    esPt1.addImage(esPt1Img);
    esPt1.scale = 3.2;
  }
 
  mostrarNPC1() {
    NPC1 = createSprite(width / 3, height / 20, 100, 100);
    NPC1.addImage(NPC1Img);
    NPC1.scale = 1.6;
  }
  mostrarNPC2() {
    NPC2 = createSprite(width / 200, height / 10, 1000, 1000);
    NPC2.addImage(NPC2Img);
    NPC2.scale = 1.6;
  }
  mostrarNPC3() {
    NPC3 = createSprite(width / 500, height / 1, 1000, 1000);
    NPC3.addImage(NPC3Img);
    NPC3.scale = 1.6;
  }
  mostrarNPC4() {
    NPC4 = createSprite(width / 1000, height / 90000000, 1000, 1000);
    NPC4.addImage(NPC4Img);
    NPC4.scale = 1.6;
  }
  mostrarNPC5() {
    NPC5 = createSprite(width / 5000, height / 1, 1000, 1000);
    NPC5.addImage(NPC3Img);
    NPC5.scale = 1.6;
  }
  mostrarBarraquinha() {
    barraquinha = createSprite(width / 1, height / 100, 100, 100);
    barraquinha.addAnimation("a", barraquinhaImg);
    barraquinha.scale = 3.5;
  }
  mostrarpedra() {
    pedra = createSprite(width / 3, height / 2, 100, 100);
    pedra.addImage(pedraImg);
    pedra.scale = 3.5;
  }
  mostrarTorreQ() {
    torreQ = createSprite(width / 3, height / 2, 100, 100);
    torreQ.addImage(torreQImg);
    torreQ.scale = 1.5;
  }
  Controle() {
    index = player.personagem - 1;

    if (player.invAberto) {
      player.inventario.position.x = player.posX;
      player.inventario.position.y = player.posY;

      player.inventario.visible = true;

      if (player.temPocao) {
        this.pocaoC.position.x = player.posX - 170;
        this.pocaoC.position.y = player.posY - 110;
        this.pocaoC.visible = true;
        this.pocaoC.scale = 2.2;
        this.pocaoC.depth = 9999999;
      }
      if (player.temPT4) {
        this.PT4.position.x = player.posX - 12;
        this.PT4.position.y = player.posY - 110;
        this.PT4.visible = true;
        this.PT4.scale = 2.2;
        this.PT4.depth = 99999999999;
      }
      if (player.temPT3) {
        this.PT3.position.x = player.posX - 90;
        this.PT3.position.y = player.posY - 110;
        this.PT3.visible = true;
        this.PT3.scale = 2.2;
        this.PT3.depth = 9999999;
      }
      if (player.temPT2) {
        this.PT2.position.x = player.posX + 90;
        this.PT2.position.y = player.posY - 110;
        this.PT2.visible = true;
        this.PT2.scale = 2.2;
        this.PT2.depth = 9999999;
      }
      if (player.temPT1) {
        this.PT1.position.x = player.posX + 160;
        this.PT1.position.y = player.posY - 110;
        this.PT1.visible = true;
        this.PT1.scale = 2.2;
        this.PT1.depth = 9999999;
      }
      if (player.temPT5) {
        this.PT5.position.x = player.posX - 90;
        this.PT5.position.y = player.posY - 110;
        this.PT5.visible = true;
        this.PT5.scale = 2.2;
        this.PT5.depth = 9999999;
      }
      if (player.temCPT5) {
        this.cPt5.position.x = player.posX + 230;
        this.cPt5.position.y = player.posY - 110;
        this.cPt5.visible = true;
        this.cPt5.scale = 2.2;
        this.cPt5.depth = 9999999;
      }
      if (player.temPT6) {
        this.PT6.position.x = player.posX - 90;
        this.PT6.position.y = player.posY - 110;
        this.PT6.visible = true;
        this.PT6.scale = 2.2;
        this.PT6.depth = 9999999;
      }
      if (player.temSUkunaPT1) {
      }
      if (player.temchaveDungeon) {
        player.chaveDugeon.position.x = player.posX - 250;
        player.chaveDugeon.position.y = player.posY - 100;
        player.chaveDugeon.visible = true;
      }
    } else {
      player.inventario.visible = false;
      player.chaveDugeon.visible = false;
      this.pocaoC.visible = false;
      this.PT3.visible = false;
      this.PT4.visible = false;
      this.PT2.visible = false;
      this.PT1.visible = false;
      this.PT5.visible = false;
      this.cPt5.visible = false;
      this.PT6.visible = false;
    }

    sprites[index].changeImage("normal");
    player.ani = "normal";
    player.atacando = false;
    if (this.poderAtivado) {
      camera.position.y = poder1.posY;
    } else if (!this.poderAtivado) {
      camera.position.x = player.posX;
      camera.position.y = player.posY;
    }

    player.colisao.position.x = player.posX;
    player.colisao.position.y = player.posY;


    //var x = random(-(width * 10), +(width * 10));
    //var y = random(-(height * 10), +(height * 10));
    if (keyDown("W") && player.posY > -(height * 3)) {
      if (player.temPT6) {
        player.posY -= 11.5;
      }
      player.posY -= 10;
      sprites[index].changeImage("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("S") && player.posY < +(height * 3)) {
      if (player.temPT6) {
        player.posY += 11.5;
      }
      player.posY += 10;
      sprites[index].changeImage("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("A") && player.posX > -(width * 1)) {
      if (player.temPT6) {
        player.posX -= 11.5;
      }
      player.posX -= 10;
      sprites[index].changeImage("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("D") && player.posX < +(width * 1)) {
      if (player.temPT6) {
        player.posX += 11.5;
      }
      player.posX += 10;
      sprites[index].changeImage("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("E") && player.esp > 5) {
     

      player.atacando = true;
      sprites[index].changeImage("ataque");
      player.ani = "ataque";
      player.update();
    }
    if (player.esp < 100 && keyDown("E") == false) {
      player.esp += 0.11;
    }
    if (player.esp < 50 && player.esp == 50) {
      sprites[index].changeImage("ataque");
      player.ani = "ataque";
      player.update();
    }

    if(keyWentUp("E")){
      player.ani = "normal";
      player.update();
    }
      
    if (keyWentDown("I") && player.invAberto) {
      player.invAberto = false;
    } else if (keyWentDown("I") && player.invAberto == false) {
      player.invAberto = true;
    }
    if (keyWentDown("Q") && player.vida <= 50 && player.temPocao) {
      player.temPocao = false;
      player.vida = 100;
    }
  }

  DetectarColisao(i, ind, atacando) {
    if (sprites[i - 1].isTouching(portal) && player.moedas >= 10) {
      player.moedas -= 10;
      localStorage.setItem("desceu2", "sim");
      localStorage.setItem("nome", player.nome);
      localStorage.setItem("p", player.personagem);
      localStorage.setItem("indice", player.indice);
      localStorage.setItem("moedas", player.moedas);
      player.nivel = 1;
      player.update();
      window.location = "index.html";
    }
    if (player.podeTerChave && sprites[i - 1].isTouching(this.chaveDugeon)) {
      this.chaveDugeon.destroy();
      player.temchaveDungeon = true;
    }
    if (player.temchaveDungeon) {
      if (!Schave.isPlaying() && !player.tocou) {
        Schave.play();
        player.tocou = true;
      }

      Schave.setVolume(0.1);
      this.objInfo.html("Objetivo: Encontre o portão!");
    } else {
      this.objInfo.html("Objetivo: Procure a chave nos cavaleiros!");
    }
    if (player.temchaveDungeon && sprites[i - 1].isTouching(portão)) {

      localStorage.setItem("player",player.indice)

      player.posX = 100
      player.posY = 100
      player.nivel = 3
      player.update()
      window.location = "nivel3.html";

    }

    if (player.temchaveDungeon == false && sprites[player.personagem - 1].isTouching(portão)) {
      swal({
        title: "Portão Fechado!",
        text: "Ache a Chave",
      });
      player.posX = 100;
      player.posY = 100;
    }
    //GUARDAR/COLOCAR ITEM
    //setItem(key, valor)

    for (var n = 0; n < cavaleirofan.length; n++) {
      if(cavaleirofan[n].visible){
        if (!player.colisao.isTouching(cavaleirofan[n])) {
          cavaleirofan[n].velocityX = 0;
          cavaleirofan[n].velocityY = 0;
        } else {
          cavF = cavaleirofan[n];
          if (cavF.position.x < player.posX) {
            cavF.velocityX = 6;
          } else {
            cavF.velocityX = -6;
          }
          if (cavF.position.y < player.posY) {
            cavF.velocityY = 6;
          } else {
            cavF.velocityY = -6;
          }
          if (sprites[i - 1].isTouching(cavaleirofan[n])) {
            if (atacando) {
              if (this.missaoDesbloqueada) {
                this.missaoNumero++;
              }
              if (this.missaoNumero == 5) {
                this.missaoElemento.html("");
                player.moedas += 10;
                this.missaoDesbloqueada = false;
                this.missaoNumero = 0;
              }
  
              if (this.missaoDesbloqueada2) {
                this.missaoNumero2++;
              }
              if (this.missaoNumero2 == 10) {
                this.missaoElemento2.html("");
                player.moedas += 20;
                this.missaoDesbloqueada2 = false;
                this.missaoNumero2 = 0;
              }
              if (this.missaoDesbloqueada3) {
                this.missaoNumero3++;
              }
              if (this.missaoNumero3 == 1) { //20
                if (player.temPT5) {
                  !player.temPT2;
                }
                if (!player.temPT2) {
                  player.temPT2 = true;
                }
                this.missaoElemento3.html("");
                this.missaoDesbloqueada3 = false;
                this.missaoNumero3 = 0;
              }
              if (this.missaoDesbloqueada4) {
                this.missaoNumero4++;
              }
              if (this.missaoNumero4 == 18) {
                this.missaoElemento4.html("");
                player.moedas += 36;
                this.missaoDesbloqueada4 = false;
                this.missaoNumero4 = 0;
              }
  
              if (ICD == n) {
                this.chaveDugeon.position.x = player.posX + 50
                this.chaveDugeon.position.y = player.posY + 50
               
                this.chaveDugeon.visible = true;
                player.podeTerChave = true;
  
              }
  
              coin.position.x = cavF.position.x + 50;
              coin.position.y = cavF.position.y + 50;
              coin.visible = true;
  
              cavF.visible = false;
              cavF.position.x = this.posInimigos[n].x
              cavF.position.y = this.posInimigos[n].y
  
            } else {
              if (ind == player.indice && player.vida > 2) {
                player.vida -= 10;
                if (this.cima) {
                  player.posY += 50;
                } else {
                  player.posY -= 50;
                }
                if (this.esquerda) {
                  player.posX += 50;
                } else {
                  player.posX -= 50;
                }
  
                if (gameState == 2) {
                  // gameOverImg.visible = true;
                }
                player.update();
              }
            }
          }
        }
      }else{
        if( frameCount % 60 == 0){
          cavaleirofan[n].position.x = this.posInimigos[n].x
          cavaleirofan[n].position.y = this.posInimigos[n].y
          
          cavaleirofan[n].visible = true
        }
      }
    }
      
  }
}
