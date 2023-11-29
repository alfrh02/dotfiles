/*

tested with https://www.color-blindness.com/coblis-color-blindness-simulator/

*/

let baseColour = [64, 0, 251];
let sidebarColour = [0, 64, 254];
let altSidebarColour = [0, 90, 254];
let selectedColour = [128, 0, 255];

let selected = true;

function setup() {
    createCanvas(500, 500);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(255);
    fill(0)
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            if (x % 2)  {
                fill (125);
            }
            rect(x * 50, y * 50, 50, 50);
        }
    }
}