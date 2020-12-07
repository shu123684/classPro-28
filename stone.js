class Stone{
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':100,
          'density':3,
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = 30;
      this.height = 30;
      this.image = loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.position;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height)
        pop();
    }
  };