const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boyImage;
var ground1, tree1,mango1,mango2,mango3,mango4,mango5,chain1;
var stone1;
function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(600,675,1200,20);

	
	
  tree1 = new tree(954,395);

	
	mango1 = new mango(875,160,30);	
	mango2 = new mango(955,155,30);
	mango3 = new mango(1020,140,20);	
	mango4 = new mango(847,230,20);
	mango5 = new mango(915,210,20);
	mango6 = new mango(958,200,25);			
	mango7 = new mango(978,235,35);	
	mango8 = new mango(800,295,40);
	mango9 = new mango(865,300,40);
	mango10 = new mango(1100,250,30);
	mango11 = new mango(1060,300,40);	
	mango12 = new mango(1170,350,35);
	mango13 = new mango(900,320,40);
	mango14 = new mango(950,300,25);	
	mango15 = new mango(760,310,40);	
	mango16 = new mango(1100,330,25);	
	mango17 = new mango(1040,325,30);	
	mango18 = new mango(840,300,30);	
	mango19 = new mango(1050,235,40);	
	mango20 = new mango(955,270,30);

  stone1 = new stone(190,570,30);
	

	launcher1 = new launcher(stone1.body,{x:190,y:570});

	Engine.run(engine);
  
}


function draw() {
 
  background(255);

  textSize(25);
  text("Press Space to get a Second Chance to Play!!",50,50);

  
  //display static image of boy
  imageMode(CENTER);
  image(boyImage,250,615,190,175);

  ground1.display();
  
  launcher1.display();
  
  tree1.display();

  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  stone1.display();
  
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
  detectCollision(stone1,mango11);
  detectCollision(stone1,mango12);
  detectCollision(stone1,mango13);
  detectCollision(stone1,mango14);
  detectCollision(stone1,mango15);
  detectCollision(stone1,mango16);
  detectCollision(stone1,mango17);
  detectCollision(stone1,mango18);
  detectCollision(stone1,mango19);
  detectCollision(stone1,mango20);

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher1.fly();
}

function detectCollision(stoneobj,mangoobj){
	mangopos=mangoobj.body.position;
	stonepos=stoneobj.body.position;

	var distance=dist(stonepos.x, stonepos.y, mangopos.x, mangopos.y);

	if(distance<=stoneobj.r+mangoobj.r)
    {
      
  	  Matter.Body.setStatic(mangoobj.body,false);
    }
}

function keyPressed(){
	if(keyCode===32){ //space key
		//reset stone to its starting point
		Matter.Body.setPosition(stone1.body,{x:190,y:570});
		launcher1.attach(stone1.body); //attach bodyA to constraint in launcher		
	}
}



