class Inimigo {
  constructor() {
    this.vida = 100;
    if (corCenario == "lightgray") {
      img = cavaleirofanImg;
    }
    this.sprite = createSprite(100, 100, 100, 100);
    this.sprite.addImage("normal", img);
    this.sprite.scale = 2;
  }

  mover() {
    this.sprite.x = -10;
    this.sprite.y = 10;
  } 
}
