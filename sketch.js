var cat
var mouse
var catImage
var mouseImage
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse3.png")
    
    

}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(870,600)
   cat.addAnimation("cat1",catImg1)
   cat.scale=0.2
   mouse=createSprite(200,600)
   mouse.addAnimation("mouse1",mouseImg1)
   mouse.scale=0.08
    //create tom and jerry sprites here

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
 if (cat.x-mouse.x < (cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catstanding",catImg3)
    cat.x=300
    cat.scale=0.2
    cat.changeAnimation("catstanding")
    mouse.addAnimation("mouseSearching",mouseImg3)
    mouse.scale=0.08
    mouse.changeAnimation("mouseSearching")
    
    
 }
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode === LEFT_ARROW){
    cat.velocityX=-3
    cat.addAnimation("catComing",catImg2)
    cat.changeAnimation("catComing")
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.frameDelay = 25;
    
    mouse.changeAnimation("mouseTeasing")
    
    
    
    
 }
 

}
