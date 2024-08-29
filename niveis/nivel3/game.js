class Game {
  constructor() {
    this.cima = false;
    this.esquerda = false;
    this.Nperdeu = true;
    this.mostrarTF()
    this.mostrarODF()
  }
  mostrarBarraVidaInimigo() {
    if(inimigo.Nvivo == false){
      push();
      //rectMode(CENTER)
     
      fill("white");
      rect(inimigo.posX - 100, inimigo.posY - 100, 200, 6.5);
  
      fill("red");
      rect(inimigo.posX - 100, inimigo.posY - 100, inimigo.vida / 5, 6.5);
  
      pop();
    }
    
  }
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
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
      for (var p in lista) {
        indice = lista[p].indice
        personagem = lista[p].personagem
        ani = lista[p].ani

        sprites[personagem - 1].changeAnimation(ani)

        if (player.vida <= 2 && this.Nperdeu) {
          window.location = "gameOver.html";
          this.Nperdeu = false;
        }

        inimigo.sprite.position.x = inimigo.posX
        inimigo.sprite.position.y = inimigo.posY
        this.mostrarBarraVidaInimigo()


        this.DetectarColisao(personagem, indice, lista[p].atacando);

        x = lista[p].posX
        y = lista[p].posY

        sprites[personagem - 1].position.x = x
        sprites[personagem - 1].position.y = y
      }
      this.mostrarBarraVida();
      this.mostrarBarraDelay();
      this.lidarMunicao();

      this.Controle()
    }
    textSize(20);
    fill("black");
    textAlign(CENTER);
    text(lista[p].nome, x, y + 50);
  }
  getState() {
    database.ref("gameState").on("value", (data) => {
      gameState = data.val();
    });
  }
  start() {


    torresF = new Group()


    this.addSprites(550, torreFImg, 3.5, torresF)

    inimigo = new Inimigo()
    inimigo.lerBancoDados()

  }
  addSprites(numero, imagem, tamanho, grupo, pos = []) {
    console.log('deu certo')
    for (var i = 0; i < numero; i++) {
      if (pos.length > 0) {
        var x = pos[i].x;
        var y = pos[i].y;
      } else {
        var x = random(-(width * 10), +(width * 10));
        var y = random(-(height * 10), +(height * 10));
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
  mostrarTF() {
    torreF = createSprite(width / 3, height / 2, 100, 100)
    torreF.addImage(torreFImg)
    torreF.scale = 3.5
  }
  mostrarODF() {
    ogrodfog = createSprite(1450, 230, 100, 100)
    ogrodfog.addImage(ogrodfogImg)
    ogrodfog.scale = 4
    ogrodfog.visible = false
  }

  Controle() {
    index = player.personagem - 1;

    sprites[index].changeImage("normal");
    player.ani = "normal";
    player.atacando = false;


    camera.position.x = player.posX;
    camera.position.y = player.posY;


    player.colisao.position.x = player.posX;
    player.colisao.position.y = player.posY;


    if (keyDown("W")) {
      this.cima = true
      player.posY -= 10;
      sprites[index].changeImage("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("S")) {
      this.cima = false
      player.posY += 10;
      sprites[index].changeImage("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("A")) {
      this.esquerda = true
      player.posX -= 10;
      sprites[index].changeImage("correndo");
      player.ani = "correndo";
      player.update();
    }
    if (keyDown("D")) {
      this.esquerda = false
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

    if (keyWentUp("E")) {
      player.ani = "normal";
      player.update();
    }


  }
  DetectarColisao(i, ind, atacando) {

    if (!player.colisao.isTouching(inimigo.sprite)) {

      //inimigo.sprite.velocityX = 0;
      //inimigo.sprite.velocityY = 0;
    } else {
      if(inimigo.Nvivo == false){
        if (inimigo.posX < player.posX) {
          inimigo.posX += 1;
          inimigo.update()
        } else {
          inimigo.posX -= 1;
          inimigo.update()
        }
        if (inimigo.posY < player.posY) {
          inimigo.posY += 1;
          inimigo.update()
        } else {
          inimigo.posY -= 1;
          inimigo.update()
        }
      }
     
    }

    

   


    if (sprites[i - 1].isTouching(inimigo.sprite)) {
      if (atacando) {
        if(inimigo.vida > 2){
          inimigo.vida -= 100
          inimigo.update()
        } else{
          inimigo.ani = "derrota"
          inimigo.Nvivo = true
          inimigo.update()
         
          player.atacando = true;

          
      inimigo.sprite.changeAnimation("derrotaAni");
      inimigo.sprite.velocityX = 0
      inimigo.sprite.velocityY = 0
      inimigo.ani = "ataque";
      inimigo.update();
      window.location = "ganhou.html";
        }
        if(inimigo.Nvivo == true){
          gameState = 3;
        }

       
      } else {
        if(inimigo.Nvivo == false){
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
  }
  update(gameState) {
    database.ref("/").update({
    gameState:gameState
    });
  }
}