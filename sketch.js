  var path,path_running,power;
  var runner,runner1,power1;
  var coin,bomb,energyDrink;
  var coin1,bomb1,energyDrink1;
  
  function preload(){
    path_running = loadImage("path.png");
    runner = loadAnimation("Runner-1.png","Runner-2.png");
    power = loadImage("power.png");
    bomb = loadImage("bomb.png");
    coin = loadImage("coin.png");
    energyDrink = loadImage("energyDrink.png")
    } 

  function setup(){
    createCanvas(600,600);

    path = createSprite(150,300,300,600);
    path.addImage("running", path_running);
   
    runner1 = createSprite(150,450);
    runner1.addAnimation("runner", runner);
    runner1.scale = 0.2;

    power1= createSprite(500,180);
    power1.addImage("power",power);
    power1.scale = 0.2;

    energyDrink1 = createSprite(60,240);
    energyDrink1.addImage("drink", energyDrink);
    energyDrink1.scale = 0.3;

    coin1 = createSprite(390,280);
    coin1.addImage("coin", coin);
    coin1.scale = 0.5;

    bomb1 = createSprite(230,100);
    bomb1.addImage("blast", bomb);
    bomb1.scale = 0.1;
  }
  function draw(){
    background("blue");

  path.velocityY = 6;

  if(path.y > 300){
    path.y = path.width/2;
  }
  
  drawSprites();

    text(mouseX,50,100);
    text(mouseY,80,100);
  }
  
  