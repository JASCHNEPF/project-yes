var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["be3f6833-c6db-444d-bbc8-6b7f5bb6a605"],"propsByKey":{"be3f6833-c6db-444d-bbc8-6b7f5bb6a605":{"name":"eightball_1","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"zEJ9Q0SFj2gG4oER60VgYyNjtQ8mzVqk","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/be3f6833-c6db-444d-bbc8-6b7f5bb6a605.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(200,200,20,20 );
var paddle = createSprite(200, 300, 60, 20);
ball.setAnimation("eightball_1");
ball.scale=0.05



var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

var score=0;





function draw() {
   background("white")
  
  
  fill("blue")
  textSize(20)
  text("score="+score,225,25)
  
  
  
  
if (keyDown(ENTER)) {
    
ball.velocityX=5
ball.velocityY=5
    
  }
    
   if (gamestate=serve) {
      
    }
      
      
    if (gamestate=play) {
      
    }
    
    
    if () {
      
    }
    
    
    
    
    
    
    
    
    
    
    
    if (ball.isTouching(box1)) {
       ball.bounceOff(box1);
      box1.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box2)) {
       ball.bounceOff(box2);
      box2.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box3)) {
       ball.bounceOff(box3);
      box3.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box4)) {
       ball.bounceOff(box4);
      box4.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box5)) {
       ball.bounceOff(box5);
      box5.destroy();
       score=score+1;
    }
    
    if (ball.isTouching(box6)) {
       ball.bounceOff(box6);
      box6.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box7)) {
       ball.bounceOff(box7);
      box7.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box8)) {
       ball.bounceOff(box8);
      box8.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box9)) {
       ball.bounceOff(box9);
      box9.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box10)) {
       ball.bounceOff(box10);
      box10.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box11)) {
       ball.bounceOff(box11);
      box11.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box12)) {
       ball.bounceOff(box12);
      box12.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box13)) {
       ball.bounceOff(box13);
      box13.destroy();
      score=score+1;
    }
    
    if (ball.isTouching(box14)) {
       ball.bounceOff(box14);
      box14.destroy()
       score=score+1;
    }
    
    if (ball.isTouching(box15)) {
       ball.bounceOff(box15);
      box15.destroy()
       score=score+1;
    }
    
    if (ball.isTouching(box16)) {
      ball.bounceOff(box16);
      box16.destroy()
       score=score+1;
    }
    
    
    
 paddle.x=World.mouseX

     
createEdgeSprites()
  
ball.bounceOff(topEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(paddle);
  
   drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
