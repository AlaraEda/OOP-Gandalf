"use strict";
class Breakfast {
    constructor() {
        this.counter = 0;
        this.bar = document.getElementsByTagName("bar")[0];
        this.button = document.getElementsByTagName("foodbutton")[0];
        this.button.style.cursor = "auto";
        this.callback = (e) => this.onClick(e);
    }
    update() {
        this.counter = Math.min(1, this.counter + 0.003);
        this.bar.style.width = (143 * this.counter) + "px";
        if (this.counter >= 1) {
            this.button.classList.add("blinking");
            this.button.addEventListener("click", this.callback);
            this.button.style.cursor = "pointer";
        }
    }
    onClick(e) {
        console.log("Ontbijtjes uitdelen!");
        this.counter = 0;
        this.button.removeEventListener("click", this.callback);
        this.button.classList.remove("blinking");
        this.button.style.cursor = "auto";
    }
}
class Card {
    constructor(x) {
        this.div = document.createElement("card");
        document.body.appendChild(this.div);
        this.div.style.left = x + "px";
    }
}
class Game {
    constructor() {
        this.gandalf = [];
        this.gameobjects = [];
        console.log("This game uses singleton");
    }
    static getInstance() {
        return this.instance || (this.instance = new Game());
    }
    initGame() {
        this.breakfast = new Breakfast();
        this.ork = new Ork();
        this.ork2 = new Ork();
        this.gameobjects.push(this.ork, this.ork2);
        for (let i = 0; i < 50; i++) {
            let gandalf = new Gandalf();
            this.gameobjects.push(gandalf);
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    gameLoop() {
        this.breakfast.update();
        for (let o of this.gameobjects) {
            o.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => {
    let gameOne = Game.getInstance();
    gameOne.initGame();
});
class GameObject {
    constructor(tag) {
        this.xspeed = 0;
        this.yspeed = 0;
        this.speedmultiplier = 1;
        this.facing = 1;
        this.x = 0;
        this.y = 0;
        this.tag = tag;
        this.width = 67;
        this.height = 119;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);
        this.speedmultiplier = Math.random() + 1;
        this.div = document.createElement(this.tag);
        document.body.appendChild(this.div);
        this.div.style.backgroundImage = "url(images/" + this.tag + "_hungry.png)";
    }
    setTarget() {
        this.xTarget = Math.random() * (window.innerWidth - 80);
        this.yTarget = Math.random() * (window.innerHeight - 120);
    }
    setSpeed(xdist, ydist) {
        let distance = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist / distance;
        this.yspeed = ydist / distance;
        this.xspeed *= this.speedmultiplier;
        this.yspeed *= this.speedmultiplier;
    }
    update() {
    }
}
class Gandalf extends GameObject {
    constructor() {
        super("gandalf");
        this.callback = (e) => this.onClick(e);
        let action = "sleeping";
        switch (action) {
            case "hungry":
                this.div.style.backgroundImage = "url(images/" + this.tag + "_hungry.png)";
                this.div.style.cursor = "auto";
                this.setTarget();
                break;
            case "leaving":
                this.div.style.backgroundImage = "url(images/" + this.tag + "_leaving.png)";
                this.div.style.cursor = "auto";
                this.xTarget = Math.random() * window.innerWidth;
                this.yTarget = window.innerHeight + 300;
                this.speedmultiplier += 1;
                break;
            case "sleeping":
                this.div.style.backgroundImage = "url(images/" + this.tag + "_sleep.png)";
                this.div.style.cursor = "pointer";
                this.div.addEventListener("click", this.callback);
                break;
        }
    }
    update() {
        let action = "sleeping";
        switch (action) {
            case "hungry":
                this.hungry();
                break;
            case "leaving":
                this.leaving();
                break;
            case "sleeping":
                this.sleeping();
                break;
        }
        this.facing = (this.xspeed > 0) ? -1 : 1;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.facing + ",1)";
    }
    onClick(e) {
        console.log("je klikt op gandalf. de listener wordt nu verwijderd.");
        this.div.style.cursor = "auto";
        this.div.removeEventListener("click", this.callback);
    }
    hungry() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;
        if (xdistance < 4 && ydistance < 4)
            this.setTarget();
        this.setSpeed(xdistance, ydistance);
    }
    leaving() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;
        if (xdistance < 4 && ydistance < 4) {
            console.log("het karakter is uit beeld");
        }
        this.setSpeed(xdistance, ydistance);
    }
    sleeping() {
    }
}
class Ork extends GameObject {
    constructor() {
        super("ork");
        this.div.style.cursor = "auto";
        this.setTarget();
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;
        if (xdistance < 4 && ydistance < 4)
            this.setTarget();
        this.setSpeed(xdistance, ydistance);
        this.facing = (this.xspeed > 0) ? -1 : 1;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.facing + ",1)";
    }
}
//# sourceMappingURL=main.js.map