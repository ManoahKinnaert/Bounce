import { Ball } from './Balls/ball.js';
import {Position} from './Balls/position.js';
import {Vector} from './Balls/vector.js';

const canvas = document.getElementById("view");
const animation_btn = document.getElementById("animation_btn");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");

let balls = [];
const colors = ["red", "magenta", "blue", "orange", "green", "yellow", "purple", "cyan"];
let running = false;

animation_btn.onclick = animationBtnClick;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function spawn(radius=15, position, vector, color) {
    let ball = new Ball(radius, position, vector, color);
    balls.push(ball);
}

function spawnNRandom(n=10) {
    for (let i = 0; i < n; i++) {
        let bal = new Ball(15, new Position(randomInt(20, 100), randomInt(20, 100)), new Vector(randomInt(-10, 10), randomInt(-10, 10)),
        colors[randomInt(0, colors.length - 1)]);
        balls.push(bal);
    }
}

function update_balls(val, index, array) {
    val.update(canvas);
}

function render(val, index, array) {
    val.render(canvas);
}

function runloop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(update_balls)
    balls.forEach(render);


    if (running) requestAnimationFrame(runloop);
}

function startAnimation() {
    running = true;
    spawnNRandom(15);
    runloop();
}

function endAnimation() {
    running = false;
    balls = [];
}

function animationBtnClick() {
    if (!running) {
        startAnimation();
        animation_btn.textContent = "End";
        animation_btn.style.backgroundColor = "red";
    }
    else { 
        endAnimation(); 
        animation_btn.textContent = "Start";
        animation_btn.style.backgroundColor = "lime";
    }
}
