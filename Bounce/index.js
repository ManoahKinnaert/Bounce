import { Ball } from './Balls/ball.js';
import {Position} from './Balls/position.js';
import {Vector} from './Balls/vector.js';

const canvas = document.getElementById("view");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");

let ball = new Ball(15, new Position(100, 100), new Vector(-10, -3), "red");
ball.render(canvas);


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.update(canvas);

    ball.render(canvas);

    requestAnimationFrame(update);
}
update();