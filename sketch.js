var ball,database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database(); 
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition);

    /*var ballPosition = database.ref('ball/position');
    ballPosition.on("value",function(data){
        position = data.val(); 
        ball.x = position.x;
        ball.y = position.y;
    })*/
    //console.log(ballPosition)

    var xRef = database.ref('ball/position/x');
    xRef.on("value",function(data){
        x = data.val();
        ball.x = x
        console.log(x);
    })

   // var yRef =*/
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data)
{
   position = data.val();
   console.log(position);  
   ball.x = position.x;
   ball.y = position.y;
}

function writePosition(x,y){
   var ballPosition = database.ref("ball/position");
   ballPosition.set({
       'x' : position.x+x,
       'y' : position.y + y
   })
}
