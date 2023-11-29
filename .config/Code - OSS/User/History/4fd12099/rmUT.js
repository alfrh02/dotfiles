/*

tested with https://www.color-blindness.com/coblis-color-blindness-simulator/

*/

let baseColour = [64, 0, 251];
let sidebarColour = [0, 64, 254];
let altSidebarColour = [0, 90, 254];
let selectedColour = [128, 0, 255];

let squareSize = 50;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    for (let x = 0; x < width; x += squareSize) {
        for (let y = 0; y < height; y += squareSize) {
            if ((x / squareSize + y / squareSize) % 2 === 0) {
                fill(0);
            } else {
                fill();
            }
            rect(x, y, squareSize, squareSize);
        }
    }
}