class GameObject{
    public xspeed:number = 0;
    public yspeed:number = 0;

    public speedmultiplier:number = 1;
    public facing:number = 1;

    public div: HTMLElement;
    public x:number = 0;
    public y:number = 0;

    public width:number;
    public height:number;
    
    public xTarget:number;
    public yTarget:number;

 
    public tag:string;

    constructor(tag: string){
        this.tag = tag

        this.width = 67;
        this.height = 119;

        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);
        this.speedmultiplier = Math.random() + 1;

        this.div = document.createElement(this.tag);
        document.body.appendChild(this.div);
        this.div.style.backgroundImage = "url(images/"+this.tag+"_hungry.png)";

    }

    // een random plek in het scherm
    public setTarget(){
        this.xTarget = Math.random() * (window.innerWidth-80);
        this.yTarget = Math.random() * (window.innerHeight-120);
        
    }

    // snelheid uitrekenen
    public setSpeed(xdist:number, ydist:number):void {
        let distance:number = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist/distance;
        this.yspeed = ydist/distance;

        this.xspeed *= this.speedmultiplier;
        this.yspeed *= this.speedmultiplier;
    }

    update(){
         // in scherm tekenen
         this.facing = (this.xspeed > 0) ? -1 : 1;
         this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scale("+this.facing+",1)";
    }

    protected draw(): void {
        //Teken charakters in scherm
        this.facing = (this.xspeed > 0) ? -1 : 1;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scale("+this.facing+",1)";
    }
}