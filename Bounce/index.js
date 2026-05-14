import { Ball } from './Balls/ball.js';
import {Position} from './Balls/position.js';
import {Vector} from './Balls/vector.js';

const canvas = document.getElementById("view");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");

let balls = []


function spawn(radius=15, position, vector, color) {
    let ball = new Ball(radius, position, vector, color);
    balls.push(ball);
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

    requestAnimationFrame(runloop);
}

spawn(15, new Position(50, 50), new Vector(-10, -10), "yellow");

spawn(15, new Position(20, 50), new Vector(-16, -10), "red");
runloop();