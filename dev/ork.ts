class Ork extends GameObject {
       
    constructor() {
        super("ork")

        //this.tag = "ork";
        
        this.div.style.cursor =  "auto";
        this.setTarget();
    }

     
    public update(){
        this.x += this.xspeed;
        this.y += this.yspeed;

        // als doel bereikt dan een nieuw doel
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;

        if(xdistance < 4 && ydistance < 4) this.setTarget();

        this.setSpeed(xdistance, ydistance);

        this.facing = (this.xspeed > 0) ? -1 : 1;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scale("+this.facing+",1)";
    }
}