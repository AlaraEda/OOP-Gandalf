class Hungry implements Behaviour {
    
    private gandalf: Gandalf    //Verwijzing naar gandalf.ts
    
    constructor(gandalf: Gandalf){
        this.gandalf = gandalf

        console.log("Gandalf is hungry as hell!")

        //Creatie van Hungry-Gandalf
        this.gandalf.div.style.backgroundImage = "url(images/"+this.gandalf.tag+"_hungry.png)";
        this.gandalf.div.style.cursor =  "auto";
        this.gandalf.setTarget();

    }

    //De hungry update laat een Gandalf random door het beeld heen en weer lopen
    update(){
        this.gandalf.x += this.gandalf.xspeed;
        this.gandalf.y += this.gandalf.yspeed;
        let xdistance = this.gandalf.xTarget - this.gandalf.x;
        let ydistance = this.gandalf.yTarget - this.gandalf.y;
        if(xdistance < 4 && ydistance < 4) this.gandalf.setTarget();
        this.gandalf.setSpeed(xdistance, ydistance);
        console.log("Loop mijn hongerige Gandalf! LOOP!!!")

        //If ... Gandalf heeft hamburger
        this.gandalf.behaviour = new Leaving(this.gandalf) 
    }
}