var conveyorBelt = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 100; i++) {
    conveyorBelt[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
          noStroke();
          fill('#B6032A');
          rect(10+this.x, 20+this.y, 60, 35);
          fill('#FFFDF8');
          ellipse(40+this.x,20+this.y,60, 20);
          rect(10+this.x, 55+this.y, 60, 35);
          ellipse(40+this.x,90+this.y,60, 20);
          fill('#B6032A');
          ellipse(40+this.x,55+this.y,60, 20);
          
         
      },
      move: function() {
        this.x = this.x + random(-2,2);
        this.y = this.y + random(-2,2);
        
      }
      
    }
  }
  
}

function draw() {
  background(204);
  for (var i = 0; i < conveyorBelt.length; i++) {
    conveyorBelt[i].display();
    conveyorBelt[i].move();
   
  }
}

function mousePressed() {
  conveyorBelt.push(0);
}

