var ball;
var position,database;

function setup() {

  database= firebase.database();
  createCanvas(600,600);
  ball= createSprite(600,400,20,20);
  ball.shapeColor="red";

var ballPosition= database.ref("ball/position");
ballPosition.on("value",readPosition,showError)
}

function draw() {
 background("white");

 if (keyDown(LEFT_ARROW)){
  writePosition(-1,0)
 }
 if (keyDown(RIGHT_ARROW)){
  writePosition(1,0)//x,y
 }
 if (keyDown(UP_ARROW)){
  writePosition(0,-1)
 }
 if (keyDown(DOWN_ARROW)){
  writePosition(0,1)//x,y
 }


drawSprites();

}

function writePosition(x,y){
  database.ref("ball/position").set({
    'x': position.x+x,
    'y': position.y+y
  })

}

function readPosition(data){
position = data.val()
ball.x = position.x
ball.y = position.y 
  
}

function showError(){
  console.log("Error");
}
