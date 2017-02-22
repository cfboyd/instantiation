var boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  for (var i = 0; i <= 8; i++) {
    boxes[i] = (new Box(random(0, width), random(0, height), random(5, 50)));

  }
}

function draw() {
  background(255,255,255,3);
  fill(0);
  stroke(127);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
    boxes[i].move();

  }
}

function Box(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;

  this.move = function() {
    this.x += 1;
    this.y += 0.5;
  }

  this.display = function() {
    rect(this.x, this.y, this.size, this.size);
  }
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(5, 50)));
}

