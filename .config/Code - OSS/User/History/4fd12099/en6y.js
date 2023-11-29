function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(255);

    // Set the size of each square
    let squareSize = 50;

    // Draw the checkered grid
    for (let i = 0; i < width; i += squareSize) {
      for (let j = 0; j < height; j += squareSize) {
        if ((i / squareSize + j / squareSize) % 2 === 0) {
          fill(0);
        } else {
          fill(255);
        }
        rect(i, j, squareSize, squareSize);
      }
    }
  }