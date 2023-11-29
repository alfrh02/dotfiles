/*

tested with https://www.color-blindness.com/coblis-color-blindness-simulator/

*/

let baseColour = [64, 0, 251];

let sidebarColour = [0, 64, 254];
let altSidebarColour = [0, 90, 254];
let playerColour = [128, 0, 255];

let squareSize = 50;
let playerX = 0;
let playerY = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    noStroke();

    // draw checkered background
    for (let x = 0; x < width; x += squareSize) {
        for (let y = 0; y < height; y += squareSize) {
            if ((x / squareSize + y / squareSize) % 2 === 0) {
                fill(sidebarColour);
            } else {
                fill(altSidebarColour);
            }
            rect(x, y, squareSize);
        }
    }

    // draw player
    rect(playerX, playerY, squareSize);
}