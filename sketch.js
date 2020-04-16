const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1,box2,box3,box4;
var box5,box6,box7,box8;

var box9,box10,box11,box12;
var box13,box14,box15,box16;

var box17,box18,box19,box20;
var box21,box22,box23,box24;

var box25,box26,box27,box28;
var box29,box30,box31,box32;

var box33,box34,box35,box36;
var box37,box38,box39,box40;

var ground1,ground2,ground3,ground4,ground5,ground6;

function setup() 
{
  var canvas = createCanvas(400,800);

  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(200,790,400,20);
  ground2 = new Ground(200,650,400,20);
  ground3 = new Ground(200,500,400,20);
  ground4 = new Ground(200,350,400,20);
  ground5 = new Ground(200,200,400,20);
  ground6 = new Ground(200,50,400,20);
  
  box1 = new Box(50,760,80,100);
  box2 = new Box(150,760,80,100);
  box3 = new Box(250,760,80,100);
  box4 = new Box(350,760,80,100);
  box5 = new Box(50,685,50,50);
  box6 = new Box(150,685,50,50);
  box7 = new Box(250,685,50,50);
  box8 = new Box(350,685,50,50);

  box9 = new Box1(50,610,80,100);
  box10 = new Box1(150,610,80,100);
  box11 = new Box1(250,610,80,100);
  box12 = new Box1(350,610,80,100);
  box13 = new Box1(50,535,50,50);
  box14 = new Box1(150,535,50,50);
  box15 = new Box1(250,535,50,50);
  box16 = new Box1(350,535,50,50);

  box17 = new Box2(50,460,80,100);
  box18 = new Box2(150,460,80,100);
  box19 = new Box2(250,460,80,100);
  box20 = new Box2(350,460,80,100);
  box21 = new Box2(50,385,50,50);
  box22 = new Box2(150,385,50,50);
  box23 = new Box2(250,385,50,50);
  box24 = new Box2(350,385,50,50);

  box25 = new Box3(50,305,80,100);
  box26 = new Box3(150,305,80,100);
  box27 = new Box3(250,305,80,100);
  box28 = new Box3(350,305,80,100);
  box29 = new Box3(50,230,50,50);
  box30 = new Box3(150,230,50,50);
  box31 = new Box3(250,230,50,50);
  box32 = new Box3(350,230,50,50);

  box33 = new Box4(50,160,80,100);
  box34 = new Box4(150,160,80,100);
  box35 = new Box4(250,160,80,100);
  box36 = new Box4(350,160,80,100);
  box37 = new Box4(50,85,50,50);
  box38 = new Box4(150,85,50,50);
  box39 = new Box4(250,85,50,50);
  box40 = new Box4(350,85,50,50);
}


function draw() 
{
  background("white");  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
}