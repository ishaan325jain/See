var car ,wall ;
var weight , speed;
var deformation;

function setup() {
  createCanvas(1600,400);
  car   =  createSprite(50,200,50,50);
  car.velocityX = 2;

  wall  =  createSprite(1400,200,60,);

  weight  = random(55,90);

  speed   = random(400,1500);

  deformation = 0.5*weight*weight*speed/22500
}

function draw() {
  background(255,255,255); 
  
  if(car.isTouching()){

    if(deformation < 100){
      car.shapeColor(0,255,0);
    }
    
    if (deformation > 100 && deformation < 180){
      car.shapeColor(230,230,0);
    }

    if(deformation > 180){
      car.shapeColor(255,0,0);
    }
  }


  drawSprites();
}