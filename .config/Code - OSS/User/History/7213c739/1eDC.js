let orientation;

function setup() {
  createCanvas(400, 400);
  noFill();
  rectMode(CENTER);
  
  orientation = 0
}

function draw() {
  background(255);
  noFill();
  
  boxW = 100;
  boxH = 100;

  frontFace = [
    [0, 0],
    [boxW, 0],
    [boxW, boxH],
    [0, boxH],
    [0, 0]
  ]
  
  frontFaceDisamb = [
    [0, 0],
    [0, boxH],
    [boxW, boxH],
  ]
  
  backFace = [
    [boxW/4, -boxH/4],
    [boxW/4 + boxW, -boxH/4],
    [boxW/4 + boxW, -boxH/4 + boxH],
    [boxW/4, -boxH/4 + boxH],
    [boxW/4, -boxH/4]
  ]
  
  backFaceDisamb = [
    [boxW/4, -boxH/4],
    [boxW/4 + boxW, -boxH/4],
    [boxW/4 + boxW, -boxH/4 + boxH],
  ]
  
  //------------------------------------------------------
    
  push();
    translate(100, 100);

    if (orientation == 1) {
      drawVerts(frontFaceDisamb)
    } else {
      line(boxW, 0, boxW + boxW/4, -boxH/4);
      drawVerts(frontFace);
    }

    if (orientation == -1) {
      drawVerts(backFaceDisamb)
    } else {
      line(0, boxH, boxW/4, -boxH/4 + boxH);
      drawVerts(backFace);
    }
  
    line(0, 0, boxW/4, -boxH/4);
    line(boxW, boxH, boxW/4 + boxW, -boxH/4 + boxH);
  pop();
}

function drawVerts(arr) {
  beginShape();
    for (let i = 0; i < arr.length; i++) {
      vertex(arr[i][0], arr[i][1]);
    }
  endShape();
}

function keyPressed(event) {  
  if (event.keyCode == 39) {
    orientation++;
  }
  
  if (event.keyCode == 37) {
    orientation--;
  }
  
  // check if out of bounds
  if (orientation < -1) {
    orientation = -1;
  } else if (orientation > 1) {
    orientation = 1;
  }
  
  print(orientation);
}