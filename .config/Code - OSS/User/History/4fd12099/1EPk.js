
let squareSize = 50;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    for (let x = 0; i < width; x += squareSize) {
        for (let y = 0; j < height; y += squareSize) {
            if ((x / squareSize + y / squareSize) % 2 === 0) {
                fill(0);
            } else {
                fill();
            }
            rect(i, j, squareSize, squareSize);
        }
    }
}