class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    size() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    bounce_north() {
        this.y *= -1;
    }

    bounce_south() {
        this.y *= -1;
    }

    bounce_east() {
        this.x *= -1;
    }

    bounce_west() {
        this.x *= -1;
    }
}

export { Vector };