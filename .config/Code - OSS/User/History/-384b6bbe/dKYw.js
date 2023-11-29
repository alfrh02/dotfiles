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
        let x = this.x;
        let y = this.y;

        let pixelSize = this.size;

        let h = this.spriteHeight;
        let w = this.spriteWidth

        fill(33,33,33,33);
        rect(x, y + h*pixelSize - pixelSize, w*pixelSize, pixelSize*2);

        let spriteX = 0;
        let spriteY = 0;

        fill(this.color);

        for (let i = 0; i < this.idleSprite.length; i++) {
            if (this.idleSprite[i] == 1) {
                // add 1 to pixelSize to close gaps between rects when the sprite is in movement
                rect(x + spriteX*pixelSize, y + spriteY*pixelSize, pixelSize+1);
            }

            spriteX += 1;
            if (spriteX >= w) {
                spriteY += 1;
                spriteX = 0;
            }
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}