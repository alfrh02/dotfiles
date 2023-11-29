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

function drawSprite(x, y, width, height, spriteColor, pixelArray, pixelSize) {
    let spriteX = x - width;
    let spriteY = y - height;

    fill(spriteColor);

    for (let i = 0; i < pixelArray.length; i++) {
        if (pixelArray[i] == 1) {
            rect(spriteX, spriteY, pixelSize);
        }
        spriteX += pixelSize;
        if ((spriteX + 1) % height == 0) {
            spriteY += pixelSize;
            spriteX = x - width;
        }
    }

}