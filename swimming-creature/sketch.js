var angle = 0.0;
var offset = 180;
var scalar = 10;
var speed = 0.05;
var x1 = 0;
var x2 = 0;
function setup() {
  createCanvas(540, 540);
}
function draw() {
  background(0);

  y1 = offset + sin(angle) * scalar;
  y2 = offset + sin(angle + 0.3) * scalar;
  y3 = offset + sin(angle + 0.6) * scalar;
  y4 = offset + sin(angle + 0.9) * scalar;
  y5 = offset + sin(angle + 1.2) * scalar;
  y6 = offset + sin(angle + 1.5) * scalar;
  y7 = offset + sin(angle + 1.8) * scalar;
  y8 = offset + sin(angle + 2.1) * scalar;

  function drawEllipses() {
    push();
    fill(250, 200, 200, 80);
    strokeWeight(0);
    ellipse(x1 + 80, y1, 20, 20);
    ellipse(x1 + 90, y2, 20, 20);
    ellipse(x1 + 100, y3, 20, 20);
    ellipse(x1 + 110, y4, 20, 20);
    ellipse(x1 + 120, y5, 20, 20);
    ellipse(x1 + 130, y6, 20, 20);
    ellipse(x1 + 150, y7, 50, 50);
    ellipse(x1 + 180, y8, 80, 80);

    pop();

    //ellipse(x1+240, y5, y8/9, y8/9);
    //ellipse(x1+280, y6, y8/9, y8/9);
    //ellipse(x1+320, y7, y8/9, y8/9);
    //ellipse(x1+360, y8, y8/9, y8/9);
  }

  drawEllipses(0);

  angle += speed;
  if (x1 > width) {
    x1 = -180;
  }
  x1 += 2;
}
