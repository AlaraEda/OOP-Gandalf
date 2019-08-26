class Gandalf extends GameObject{

    private callback:EventListener;

        
    constructor() {
        super("gandalf")
        //this.tag = "gandalf";

        // we slaan de click handler op in een variabele zodat we die makkelijk een listener kunnen toevoegen en verwijderen als het nodig is
        this.callback = (e:Event) => this.onClick(e);

        // constructor settings afhankelijk van de action
        let action = "sleeping";    //Dit is een behavior
        switch(action){
        case "hungry" :             //Dit is een behavior
            this.div.style.backgroundImage = "url(images/"+this.tag+"_hungry.png)";
            this.div.style.cursor =  "auto";
            this.setTarget();
            break;
        case "leaving" :
            this.div.style.backgroundImage = "url(images/"+this.tag+"_leaving.png)";
            this.div.style.cursor =  "auto";
            this.xTarget = Math.random() * window.innerWidth;
            this.yTarget = window.innerHeight + 300;
            this.speedmultiplier += 1;
            break;
        case "sleeping" :
            this.div.style.backgroundImage = "url(images/"+this.tag+"_sleep.png)";
            this.div.style.cursor =  "pointer";
            this.div.addEventListener("click", this.callback);
            break;
        }
    }

    // update afhankelijk van de action
    public update(){
        let action = "sleeping";
        switch(action){
        case "hungry" :
            this.hungry();
            break;
        case "leaving" :
            this.leaving();
            break;
        case "sleeping" :
            this.sleeping();
            break;
        }

        // in scherm tekenen
        this.facing = (this.xspeed > 0) ? -1 : 1;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scale("+this.facing+",1)";
    }

    public onClick(e:Event):void {
        console.log("je klikt op gandalf. de listener wordt nu verwijderd.");
        this.div.style.cursor =  "auto";
        this.div.removeEventListener("click", this.callback);
    }

    //
    // de hungry update laat een karakter random door het beeld heen en weer lopen
    //
    public hungry(){
        this.x += this.xspeed;
        this.y += this.yspeed;
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;
        if(xdistance < 4 && ydistance < 4) this.setTarget();
        this.setSpeed(xdistance, ydistance);
    }

    //
    // de leaving update laat een karakter uit beeld lopen
    //
    public leaving(){
        this.x += this.xspeed;
        this.y += this.yspeed;
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;
        if(xdistance < 4 && ydistance < 4) {
            console.log("het karakter is uit beeld");
        }
        this.setSpeed(xdistance, ydistance);
    }
    
    //
    // de sleeping update doet niets
    //
    public sleeping(){
        //
    }

}