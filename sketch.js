var boxes = [];

function setup(){
  createCanvas(windowWidth,windowHeight);

}

function draw(){
  if mousePressed(makeBox)
}

function Box(x, y, size){
  this.x = x;
  this.y = y;
  this.size = size;

  this.move = function(){
      this.x += 1;
      this.y += 0.5;
  }

  this.display = function(){
      rect(this.x,this.y,this.size,this.size);
  }
}

function makeBox(){
  var box = new Box(mouseX, mouseY, random(5, 50));
    boxes.push(box);
}
