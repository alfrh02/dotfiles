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

let speed = 1;

let up = false;
let down = false;
let left = false;
let right = false;

function setup() {
    createCanvas(400, 400);
    playerX = width / 2;
    playerY = height / 2;
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
    fill(playerColour)
    rect(playerX, playerY, squareSize);

    console.log(up + ", " + down + ", " + left + ", " + right)
    if (up) {
        playerY -= speed;
    }
    if (down) {
        playerY += speed;
    }
    if (left) {
        playerX -= speed;
    }
    if (right) {
        playerX += speed;
    }
    if (playerX > width) {
        playerX = 0;
    } else if (playerX < 0) {
        playerX = width;
    }

    if (playerY > height) {
        playerY = 0;
    } else if (playerY < 0) {
        playerY = height;
    }
}

function keyPressed() {
    if (key === 'W' || key === 'w') {
        up = true;
    } else if (key === 'S' || key === 's') {
        down = true;
    } else if (key === 'A' || key === 'a') {
        left = true;
    } else if (key === 'D' || key === 'd') {
        right = true;
    }
}

function keyReleased() {
    if (key === 'W' || key === 'w') {
        up = false;
    } else if (key === 'S' || key === 's') {
        down = false;
    } else if (key === 'A' || key === 'a') {
        left = false;
    } else if (key === 'D' || key === 'd') {
        right = false;
    }
}