import Circle from '../Circle.js';

export default class InFlatTorus extends Circle {
    move(dt, width, height) {
        super.move(dt);

        if (this.x > width + this.radius) {
            this.x = -this.radius;
        } else if (this.x < -this.radius) {
            this.x = width + this.radius;
        }

        if (this.y > height + this.radius) {
            this.y = -this.radius;
        } else if (this.y < -this.radius) {
            this.y = height + this.radius; 
        }
    }
}
