var bullet, wall,thickness;

var speed,weight;

function setup() {
  createCanvas(1000,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

bullet=createSprite(50, 200, 50, 50);
 bullet.velocityX = speed;
 bullet.shapeColor=color(255);

  wall=createSprite(900, 200, thickness,height/2); 
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
   var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thicknessofwall*thicknessofwall*thicknessofwall)
  }

	if(damage>12.43)
	{
		bullet.shapeColor=color(255,0,0);
}

  if(damage<12.43 && damage>3.68)
	{
    	bullet.shapeColor=color(230,230,0);
  }
  
  if(damage>3.68){
   bullet.shapeColor=color(0,255,0);
  }
  drawSprites();
}