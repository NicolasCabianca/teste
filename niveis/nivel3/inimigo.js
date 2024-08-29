class Inimigo {
    constructor() {
      this.vida = 1000;
      
      this.sprite = createSprite(1450, 230, 100, 100);
      this.sprite.addImage("normal", ogrodfogImg);
      this.sprite.addImage("ataque", ogrodfogAtaqueImg);
      this.sprite.addImage("derrota", ogrodfMImg);
      this.sprite.addAnimation("derrotaAni",ogroAtaque)

      this.sprite.scale = 4.3;
      this.ani = "normal"
      this.Nvivo = false
       

      this.atacando = false;

    this.posX = 1450;
    this.posY = 230;
    }  
  
    update(){
      database.ref("inimigos/ogroDeFogo").update({
        atacando: this.atacando,
        vida: this.vida,
        posX: this.posX,
        posY: this.posY,
         ani: this.ani,
      })
    }
    lerBancoDados(){
      database.ref("inimigos/ogroDeFogo").on("value",(data)=>{
        dadosInimigos = data.val()
        console.log(dadosInimigos)
        this.vida = dadosInimigos.vida
        this.posX = dadosInimigos.posX
        this.posY = dadosInimigos.posY
        this.atacando = dadosInimigos.atacando
        this.ani = dadosInimigos.ani

       
      })
    }
  }
  