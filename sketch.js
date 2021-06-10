var canvas, backgroundImage;

var gameState = 0;
var finishedPlayers = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var oilSpill, oilSpill_img; 
var skidSound;
var obstacles;
var passedFinished;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var gold_img, silver_img, bronze_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  oilSpill_img = loadImage("../images/f1.png");
  skidSound = loadSound("../sound/sliding.mp3");
  gold_img = loadImage("../images/gold.png")
  silver_img = loadImage("../images/silver.png")
  bronze_img = loadImage("../images/bronze.png")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();

  obstacles = createGroup();

  for(var i=0; i<5; i++){
  var oilX = random(200,950);
  var oilY = random(-height*4, height-300);
  oilSpill = createSprite(oilX,oilY);
  oilSpill.addImage("oil", oilSpill_img);
  obstacles.add(oilSpill);
  }
}

function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers === 0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (finishedPlayers === 4) {
     game.update(2);
     console.log("End");
   }
   if(gameState === 2 && finishedPlayers === 4){
     game.displayRanks();
   }
  }
  

 
  
