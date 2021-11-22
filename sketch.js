var background,penguin,meteor,gameover;
var backgroundImg,penguinImg,meteorImg,gameoverImg;
var meteorGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameState = END;

function preload(){
 penguinImg = loadImage("penguin.png")
 backgroundImg = loadImage("background1.jpg")
 meteorImg = loadImage("meteor.png")
 gameoverImg = loadImage("gameOver.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight) 

 background = createSprite(windowWidth/2,windowHeight/2);
 background.addImage(backgroundImg);
 background.scale = 2;

 penguin = createSprite(windowWidth/2,windowHeight-70);
 penguin.addImage(penguinImg);
 penguin.scale = 0.5;
 penguin.debug = true

 gameover = createSprite(width/2,height/2);
 gameover.addImage(gameoverImg)


 

 meteorGroup = createGroup()
}

function draw() {

    if(gameState === PLAY){

    spawnmeteor();
    penguin.x = World.mouse
    gameover.visible = false
    
    if(meteorGroup.isTouching(penguin)){
        gameState = END
    }  
         
    }

    if(gameState === END){
        gameover.visible = true
    }
    
    

    drawSprites()
 
}
function spawnmeteor(){
    if(frameCount % 250 === 0 ){
    meteor = createSprite(Math.round(random(30,width-50),30, 10, 10));
    meteor.addImage(meteorImg);
    meteor.velocityY = 4  ;
    meteor.lifetime=300;
    meteorGroup.add(meteor) ;
    }
}