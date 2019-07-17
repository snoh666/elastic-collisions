class Block {
  constructor(x, y, width, mass, velocity, ctx) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.v = velocity;
    this.m = mass;
    this.ctx = ctx;
  }

  hitWall() {
    return this.x <= 0;
  }

  reverse() {
    this.v *= -1;
  }

  collide(other) {
    return !(this.x + this.w < other.x || this.x > other.x + other.w);
  }

  bounce(other) {
    let sumM = this.m + other.m;
    let newV = (this.m - other.m) / sumM * this.v;
    newV += 2 * other.m / sumM * other.v;
    return newV;
  }

  update() {
    this.x += this.v;
  }

  draw() {
    this.ctx.strokeRect(this.x, this.y - this.w, this.w, this.w);
  }
}