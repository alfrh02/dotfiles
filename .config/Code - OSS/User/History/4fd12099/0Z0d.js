/*

tested with https://www.color-blindness.com/coblis-color-blindness-simulator/

*/

let baseColour = [64, 0, 251];

let checkerColour = [0, 64, 254];
let altCheckerColour = [0, 90, 254];

let playerColour = [128, 0, 255];

let foodColour = [255, 3, 0];
let poisonColours = [
    [255, 63, 0],
    [255, 128, 0],
    [255, 1, 126],
    [254, 194, 2],
    []
];
let poisonColour = poisonColours[0];

let foodEaten = true;
let foodX = 0;
let foodY = 0;

let poisonEaten = true;
let poisonX = 0;
let poisonY = 0;

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
                fill(checkerColour);
            } else {
                fill(altCheckerColour);
            }
            rect(x, y, squareSize);
        }
    }

    // draw player
    fill(playerColour)
    rect(playerX, playerY, squareSize);

    // player movement
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

    // player out of bounds
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

    // food
    if (foodEaten) {
        foodX = random(width);
        foodY = random(height);

        foodEaten = false;
    }

    fill(foodColour);
    rect(foodX, foodY, squareSize);

    if (poisonEaten) {
        poisonX = random(width);
        poisonY = random(height);
        poisonColour = poisonColours[floor(random() * 3)]

        poisonEaten = false;
    }

    fill(poisonColour);
    rect(poisonX, poisonY, squareSize);

    if (dist(playerX, playerY, foodX, foodY) < squareSize || dist(playerX, playerY, poisonX, poisonY) < squareSize) {
        foodEaten = true;
        poisonEaten = true;
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