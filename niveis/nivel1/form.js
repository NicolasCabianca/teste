class Form {
  constructor() {
    this.cliked1 = false;
    this.cliked2 = false;
    this.cliked3 = false;
    this.cliked4 = false;
    //this.cliked5 = false;

    this.carreg = createButton("");
    this.carreg.class("loading");
    this.carreg.position(width / 2 - 100, height / 2 - 100);

    this.intro = createButton("");
    this.intro.class("sumir");
    this.intro.position(width / 5 - 100, height / 5 - 100);

    this.LUP = createElement("h2");

    this.button1 = createButton("");
    this.button2 = createButton("");
    this.button3 = createButton("");

    this.button4 = createButton("");

    this.buttonReset = createButton("RESETAR");
    this.buttonReset.class("sumir");
    this.inputSenhaDEV = createInput("");
    this.inputSenhaDEV.class("sumir");
    this.devMode = false;
    //this.button5 = createButton("");

    this.logo = createButton("");
    this.titulo = createButton("");

    this.esterEgg1 = createButton("");
    this.esterEgg2 = createButton("");
    this.esterEgg3 = createButton("");
    this.esterEgg4 = createButton("");

    //this.esterEgg1.hide()
    //this.esterEgg2.hide()
    //this.esterEgg3.hide()
    //this.esterEgg4.hide()

    this.input = createInput("");

    this.buttonJogar = createButton("");

    this.element = createElement("h2");
    this.element1 = createElement("h2");
    this.element2 = createElement("h2");
    this.element3 = createElement("h2");
    this.element4 = createElement("h2");

    this.n = createElement("h2");
    this.offs = [false, false, false, false];

    this.button1.class("sumir");
    this.button2.class("sumir");
    this.button3.class("sumir");
    this.button4.class("sumir");

    this.esterEgg1.class("sumir");
    this.esterEgg2.class("sumir");
    this.esterEgg3.class("sumir");
    this.esterEgg4.class("sumir");

    this.logo.class("sumir");
    this.input.class("sumir");
    this.buttonJogar.class("sumir");
    this.video = createButton("");
    this.video.class("sumir");
    this.video.position(0, 0);
  }

  getCount() {
    database.ref("playerCount").on("value", (data) => {
      if (desceu != "sim") {
        this.definirEstilo();
        this.element.html("");
        this.element3.html("tonistico,miguelistico:)");
        this.element4.html("jão, fabri:)");
        this.LUP.html("Update Log:");
        this.buttonReset.class("RESETAR");
      }
      this.pegarEscolhidos();
      playerCount = data.val();
      if (playerCount >= 1 && allPlayers != undefined) {
        todos = Object.values(allPlayers);
        for (var i = 0; i < playerCount; i++) {
          var jogador = new Player(
            todos[i].personagem,
            todos[i].nome,
            todos[i].indice,
            0
          );
          listaJogadores.push(jogador);
        }
      }
      if (playerCount < 4) {
        this.n.html(
          "Faltam " +
            (4 - playerCount) +
            " jogadores para a partida começar....."
        );
      } else {
        this.n.html("");
        this.element1.html("");
      }
    });
    this.carreg.class("sumir");
  }

  pegarEscolhidos() {
    database.ref("players").on("value", (data) => {
      console.log("Vendo os players que já foram escolhidos");
      this.offs = [];
      allPlayers = data.val();
      console.log(allPlayers);
      for (var plr in allPlayers) {

        if (allPlayers[plr].personagem == 1) {
          this.button1.class("off1");
          this.offs[0] = true;
        }
        if (allPlayers[plr].personagem == 2) {
          this.button2.class("off2");
          this.offs[1] = true;
        }
        if (allPlayers[plr].personagem == 3) {
          this.button3.class("off3");
          this.offs[2] = true;
        }
        if (allPlayers[plr].personagem == 4) {
          this.button4.class("off4");
          this.offs[3] = true;
        }
      }
    });
  }

  definePosicao() {
    this.button1.position(width / 2 - 300, height / 2);
    this.button2.position(width / 2 - 150, height / 2);
    this.button3.position(width / 2, height / 2);
    this.button4.position(width / 2 + 150, height / 2);

    this.buttonReset.position(width / 5 - 260, height / 1.2);
    // this.button5.position(width/1.2, 500)
    this.input.position(width / 2.3, height / 1.3);
    this.buttonJogar.position(width / 2.1, height / 1.6);
    this.element.position(width / 4.6, height / 4.5);
    this.n.position(width / 8, 100);
    this.element1.position(width / 8, 200);
    this.element2.position(width / 2, 100);
    this.element3.position(width / 1.2, 500);
    this.element4.position(width / 1.1, 280);
    this.LUP.position(width / 5 - 260, 5);
    this.esterEgg1.position(width / 1.2, 200);
    this.esterEgg2.position(width / 1.2, 400);
    this.esterEgg3.position(width / 1.1, 200);
    this.esterEgg4.position(width / 1.1, 400);
    this.logo.position(width / 2.3, 40);
    this.titulo.position(width / 1.9, 40);
    this.inputSenhaDEV.position(width / 5 - 260, height / 1.2 + 25);
  }
  definirEstilo() {
    this.element.class("escolha");
    this.element1.class("");
    this.element2.class("");
    this.element3.class("");
    this.element4.class("");
    this.LUP.class("");
    this.button1.class("button1");
    this.button2.class("button2");
    this.button3.class("button3");
    this.button4.class("button4");
    this.buttonReset.class("");
    this.input.class("customInput");
    this.buttonJogar.class("play");
    this.esterEgg1.class("esterEgg1");
    this.esterEgg2.class("esterEgg2");
    this.esterEgg3.class("esterEgg3");
    this.esterEgg4.class("esterEgg4");
    this.logo.class("logo");
    this.titulo.class("titulo");
  }
  definirClique() {
    this.button1.mouseClicked(() => {
      if (!this.offs[0]) {
        if (this.cliked1) {
          this.cliked1 = false;
          this.button1.class("button1");
        } else {
          this.cliked1 = true;
          this.button1.class("selected1");

          p = 1;

          if (!this.offs[1]) {
            this.cliked2 = false;
            this.button2.class("button2");
          }
          if (!this.offs[2]) {
            this.cliked3 = false;
            this.button3.class("button3");
          }
          if (!this.offs[3]) {
            this.cliked4 = false;
            this.button4.class("button4");
          }
        }
      }
    });
    this.button2.mouseClicked(() => {
      if (!this.offs[1]) {
        if (this.cliked2) {
          this.cliked2 = false;
          this.button2.class("button2");
        } else {
          this.cliked2 = true;
          this.button2.class("selected2");

          p = 2;

          if (!this.offs[0]) {
            this.cliked1 = false;
            this.button1.class("button1");
          }
          if (!this.offs[2]) {
            this.cliked3 = false;
            this.button3.class("button3");
          }
          if (!this.offs[3]) {
            this.cliked4 = false;
            this.button4.class("button4");
          }
        }
      }
    });
    this.button3.mouseClicked(() => {
      if (!this.offs[2]) {
        if (this.cliked3) {
          this.cliked3 = false;
          this.button3.class("button3");
        } else {
          this.cliked3 = true;
          this.button3.class("selected3");

          p = 3;

          if (!this.offs[1]) {
            this.cliked2 = false;
            this.button2.class("button2");
          }
          if (!this.offs[0]) {
            this.cliked1 = false;
            this.button1.class("button1");
          }
          if (!this.offs[3]) {
            this.cliked4 = false;
            this.button4.class("button4");
          }
        }
      }
    });
    this.button4.mouseClicked(() => {
      if (!this.offs[3]) {
        if (this.cliked4) {
          this.cliked4 = false;
          this.button4.class("button4");
        } else {
          this.cliked4 = true;
          this.button4.class("selected4");

          p = 4;

          if (!this.offs[1]) {
            this.cliked2 = false;
            this.button2.class("button2");
          }
          if (!this.offs[2]) {
            this.cliked3 = false;
            this.button3.class("button3");
          }
          if (!this.offs[0]) {
            this.cliked1 = false;
            this.button1.class("button1");
          }
        }
      }
    });
    this.buttonReset.mouseClicked(() => {
      if (this.devMode) {
        this.devMode = false;
        this.inputSenhaDEV.class("sumir");
        var senha = this.inputSenhaDEV.value();
        if (senha == "984") {
          this.esconder();
          this.buttonReset.hide();
          localStorage.setItem("desceu2", "");
          localStorage.setItem("player", "");
          localStorage.setItem("nome", "");
          localStorage.setItem("p", "");
          localStorage.setItem("indice", "");
          //para teste
          //botão pra reiniciar
          database.ref("/").set({
            playerCount: 0,
            inimigos: {
              ogroDeFogo: {
                vida: 1000,
                posX: 1450,
                posY: 230,
                atacando: false,
                ani: "normal",
              },
            },
          });
          window.location.reload();
        }
      } else {
        this.devMode = true;
        this.inputSenhaDEV.class("customInput");
      }
    });
    this.buttonJogar.mouseClicked(() => {
      this.esconder();
      this.buttonJogar.hide();
    });
  }
  esconder() {
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.buttonReset;
    this.input.hide();
    this.buttonJogar.hide();
    this.element.hide();
    this.element2.hide();
    this.element3.hide();
    this.esterEgg1.hide();
    this.element4.hide();
    this.esterEgg2.hide();
    this.esterEgg3.hide();
    this.esterEgg4.hide();
    this.logo.hide();
    this.titulo.hide();
    this.LUP.hide();

    if (this.input.value() == "") {
      swal({ title: "Por favor", text: "insira seu nome" }, (isConfirm) => {
        if (isConfirm) {
          window.location.reload();
        }
      });
    } else {
      playerCount++;
      if (playerCount <= 4) {
        localStorage.setItem("desceu2", "");
        localStorage.setItem("player", "");
        localStorage.setItem("nome", "");
        localStorage.setItem("p", "");
        localStorage.setItem("indice", "");
        localStorage.setItem("moedas", "");

        player = new Player(p, this.input.value(), playerCount, 0);
        player.addPlayer();

        game.updateCount(playerCount);
      }
      if (playerCount == 4) {
        this.element1.hide();
        this.n.hide();
      }

      if (playerCount > 4) {
        swal(
          { title: "Server cheio!", text: "Espere a partida terminar" },
          (isConfirm) => {
            if (isConfirm) {
              localStorage.setItem("desceu2", "");
              localStorage.setItem("player", "");
              localStorage.setItem("nome", "");
              localStorage.setItem("p", "");
              localStorage.setItem("indice", "");
              //para teste
              //botão pra reiniciar
              database.ref("/").set({ playerCount: 0 });
              window.location.reload();
            }
          }
        );
      }
    }
  }
  mostrar() {
    this.definePosicao();

    this.definirClique();
  }
  mostrarVideo(){
    
    this.video.class("video");
    setTimeout(() => {
      this.video.class("sumir");
    }, 3000);
  }
}
