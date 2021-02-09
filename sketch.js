var fr,mr


function setup() {
  createCanvas(800,400);
 fr=createSprite(400, 200, 50, 50);
 fr.shapeColor = "green";
 mr=createSprite(400, 200, 70, 30);
 mr.shapeColor = "green";
}

function draw() {
  background("black");  
  d=mr.x-fr.x;
  console.log(d);     //distance
  mr.x=mouseX;
  mr.y=mouseY;
  if(mr.x-fr.x < fr.width/2 + mr.width/2 && fr.x-mr.x < fr.width/2 + mr.width/2 && mr.y-fr.y < fr.height/2 + mr.height/2 && fr.y-mr.y < fr.height/2 + mr.height/2){
    mr.shapeColor = "blue";
    fr.shapeColor = "blue";
  }
  else{
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }

  drawSprites();
}