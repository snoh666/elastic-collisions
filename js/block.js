class Block {
  constructor(x, y, width, velocity, ctx) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.v = velocity;
    this.ctx = ctx;
  }

  collide(other) {
    if(this.x + this.w < other.x || this.x > other.x + other.w){
      console.log('Not collide');
    } else {
      console.log('Collide');
    }
  }

  update() {
    this.x += this.v;
  }

  draw() {
    this.ctx.strokeRect(this.x, this.y - this.w, this.w, this.w);
  }
}