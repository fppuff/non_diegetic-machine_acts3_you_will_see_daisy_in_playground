// ** for the animation spirit ****//
let spriteImage;
let animation = [];
let counter = 0; 
const spriteImageFrame = 10; 
// ** for the images of contents ****//
let imgPainting = [];
let imgBinary = [];
let speed = 20;  /// change speed for easy test!!!
let bg; 
let bgX = 0;
let bgY = -5400;   // Put the bg picture beyong the canvas

// let daisy;
// let angle = 0; 

let daisy2D; 
let player; 
let playerX = 150; 
let playerY = 400; 



function preload() {
 // ** for the animation spirit ****//
 spriteImage = loadImage('assets/dog-walking.png'); 
 bg = loadImage('assets/bg_new.png'); 
//  daisy = loadModel('assets/flower_obj.obj')
 daisy2D = loadImage('assets/dasiy.jpg'); 
}

function setup() {
  createCanvas(400,600); 

  for(let i = 0; i < spriteImageFrame; i++ ){ 
    animation[i] = spriteImage.get(i * 200, 0, 200, 200)
 }

}

function draw() {
 image(bg, bgX, bgY, 400, 6000); 
 
 image(animation[counter % animation.length], playerX, playerY, 100, 100)
 counter ++;
 checkMiles();
//  ShowText(text[], postion);
if(bgY < - 600){
 showText();
 gameOn();
}

}

function checkMiles() {
  if( bgY > -4400 && bgY < -4000) {
    textSize(16);
    fill(255);
    text('keep going!', 20, 20);
  } else if (bgY > -3400 && bgY < -3000){
    textSize(16);
    fill(255);
    text('yes, keep going!', 20, 20);
  } else if (bgY > -2400 && bgY < -2000){
    textSize(16);
    fill(255);
    text('yes, keep going!', 20, 20);
  }else if (bgY > -1400 && bgY < -1000){
    textSize(16);
    fill(255);
    text('You are almost there!', 20, 20);
  }else if (bgY > -20 ){
    textSize(16);
    fill(255);
    text('You are here!', 20, 20);
   //  drawDaisy();
    drawDaisy2D();
  }
}

function drawDaisy2D(){
  image(daisy2D, 100, 150, 200, 150); 
}
//?????????? WebGL for 3D model_obj is not shown?????????????
// function drawDaisy(){
//   push()
//   scale(100);
//   fill(125, 0, 250);
//   rotateX(PI);
//   rotateY(angle);
//   model(daisy);
//   pop(); 
//    angle += 0.01;
// }

// ???????????? key continiously pressed?????????
function keyPressed(){
  if(keyCode === UP_ARROW){
    if (playerY > 100) {
      playerY -= speed; 
      console.log('playerY:', playerY)
    } else if (playerY <= 100) {
      bgY += speed;
      console.log('playerY:', playerY)
    } 
  }else if(keyCode === DOWN_ARROW){
    if(playerY < 500) {
    playerY+=10;
    console.log(playerY)
   } else if (playerY >= 500 && playerY < 600){
    console.log( 'playerY:', playerY)

   }
  } else if(keyCode === LEFT_ARROW){
    if(playerX <= 300 && playerX > 0){
    playerX-=10; 
    console.log('playerX:',  playerX);
    }else if(playerX <= 0) {
      console.log('playerX:', playerX);

     }
  } else if(keyCode === RIGHT_ARROW){
    if(playerX < 300 && playerX  >= 0){
      playerX+=10; 
      console.log('playerX:',  playerX);
      }else {
        console.log( playerX);
  
      }
  }
}


// doing diffeernent type of action in different function 
// showText
function showText(){
 
  if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW || keyCode === DOWN_ARROW ) {
    textSize(16);
    fill(255);
    text('going UP!', 50, 520);
  } 
}

function gameOn(){
  if (bgY < -5200){
    textSize(16);
     fill(255);
     text('Just A game of keep going!', 100, 120);
  }
  
}