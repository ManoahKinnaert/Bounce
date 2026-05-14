class Ball {
    constructor(radius, position, velocity, color) {
        this.radius = radius;
        this.position = position;
        this.velocity = velocity;
        this.color = color;
    }

    render(canvas) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    update(canvas) {
        // right wall
        if (this.position.x + this.radius >= canvas.width) {
            this.position.x = canvas.width - this.radius;
            this.velocity.bounce_east();
        }

        // left wall
        if (this.position.x - this.radius <= 0) {
            this.position.x = this.radius;
            this.velocity.bounce_west();
        }

        // bottom wall
        if (this.position.y + this.radius >= canvas.height) {
            this.position.y = canvas.height - this.radius;
            this.velocity.bounce_south();
        }

        // top wall
        if (this.position.y - this.radius <= 0) {
            this.position.y = this.radius;
            this.velocity.bounce_north();
        }

        // move ball
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

export { Ball };