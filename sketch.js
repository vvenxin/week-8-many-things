var bugs = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 100; i++) {
    bugs[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
          noStroke();
            noStroke();
            fill('#000000');
            ellipse(60+this.x,50+this.y,70, 70);
            ellipse(20+this.x,70+this.y,30, 30);
            fill('#B6032A');
            arc(60+this.x, 50+this.y, 80, 80, 0, PI+HALF_PI+QUARTER_PI, PIE);
          
         
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
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].display();
    bugs[i].move();
   
  }
}


