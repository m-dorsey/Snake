
var snake;
var sScale = 20;
var gameWidth = 500;
var gameHeight = 500;

var offset;

var food;

var lastDir = [];

var startBtn;
var endBtn;

function setup() {

    createCanvas(600, 600);
    offset = (width - gameWidth)/2;

    snake = new Snake();
    frameRate(10);

    food = new Food();

}

function draw() {

    background(51);

    fill(255);
    rect(offset, offset, gameWidth, gameHeight);

    if (snake.death()) {
        gameOver();
    }

    snake.update();
    snake.show();

    food.draw();

    if (snake.eat(food)) {
        food.newLocation();
    }


}

function keyPressed() {

    if (keyCode == UP_ARROW) {

        snake.dir(0, -1, "up");
        lastDir.push("up");

    } else if (keyCode == DOWN_ARROW) {

        snake.dir(0, 1, "down");
        lastDir.push("down");

    } else if (keyCode == LEFT_ARROW) {

        snake.dir(-1, 0, "left");
        lastDir.push("left");

    } else if (keyCode == RIGHT_ARROW) {

        snake.dir(1, 0, "right");
        lastDir.push("right");

    }

}

function gameOver() {
    noLoop();
    console.log("GAME OVER");
}
