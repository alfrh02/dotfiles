class Node {
    constructor(x, y) {
        if (x != null) {
            x = this.x;
        } else {
            x = floor(random() * screen.width)
        }

        if (y != null) {
            y = this.y;
        } else {
            y = floor(random() * screen.height)
        }
    }
}