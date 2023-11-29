let theta;
let foregroundColor, backgroundColor;
function setup() {
    theta = 0;

    foregroundColor = color(33);
    backgroundColor = color(224, 224, 224);

    noStroke();

    createCanvas(screen.width, screen.height);
}

function draw() {
    background(backgroundColor);

    drawSprite( width/2, height/2 + cos(theta/100) * 50,
                personSprite.width, personSprite.height,
                foregroundColor, personSprite.array, 5, true);

    theta += deltaTime;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}

function drawSprite(x, y, w, h, spriteColor, pixelArray, pixelSize, hasShadow) {
    let spriteX = 0;
    let spriteY = 0;

    if (hasShadow) {
        spriteX = 0;
        spriteY = 0;

        fill(33,33,33,33);
        rect(x, y + h*pixelSize - pixelSize, w*pixelSize, pixelSize*2);
    }

    fill(spriteColor);

    for (let i = 0; i < pixelArray.length; i++) {
        if (pixelArray[i] == 1) {
            rect(x + spriteX*pixelSize, y + spriteY*pixelSize, pixelSize);
        }

        spriteX += 1;
        if (spriteX >= w) {
            spriteY += 1;
            spriteX = 0;
        }
    }
}