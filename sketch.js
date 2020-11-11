

var bowSprite, 
    arrowSprite,
    greenBalloonSprite,
    redBalloonSprite,
    pinkBalloonSprite,
    blueBalloonSprite,
    backgroundSprite;

var bowImage, 
    arrowImage, 
    greenBalloonImage,
    redBalloonImage,
    pinkBalloonImage,
    blueBalloonImage,
    backgroundImage;


function preload(){
 //load your images here 
  
  // load ballon images
    greenBalloonImage = loadImage( "green_balloon0.png");
  redBalloonImage = loadImage( "red_balloon0.png");
   blueBalloonImage = loadImage( "blue_balloon0.png");
  pinkBalloonImage = loadImage( "pink_balloon0.png");
  
  
  // load bow and arrow image
  bowImage = loadImage( "bow0.png");
  arrowImage = loadImage( "arrow0.png");
  
  // load background image
  backgroundImage = loadImage( "background0.png");
  
}

function setup() {
  createCanvas(600, 400);
  
  
  
  //creating background
  backgroundSprite = createSprite(300,300,600,400);
  backgroundSprite.addImage(backgroundImage);
  backgroundSprite.scale = 2.5;
  //console.log(backgroundSprite.width);
  
    // creating bow to shoot arrow
  bowSprite = createSprite(480,220,20,50);
  bowSprite.addImage(bowImage); 
  bowSprite.scale = 1.0;
    
  // create arrow 
//  createArrow () ;
  
  //add code here
  // create RED balloon sprites
  for (var num= 60; num < 390; num=num+60){
    //console.log("HERE 3");
    redBallSprite= createSprite (50,num,1,1);
    redBallSprite.addImage(redBalloonImage);
    redBallSprite.scale=0.1;
  }
  
  // create GREEN balloon sprites
  for (var num= 100; num < 390; num=num+60){
    //console.log("HERE 3");
    greenBallSprite= createSprite (100,num,1,1);
    greenBallSprite.addImage(greenBalloonImage);
    greenBallSprite.scale=0.1;
  }
  
   // create Blue balloon sprites
  for (var num= 130; num < 350; num=num+60){
    
    blueBallSprite= createSprite (150,num,1,1);
    blueBallSprite.addImage(blueBalloonImage);
    blueBallSprite.scale=0.1;
  }
  
   // create pink balloon sprites
  for (var num= 180; num < 250; num=num+60){
    
    pinkBallSprite= createSprite (200,num,1,1);
    pinkBallSprite.addImage(pinkBalloonImage);
    pinkBallSprite.scale=1.2;
  }
  
}

function draw() {
  // clear screen

  // moving ground
  backgroundSprite.velocityX=-3;
  
   if (backgroundSprite.x < 0){
      backgroundSprite.x = backgroundSprite.width/2;
     //console.log(backgroundSprite.width);
    }
  
  bowSprite.y=mouseY;
  if (keyDown("space")) {
    tempArrow = createAndShootArrow ();
  }
  //arrowSprite.y=mouseY;
  //add code here
  drawSprites();
  
}

function createAndShootArrow () {
 
  arrowSprite = createSprite(500,220,20,50);
  arrowSprite.addImage(arrowImage); 
  arrowSprite.scale = 0.3;
  arrowSprite.velocityX=-6;
  arrowSprite.y=bowSprite.y;
  return arrowSprite;

}