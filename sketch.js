const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19;
var slingshot, hexagon
var text;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,800,10,120);
    ground2 = new Ground(800,400,10,120);

    box1 = new Box(420,780,20,30);
    box2 = new Box(440,780,20,30);
    box3 = new Box(460,780,20,30);
    box4 = new Box(480,780,20,30);
    box5 = new Box(500,780,20,30);
    box6 = new Box(440,750,20,30);
    box7 = new Box(460,750,20,30);
    box8 = new Box(480,780,20,30);
    box9 = new Box(460,720,20,30);

    box10 = new Box(820,780,20,30);
    box11 = new Box(840.760,20,30);
    box12 = new Box(860,740.20,30);
    box13 = new Box(880,720,20,30);
    box14 = new Box(900,700,20,20);
    box15 = new Box(840.760,20,30);
    box16 = new Box(860,740.20,30);
    box17 = new Box(880,720,20,30);
    box18 = new Box(860,740.20,30);

    slingshot = new SlingShot(hexagon.body,{x:100,y:900});
}

function draw(){
    background("black");
    text("Drag the Hexagon",600,200);
}