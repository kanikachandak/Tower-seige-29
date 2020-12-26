const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var stand,stand1;
var polygon, slingshot1;

function setup()
{
    var canvas= createCanvas(1200,700);
    
    engine= Engine.create();
    world= engine.world;

    ground= new Ground(600,680,1200,30);
    stand= new Ground(600,600,300,20); //x: 450-750  y: 590-610

    b1=new Box(480,570); //y: till 550
    b2=new Box(525,570);
    b3=new Box(570,570);
    b4=new Box(615,570);
    b5=new Box(660,570);
    b6=new Box(705,570);
   
    b7=new Box(500,527); // y: till 507
    b8=new Box(545,527);
    b9=new Box(590,527);
    b10=new Box(635,527);
    b11=new Box(680,527);

    b12=new Box(530,484);// y: till 464
    b13=new Box(575,484);
    b14=new Box(620,484);
    b15=new Box(665,484);
    
    b16=new Box(550,441); //y: till 421
    b17=new Box(595,441);
    b18=new Box(640,441);

    b19=new Box(570,398); //y: till 378
    b20=new Box(615,398);

    b21=new Box(590,355);

    polygon=new Polygon();

    slingshot1= new Slingshot(polygon.body,{x:70, y:470});
}

function draw()
{
    background(0);
    Engine.update(engine);
    ground.display();
    stand.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    
    polygon.display();
    slingshot1.display();
} 
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}
function mouseReleased()
{
    slingshot1.fly();
}
