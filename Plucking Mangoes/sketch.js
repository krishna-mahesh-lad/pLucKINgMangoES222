
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,Boy;

var gameState="onRope";

function preload()
{
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Boy=createSprite(250,570,10,10);
	Boy.addImage(boy);
	Boy.scale=0.2;

	ground=new Ground(800,690,1600,50);
	
	tree=new Tree(1000,430,550,550);

	stone=new Stone(150,485,50,50);

	mango=new Fruit(950,250,50,50);
 	mango2=new Fruit(1100,250,50,50);
	mango3=new Fruit(950, 370,50,50);
	mango4=new Fruit(1100,350,50,50);
	mango5=new Fruit(1020,300,50,50);
	mango6=new Fruit(860,360,50,50);
	mango7=new Fruit(1200,370,50,50);
	
	

	

	rope=new Rope(stone.body,{x:150,y:470});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  drawSprites();

  ground.display();
  tree.display();
  stone.display();
  rope.display();	
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  /*if(Istouching(stone, mango)){
	  Matter.Body.setStatic(mango.body, false);
  }

  if(Istouching(stone, mango2)){
	Matter.Body.setStatic(mango2.body, false);
}

if(Istouching(stone, mango3)){
	Matter.Body.setStatic(mango3.body, false);
}

if(Istouching(stone, mango4)){
	Matter.Body.setStatic(mango4.body, false);
}

if(Istouching(stone, mango5)){
	Matter.Body.setStatic(mango5.body, false);
}

if(Istouching(stone, mango6)){
	Matter.Body.setStatic(mango6.body, false);
}

if(Istouching(stone, mango7)){
	Matter.Body.setStatic(mango7.body, false);
}*/



textSize(24);
fill("red");
text("Press space for extra life", 600,500);


}

function mouseDragged(){
    if(gameState!=="launch"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
	rope.fly();
	gameState="launch";
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:485});
		rope.attach(stone.body)
		gameState="onsling";
	}
}

function detectCollision(lmango,lstone){
		
}





function Istouching(object1,object2){
	if(object1.x-object2.x<object2.width/2+object1.width/2 && 
		object2.x-object1.x<object2.width/2+object1.width/2){
			return true;
		}else{
			return false; 
		}

}

