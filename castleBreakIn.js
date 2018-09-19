import {game, Sprite} from "./sgc/sgc.js";
game.setBackground("grass.png");

class Wall extends Sprite {
    constructor(x, y, name, image) {
        super();
        this.x = x;
        this.y = y;
        this.name = name;
        this.setImage(image);
        this.accelerateOnBounce = false;
    }
    
}

new Wall(0, 0, "A spooky castle wall", "castle.png");
let rightWall = new Wall(game.displayWidth - 48, 200, "Right side wall", "wall.png");
let leftWall = new Wall(0, 200, "left side wall", "wall.png");

class Princess extends Sprite {
    constructor() {
        super();
        this.name = "Princess Ann";
        this.setImage("ann.png");
        this.height = 48;
        this.width = 48;
        this.x = (game.displayWidth - 400);
        this.y = (game.displayHeight - this.height);
        this.speedWhenWalking = 150;
        this.lives = 1;
        this.accelerateOnBounce = false;
        this.defineAnimation("left", 9, 11);
        this.defineAnimation("right", 3, 5);
    }
    handleLeftArrowKey() {
        this.playAnimation("left");
        this.speed = this.speedWhenWalking;
        this.angle = 180;
    } 
    handleRightArrowKey() {
        this.playAnimation("right");
        this.speed = this.speedWhenWalking;
        this.angle = 0;
    }
    handleGameLoop() {
        this.speed = 0;
        this.x = Math.max(this.width, this.x);
        this.x = Math.min(game.displayWidth - rightWall.width - this.width, this.x);
    }
}

let ann = new Princess();

class Ball extends Sprite {
    constructor() {
        super();
        this.x = game.displayWidth/2;
        this.y = game.displayHeight/2;
        this.height = 48;
        this.width = 48;
        this.name = "bouncy ball";
        this.setImage("ball.png");
        this.defineAnimation("spin", 0, 11);
        this.playAnimation("spin");
        this.speed = 1;
        this.angle = 50 + Math.random() * 80;
    }
    handleGameLoop() {
        if (this.speed < 200) {
            this.speed= this.spped + 2;
        }
    }
}

new Ball();
