const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground;
var divisionsHeight=300;
var score=0;


var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
  createCanvas(600,1000);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

   ground = new Ground(300,height,800,20);

   for(k=0;k<=width;k=k+80){

    divisions.push(new Division(k,height-divisionsHeight/2,10,divisionsHeight));
    
      }

  for(var j=40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j=15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j=40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  for(var j=15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,475))
  }
   

  
}

function draw() {
  background(0); 
  
  
  
  drawSprites();
  textSize(20);
  fill("white")
  text("PLINKO SCORE : "+score,350,50);

  ground.display();

  if(frameCount%60===0){
    particles.push( new Particle(random(width/2-30, width/2+30 ), 0,10));
    
   
  }
  for(var s = 0; s <particles.length ; s++ ){
    particles[s].display();

    score++
  }


  
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for(var i = 0; i < plinkos.length ; i++ ){
    plinkos[i].display();
  }

  }


