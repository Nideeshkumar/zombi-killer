var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombi,zombiGroup;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombiImage= loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
    player.debug = false
   player.setCollider("rectangle",0,0,300,300)
   zombiGroup=new Group



}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  player.addImage(shooterImg)
 

}
if (zombiGroup.isTouching(player)){
  for(var i=0;i<zombiGroup;i++){
    if (zombiGroup[i].isTouching(player)){
      zombiGroup[i].destroy()
    }
  }
}
enemy();
drawSprites();

}
function enemy(){
  if (frameCount%50===0){

  
zombi= createSprite(random(500,1100),random(100,500),40,40)
zombi.addImage(zombiImage)
zombi.scale=0.2
zombi.velocityX=-2
zombi.debug=true
zombi.setCollider("rectangle",0,0,400,400)
zombi.lifetime=400
zombiGroup.add(zombi)
  }
}