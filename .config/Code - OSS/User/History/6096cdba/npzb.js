// R1,   G1,   B1   | R2,  G2,  B2   | Rm,  Bm,  Gm

// red-yellow:
// 255,  0,    0,   | 255, 255, 0,   | 255, 200, 0

// red-blue:
// 255,  0,    0,   | 0,   0,   255, | 205, 0,   205

// yellow-blue:
// 255,  255,  0,   | 0,   125, 0,   | 200, 210, 0

// light-red:
// 255,  0,    0,   | 255, 100, 100, | 255, 75,  75

function setup() {
    createCanvas(500, 500);
    noLoop();
  }

  function draw() {
    background(64, 64, 64);

    noStroke();

    // red-yellow
    for (let x = 0; x < 250; x++) {
      for (let y = 0; y < 250; y++) {
        if (x % 2 && y % 2 || x % 2 == 0 && y % 2 == 0) {
          fill(255, 0, 0);
        } else {
          fill(255,255,0);
        }
        rect(x, y, 1);
      }
    }

    // red-blue
    for (let x = 0; x < 250; x++) {
      for (let y = 0; y < 250; y++) {
        if (x % 2 && y % 2 || x % 2 == 0 && y % 2 == 0) {
          fill(255, 0, 0);
        } else {
          fill(0,0,255);
        }
        rect(x + 250, y, 1);
      }
    }

    // yellow-blue
    for (let x = 0; x < 250; x++) {
      for (let y = 0; y < 250; y++) {
        if (x % 2 && y % 2 || x % 2 == 0 && y % 2 == 0) {
          fill(255, 255, 0);
        } else {
          fill(0,127,0);
        }
        rect(x, y + 250, 1);
      }
    }

    // light-red
    for (let x = 0; x < 250; x++) {
      for (let y = 0; y < 250; y++) {
        if (x % 2 && y % 2 || x % 2 == 0 && y % 2 == 0) {
          fill(255, 0, 0);
        } else {
          fill(255, 100, 100);
        }
        rect(x + 250, y + 250, 1);
      }
    }

    //stroke(0);

    // orange
    fill(255, 200, 0);
    rect(125, height / 4, 100, 100);

    // purple
    fill(205,0,205);
    rect(375, height / 4, 100, 100);

    // green
    fill(200, 210, 0);
    rect(125, height - height / 4, 100, 100);

    // light-red
    fill(255, 75, 75);
    rect(375, height - height / 4, 100, 100);
  }