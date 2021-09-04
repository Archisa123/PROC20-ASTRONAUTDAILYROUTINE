var bg;
var sleep,brush,gym,eat,drink,move,bath;
var astronaut;


function preload(){

  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  move=loadAnimation("images/move 2.png","images/move.png","images/move1 2.png","images/move1.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
}

function setup(){    

createCanvas(1000,700)

astronaut=createSprite(500,470)
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;
  

}


function draw() {
  background(bg); 
  


if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);                     
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("M")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocityX=3;
  astronaut.velocityY=3;
  //createEdgeSprites();
  
  /*astronaut.bounceOff(bottomEdge)
  astronaut.bounceOff(topEdge)
  astronaut.bounceOff(rightEdge)
  astronaut.bounceOff(leftEdge)*/
  
}

  drawSprites();
  
}