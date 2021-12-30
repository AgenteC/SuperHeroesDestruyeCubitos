const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

function setup(){
createCanvas(1000,600)
engine = Engine.create();//Aquí le indicamos que vamos a empesae a crear motores físicos
world = engine.world;//Esto indica que tambien debemos agregarlo a los motores físicos

fl00r = new floor(500,590,1000,20)
Ball = new strongBall(70,70,70,70)

B0x = new Box(700,389,50,50)
B0x2 = new Box(700,379,50,50)
B0x3 = new Box(700,369,50,50)
B0x4 = new Box(700,359,50,50)
B0x5 = new Box(700,349,50,50)
}
function draw(){
background("LightBlue")

Engine.update(engine)

fl00r.display();
Ball.display();

B0x.display();
B0x2.display();
B0x3.display();
B0x4.display();
B0x5.display();
}