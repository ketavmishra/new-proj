var ball;
var brick;
var platform;
var ballimg;

function setup(){
    createCanvas(800,500);
    ball= createSprite(400,20);
    ball.addImage(ballimg);
}
function preload(){
 ballimg=   loadImage("images/redball.png");
}

function draw (){
background("black");

drawSprites();
}
