var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1100,600);

    //create 4 different surfaces
  block1 = createSprite(100,580,200,30);
  block1.shapeColor = "red"
  
  block2 = createSprite(400,580,200,30);
  block2.shapeColor = "blue"
  
  block3 = createSprite(700,580,200,30);
  block3.shapeColor = "pink"
  
  block4 = createSprite(1000,580,200,30);
  block4.shapeColor = "green"
  
  //create box sprite and give velocity
  ball = createSprite(500,100,40,40)
  ball.velocityX=10
  ball.velocityY=10

  
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  
  edges =  createEdgeSprites();

 if (block1.isTouching(ball)){
     ball.shapeColor="red"
 }
 if (block2.isTouching(ball)){
    ball.shapeColor="blue"
}
if (block3.isTouching(ball)){
    ball.shapeColor="pink"
}
if (block4.isTouching(ball)){
    ball.shapeColor="green"
}
   
 ball.bounceOff(edges)
 ball.bounceOff(block1)
 ball.bounceOff(block2)
 ball.bounceOff(block3)
 ball.bounceOff(block4)


drawSprites();
    //add condition to check if box touching surface and make it box
}
