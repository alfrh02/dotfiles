class SystemNode {
    constructor(x, y, size, color) {
        if (x != null) {
            this.x = x;
        } else {
            this.x = floor(random() * screen.width)
        }

        if (y != null) {
            this.y = y;
        } else {
            this.y = floor(random() * screen.height)
        }

        this.size = size;
        this.color = color;

        this.direction = [
            random(),
            random()
        ];
    }

    draw(theta) {
        fill(this.color);
        circle(this.x, this.y, this.size);
    }

    getPosition() {
        return [this.x, this.y];
    }

    getDirection() {
        return this.direction;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;

        if (x > width) {
            this.x = 0;
        }
        if (y > height) {
            this.y = 0;
        }
    }

    setDirection(dir) {
        this.direction = dir;
    }
}