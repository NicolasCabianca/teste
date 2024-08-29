class Game {
  constructor() {
    this.esquerda = false;
    this.cima = false;
    this.objInfo = createElement("h2");
    this.objInfo.class("sumir");

    this.saldo = createElement("h2")
    this.saldo.position(width / 100, height / 100)
    this.saldo.class("sumir")

    this.saldoImg = createImg("./Img/moeda.png")
    this.saldoImg.position(width/ 100 + 20, height / 100 + 10)
    this.saldoImg.class("sumir")

    

    this.Nperdeu = true;
    this.posInimigos = [
      { x: 334, y: 336 },
      { x: 534, y: 874 },
      { x: 945, y: 874 },
      /*{ x: 2434, y: 234 },
      { x: 2423, y: 245 },
      { x: 2552, y: 224 },
      { x: 3244, y: 234 },
      { x: 324, y: 652 },
      { x: 6547, y: 532 },
      { x: 2453, y: 868 },
      { x: 2352, y: 868 },
      { x: 1547, y: 432 },
      { x: 13564, y: 542 },
      { x: 13564, y: 678 },
      { x: 13564, y: 987 },
      { x: 13564, y: 423 },
      { x: 13564, y: 756 },
      { x: 13564, y: 792 },
      { x: 13564, y: 336 },
      { x: 13564, y: 152 },
      { x: 13564, y: 345 },
      { x: 215, y: 345 },
      { x: 215, y: 432 },
      { x: 215, y: 432 },
      { x: 215, y: 654 },
      { x: 215, y: 654 },
      { x: 674, y: 854 },
      { x: 674, y: 854 },
      { x: 674, y: 85 },
      { x: 674, y: 85 },
      { x: 674, y: 620 },
      { x: 674, y: 1674 },
      { x: 674, y: 2000 },
      { x: 674, y: 2000 },
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
  }
  

  mostrarObjetivo() {
    this.objInfo.class("objetivo");
    this.objInfo.position(width / 1.2, height / 10);
    this.objInfo.html("");
  }
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
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

  play() {
    Player.getInfo(); 

    // gameOverImg = createSprite(100,100,100,100)
    // gameOverImg.visible = false;
    

    if (allPlayers != undefined) {
      var i = 0;
      for (var p in allPlayers) {
        x = allPlayers[p].posX;
        y = allPlayers[p].posY;
        ani = allPlayers[p].ani;

        index = allPlayers[p].indice;

        personagem = allPlayers[p].personagem;

        sprites[personagem - 1].position.x = x;
        sprites[personagem - 1].position.y = y;
        sprites[personagem - 1].changeAnimation(ani);

        
        this.detectarColisao(personagem, index, allPlayers[p].atacando);
        
        this.saldo.html(player.moedas)
        textSize(20);
        fill("white");
        textAlign(CENTER);
        text(allPlayers[p].nome, x, y + 50);

        i++;

        if (i == player.indice) {
          camera.position.x = x;
          camera.position.y = y;
          this.mostrarBarraVida();
          this.mostrarBarraDelay();
          this.lidarMunicao();

          if (player.vida <= 2 && this.Nperdeu) {
            //se o player desceu de nível
            if(desceu == 'sim'){
              //troca o nível dele
              player.nivel = 1;
              //escreve no banco de dados
              player.update()
              localStorage.setItem("nivel",1);
            }
            window.location = "gameOver.html";
            this.Nperdeu = false;
            

          }
        }
      }
    }
    this.controle();

    if (inimigo) {
      inimigo.mover();
    }

    //player.mover();

    drawSprites();
  }
  getState() {
    database.ref("gameState").on("value", (data) => {
      gameState = data.val();
    });
  }
  updateState(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  start() {
    
   

    this.mostrarArbusto();
    this.mostrarportão();
    this.mostrarArvore();
    this.mostrarObjetivo();

    var posInimigos = [
      { x: 334, y: 336 },
      { x: 234, y: 874 },
      { x: 245, y: 874 },
      /*{ x: 2434, y: 234 },
      { x: 2423, y: 245 },
      { x: 2552, y: 224 },
      { x: 3244, y: 234 },
      { x: 324, y: 652 },
      { x: 6547, y: 532 },
      { x: 2453, y: 868 },
      { x: 2352, y: 868 },
      { x: 1547, y: 432 },
      { x: 13564, y: 542 },
      { x: 13564, y: 678 },
      { x: 13564, y: 987 },
      { x: 13564, y: 423 },
      { x: 13564, y: 756 },
      { x: 13564, y: 792 },
      { x: 13564, y: 336 },
      { x: 13564, y: 152 },
      { x: 13564, y: 345 },
      { x: 215, y: 345 },
      { x: 215, y: 432 },
      { x: 215, y: 432 },
      { x: 215, y: 654 },
      { x: 215, y: 654 },
      { x: 674, y: 854 },
      { x: 674, y: 854 },
      { x: 674, y: 85 },
      { x: 674, y: 85 },
      { x: 674, y: 620 },
      { x: 674, y: 1674 },
      { x: 674, y: 2000 },
      { x: 674, y: 2000 },
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
    //eixo X = 6000
    //eixo Y = 2000

    form = new Form();
    form.getCount();
    

    if (desceu == "sim") {
      player = new Player(p, nome, meuIndice, moedas);
      this.updateCount(playerCount);
      this.saldoImg.class("moedas")
      this.saldo.class("")
      playerCount = 4;
    } else {
      form.mostrar();
      form.mostrarVideo() 
    }

    arbustos = new Group();
    arvores = new Group();

    iCE = Math.round(random(0, posInimigos.length - 1));
    this.addSprites(50, arvoreImg, 0.11, arvores);
    this.addSprites(50, arbustoImg, 2, arbustos);
    this.addSprites(
      posInimigos.length,
      elfoMagoneImg,
      2,
      elfoMagones,
      posInimigos
    );
  }
  addSprites(numero, imagem, tamanho, grupo, pos = []) {
    for (var i = 0; i < numero; i++) {
      if (pos.length > 0) {
        var x = pos[i].x;
        var y = pos[i].y;
      } else {
        var x = random(-(width * 1), +( width * 1));
        var y = random(-(height * 3), +( height * 3));
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
  mostrarArbusto() {
    arbusto = createSprite(width / 2, height / 2, 100, 100);
    arbusto.addImage(arbustoImg);
    arbusto.scale = 3.5;
  }
  mostrarArvore() {
    arvore = createSprite(width / 1.5, height / 2, 100, 100);
    arvore.addImage(arvoreImg);
    arvore.scale = 0.1;
  }
  mostrarportão() {
    portão = createSprite(width / 3, height / 1, 100, 100);
    portão.addImage(portãoImg);
    portão.scale = 3.5;
  }
  controle() {
    index = player.personagem - 1;

    if (player.invAberto) {
      player.inventario.position.x = player.posX;
      player.inventario.position.y = player.posY;

      player.inventario.visible = true;
      if (player.temchaveElfica) {
        player.chaveElfica.position.x = player.posX - 250;
        player.chaveElfica.position.y = player.posY - 110;
        player.chaveElfica.visible = true;
      }
    } else {
      player.inventario.visible = false;
      player.chaveElfica.visible = false;
    }

    sprites[index].scale = 2;
    sprites[index].changeImage("normal");
    player.ani = "normal";
    player.atacando = false;

    player.update();

    if (keyDown("W") && player.posY > -(height * 3)) {
      player.posY -= 10;
      sprites[index].changeAnimation("correndo");
      player.ani = "correndo";
      player.update();
      this.cima = false;
    }
    if (keyDown("S") && player.posY < +(height * 3)) {
      player.posY += 10;
      sprites[index].changeAnimation("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("D") && player.posX < +(width * 1)) {
      player.posX += 10;
      sprites[index].changeAnimation("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("A") && player.posX > -(width * 1)) {
      player.posX -= 10;
      sprites[index].changeAnimation("correndo");
      player.ani = "correndo";
      player.update();
      this.esquerda = true;
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
    player.colisao.position.x = player.posX;
    player.colisao.position.y = player.posY;
    if (keyWentDown("I") && player.invAberto) {
      player.invAberto = false;
    } else if (keyWentDown("I") && player.invAberto == false) {
      player.invAberto = true;
    }
  }

  detectarColisao(i, ind, atacando) {
    if (player.podeTerChave && sprites[i - 1].isTouching(chaveElfica)) {
      chaveElfica.destroy();
      player.temchaveElfica = true;
    }
    if (player.temchaveElfica) {
      if (!Schave.isPlaying() && !player.tocou) {
        Schave.play();
        player.tocou = true;
      }

      Schave.setVolume(0.1);
      this.objInfo.html("Objetivo: Encontre o portão!");
    } else {
      this.objInfo.html("Objetivo: Procure a chave nos elfos!");
    }
   
    if (player.temchaveElfica && sprites[i - 1].isTouching(portão)) {
      //GUARDAR/COLOCAR ITEM
      //setItem(key, valor)
      localStorage.setItem("player", player.indice);
      //PEGAR ITEM
      //getItem(key)
      player.posX = 100;
      player.posY = 100;
      player.nivel = 2;
      player.update();
      window.location = "nivel2.html";
    }
    if (player.temchaveElfica == false && sprites[player.personagem - 1].isTouching(portão)) {
  
      swal({
        title: "Portão Fechado!",
        text: "Ache a Chave",
      });
      player.posX = 100;
      player.posY = 100;
    }
    for (var n = 0; n < elfoMagones.length; n++) {
      if(elfoMagones[n].visible){
      if (!player.colisao.isTouching(elfoMagones[n])) {
        elfoMagones[n].velocityX = 0;
        elfoMagones[n].velocityY = 0;
      } else {
        elfo = elfoMagones[n];
        if (elfo.position.x < player.posX) {
          elfo.velocityX = 6;
        } else {
          elfo.velocityX = -6;
        }
        if (elfo.position.y < player.posY) {
          elfo.velocityY = 6;
        } else {
          elfo.velocityY = -6;
        }
      }

      if (sprites[i - 1].isTouching(elfoMagones[n])) {
        elfo = elfoMagones[n];
        if (atacando) {
         
          if (iCE == n) {
            chaveElfica = createSprite(player.posX + 50, player.posY + 50);
            chaveElfica.addImage("chaveE", chaveElImg);
            chaveElfica.scale = 2;
            player.podeTerChave = true;
          }

          elfo.visible = false;
          elfo.position.x = this.posInimigos[n].x
          elfo.position.y = this.posInimigos[n].y

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
      }else{
        if( frameCount % 60 == 0){
          elfoMagones[n].position.x = this.posInimigos[n].x
          elfoMagones[n].position.y = this.posInimigos[n].y
          
          elfoMagones[n].visible = true
      }
      }
    }
  }
}
