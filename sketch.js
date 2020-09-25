const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,division,division2,division2,division3,division4;

var divisions = [];
var plinkos = [];
var plinkos2 = [];
var plinkos3 = [];
var plinkos4 = [];
var particles = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,height-10,width,10);

  Engine.run(engine);
}

function draw() {
  background(0);  

  for (var k = 0; k <=width; k = k + 78.8){
    divisions.push(new Ground(k,height-310,7,300))
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for (var l = 20; l <= width; l = l + 50){
    plinkos2.push(new Plinko(l,175));
  }

  for (var m = 40; m <= width; m = m + 50){
    plinkos3.push(new Plinko(m,275));
  }

  for (var n = 20; n <= width; n = n + 50){
    plinkos4.push(new Plinko(n,375));
  }

  //displaying the ground
  ground.display();

  //displaying the different divisions using for loop
  for (var p = 0; p < divisions.length; p++){
    divisions[p].display();
  }

  //displaying the different plinkos using for loop
  for (var q = 0; q < divisions.length; q++){
    plinkos[q].display();
  }
  
  for (var s = 0; s < divisions.length; s++){
    plinkos2[s].display();
  }
  

  for (var t = 0; t < divisions.length; t++){
    plinkos3[t].display();
  }

  for (var v = 0; v < divisions.length; v++){
    plinkos4[v].display();
  }

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for (var w = 0; w < particles.length; w++){
    particles[w].display();
  }

  drawSprites();
}