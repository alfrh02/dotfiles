let foregroundColor, backgroundColor;
function setup() {
    foregroundColor = color(33);
    backgroundColor = color(224, 224, 224);

    createCanvas(screen.width, screen.height);
}

function draw() {
    background(backgroundColor);

    drawSprite( width/2, height/2,
                personSprite.width, personSprite.height,
                foregroundColor, personSprite.array, 5);
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}

function drawSprite(x, y, w, h, spriteColor, pixelArray, pixelSize) {
    let spriteX = 0;
    let spriteY = 0;

    fill(spriteColor);

    for (let i = 0; i < pixelArray.length; i++) {
        if (pixelArray[i] == 1) {
            rect(x + spriteX, y + spriteY, pixelSize);
        }

        spriteX += pixelSize;
        if (spriteX == width*pixelSize) {
            spriteX = 0;
            spriteY += pixelSize;
        }
    }
}