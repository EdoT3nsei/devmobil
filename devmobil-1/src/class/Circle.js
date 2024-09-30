import { TAU } from "../util/math.js";

export default class Circle {

    constructor({
        x = 0,
        y = 0,
        radius = 100,
        color = "tomato",
        speed = 100,
        dir = 0,
    } = {}) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed
        this.dir = dir;
    }

    setDirection(angle) {
        this.dir = angle;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, TAU);
        ctx.fill();
        ctx.closePath();
    }

    move(dt) {
        const dx = this.speed * Math.cos(this.dir) * dt / 1000;
        const dy = this.speed * Math.sin(this.dir) * dt / 1000;
        this.x += dx;
        this.y += dy;
    }

    compareTo(otherCircle) {
        return this.radius - otherCircle.radius;
    }
    
}