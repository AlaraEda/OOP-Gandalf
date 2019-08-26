class Leaving implements Behaviour {

    private gandalf: Gandalf //Verwijzing naar gandalf.ts
    
    constructor(gandalf: Gandalf){
        this.gandalf = gandalf

        //Creatie van Leaving-Gandalf
        this.gandalf.div.style.backgroundImage = "url(images/"+this.gandalf.tag+"_leaving.png)";
        this.gandalf.div.style.cursor =  "auto";
        this.gandalf.xTarget = Math.random() * window.innerWidth;
        this.gandalf.yTarget = window.innerHeight + 300;
        this.gandalf.speedmultiplier += 1;

        //Start-SoundEffect
        this.gandalf.playSound()
    }

    //De leaving update laat Gandalf uit beeld lopen
    update(){
        console.log("Deze Gandolf zit vol en verlaat de game")
        this.gandalf.x += this.gandalf.xspeed;
        this.gandalf.y += this.gandalf.yspeed;
        let xdistance = this.gandalf.xTarget - this.gandalf.x;
        let ydistance = this.gandalf.yTarget - this.gandalf.y;
        if(xdistance < 4 && ydistance < 4) {
            console.log("het karakter is uit beeld");
        }
        this.gandalf.setSpeed(xdistance, ydistance);

        //Remove Gandalf from Breakfast subscribption
        this.gandalf.game.breakfast.unSubscribe(this.gandalf)
    }
}