const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber = new Rubber(800, 560, 30);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(720, 560, 30, 30);
    iron = new Iron(630, 560, 30, 30);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();

    
 
}