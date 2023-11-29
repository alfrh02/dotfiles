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

        let pos = this.getPosition();
        let dir = this.getDirection();

        this.setPosition(pos[0] + dir[0], pos[1] + dir[1]);

        //this.setDirection(dir[0] + sin(theta/100), dir[1] + cos(theta/100));
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

        if (x > width + this.size) {
            this.x = 0;
        }
        if (y > height + this.size) {
            this.y = 0;
        }
    }

    setDirection(dir) {
        this.direction = dir;
    }

    setDirection(x, y) {
        this.direction = [x, y];
    }
}