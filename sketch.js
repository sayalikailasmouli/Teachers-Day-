const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
   Back=loadImage("back.png");
   
    
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-50);
    engine = Engine.create();
    world = engine.world;

    //Create Bodies Here

    next=createElement('h1');
    next.html("HAPPY TEACHERS DAY DEAR MUBASHARA MAM !!!");
    next.position(275,30);
    next.style('font-size', '70px');
    next.style('color', '');
    next.style('font-family','tahoma');

    
}


function draw(){
    background(Back);
    Engine.update(engine);
    fill("yellow");
    textSize(30);
    textFont("Imapct");
    text(mouseX+":"+mouseY,mouseX,mouseY);
    drawSprites();
}   

