var bullet,wall,speed,weight,thickness,damage
function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 60, 20);
  wall=createSprite(1200,200,60,200);
  bullet.shapeColor="Grey";
  wall.shapeColor=80,80,80;
  speed=random(231,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall.width=thickness;
  damage=(0.5*speed*speed*weight)/(thickness*thickness*thickness);
}

function draw() {
  background(0);  
  drawSprites();
  bullet.velocityX=speed;
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    if(damage<10){
      wall.shapeColor="green";
    }
    else{
      wall.shapeColor="red";
    }
  }
}
function hasCollided(a,b){
  if(a.x-b.x<a.width/2+b.width/2){
    return true;
  }
}
/*var bullet,wall
var speed,weight,damage
function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  wall=createSprite(1500,200,60,800);
  wall.shapeColor(80,80,80);
  damage=(speed*weight*0.5*speed)/22500;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
  text(damage,100,300);
  }
} */