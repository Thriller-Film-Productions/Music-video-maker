class Dot {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.h = floor(random(0, 359));
    this.vel = createVector(0, 0);
    this.color = color("hsl(" + this.h + ", 100%, 50%)");
  }
  show() {
    this.color = color("hsl(" + this.h + ", 100%, 50%)");
    stroke(this.color);
    strokeWeight(4);
    point(this.x, this.y);
    this.x += this.vel.x;
    this.y += this.vel.y;
    if (this.h <= 0) {
      this.h += 360;
    } else if (this.h >= 360) {
      this.h -= 360;
    }
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    }
    if (this.y > height) {
      this.y -= height;
    } else if (this.y < 0) {
      this.y += height;
    }
    if (mouseButton == LEFT && mouseIsPressed) {
      this.dx = mouseX - this.x;
      this.dy = mouseY - this.y;
      this.ds = Math.hypot(this.dx, this.dy);
      this.vel.x += this.dx / this.ds;
      this.vel.y += this.dy / this.ds;
    } else if (mouseButton == RIGHT && mouseIsPressed) {
      this.dx = mouseX - this.x;
      this.dy = mouseY - this.y;
      this.ds = Math.hypot(this.dx, this.dy);
      this.vel.x -= this.dx / this.ds;
      this.vel.y -= this.dy / this.ds;
    }
    this.vel.x *= drag;
    this.vel.y *= drag;
  }
}