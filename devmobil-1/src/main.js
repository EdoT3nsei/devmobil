import Circle from './class/Circle.js';
import { TAU } from './util/math.js';
import InFlatTorus from './class/Circle/InFlatTorus.js';
import Keyboard from './class/Keyboard.js';

const ctx = document.querySelector('canvas').getContext('2d');
const baseHue = Math.random() * 360;

const keyboard = new Keyboard();


ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

function generateRadius() {
  return Math.random() ** 2 * 100;
}

const circles = [];
for (let i = 0; i < 200; i++) {
    const radius = generateRadius();
    const hue = baseHue + (Math.random() * 60 - 30);
    circles.push(new InFlatTorus({
        x: Math.random() * ctx.canvas.width,
        y: Math.random() * ctx.canvas.height,
        radius: radius,
        color: `hsl(${hue}, 100%, 50%)`,
        speed: radius * 10,
        dir: Math.random() * TAU
    }));
}

circles.sort((c1, c2) => c1.compareTo(c2));

let lastTick = 0;

function tick(timestamp) {
  const dt = timestamp - lastTick || 0;
  lastTick = timestamp;

  let angle = false;

  if (keyboard.isKeyDown("KeyS")) {
    angle = TAU * 0.75;
  } else if (keyboard.isKeyDown("KeyW")) {
    angle = TAU * 0.25;
  }
  if (keyboard.isKeyDown("KeyA")) {
    angle = TAU * 0;
  } else if (keyboard.isKeyDown("KeyD")) {
    angle = TAU * 0.5;
  }

  if (angle !== false) {
    for (const circle of circles) {
      circle.setDirection(angle);
      circle.move(dt, ctx.canvas.width, ctx.canvas.height);
    }
  }
  ctx.canvas.width = ctx.canvas.clientWidth;
  ctx.canvas.height = ctx.canvas.clientHeight;


  for (const circle of circles) {
      circle.draw(ctx); 
  }

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);