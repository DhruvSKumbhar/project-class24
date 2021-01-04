class Paper
{
 constructor(x,y)
 {
   var options = 
   {
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2
   }
    this.body = Bodies.circle(x, y,radius ,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

  }
  display()
  {
   Push();
   translate(this.body.position.x,this.body.position.y);
   image(this.image,0,0,this.width,this.height);
   Pop();
  }
 }