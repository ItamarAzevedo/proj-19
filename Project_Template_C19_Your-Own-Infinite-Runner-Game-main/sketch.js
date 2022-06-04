var chao,boy,obstacle,diamante;
var chaoImg,boyImg,obstacleImg,diamanteImg;
var treasureCollection = 0;
var obstacleG,diamanteG;

//Estados do Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  chaoImg = loadImage("chao.jpg");
  boyImg = loadImage("boy.jpeg");
  obstacleImg = loadImage("obstaculo.jpg");
  diamanteImg = loadImage("diamante.webp");
  endImg =loadImage("fimdeJogo.png");
}

function setup(){
  
  createCanvas(400,600);

chao=createSprite(200,200);
chao.addImage(chaoImg);
chao.velocityY = 4;


boy = createSprite(70,580,20,20);
boy.addImage(boyImg);
boy.scale=0.08;
  
  
obstacleG=new Group();
diamanteG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  

  if(chao.y > 400 ){
    chao.y = height/2;
  }
  
    createObstacle();
    createDiamante();


    }else if (diamanteG.isTouching(boy)) {
      diamanteG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else{
      if(obstacleGroup.isTouching(boy)) {
        gameState=END;
        

         boy.addImage(endImg);


        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        
        obstacleG.destroyEach();
        diamanteG.destroyEach();
        
        
         obstacleG.setVelocityYEach(0);
         diamanteG.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ treasureCollection,10,30);
  }


function createCash() {
  if (World.frameCount % 200 == 0) {
  var obstacle = createSprite(Math.round(random(50, 350),40, 10, 10));
  obstacle.addImage(obstacleImg);
  obstacle.scale=0.12;
  obstacle.velocityY = 3;
  obstacle.lifetime = 150;
  obstacleG.add(obstacle);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamante = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamante.addImage(diamanteImg);
  diamante.scale=0.03;
  diamante.velocityY = 3;
  diamante.lifetime = 150;
  diamanteG.add(diamante);
}
}
