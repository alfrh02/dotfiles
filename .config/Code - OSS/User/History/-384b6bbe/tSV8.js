class Person {
    constructor(x, y, size, sprite, color) {
        this.x = x;
        this.y = y;

        this.size = size;

        this.spriteWidth = sprite.width;
        this.spriteHeight = sprite.height;
        this.idleSprite = sprite.idle;
        this.walkSprite = sprite.walk;

        this.color = color;
    }

    draw() {
        // draw shadow
        fill(33,33,33,33);
        rect(x, y + h*this.size - this.size, w*this.size, this.size*2);

        let spriteX = 0;
        let spriteY = 0;

        fill(this.color);

        for (let i = 0; i < pixelArray.length; i++) {
            if (pixelArray[i] == 1) {
                // add 1 to this.size to close gaps between rects when the sprite is in movement
                rect(x + spriteX*this.size, y + spriteY*this.size, this.size+1);
            }

            spriteX += 1;
            if (spriteX >= w) {
                spriteY += 1;
                spriteX = 0;
            }
        }
    }
}