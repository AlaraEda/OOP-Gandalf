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
    
    protected xTarget:number;
    protected yTarget:number;

 
    protected tag:string;

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
    protected setTarget(){
        this.xTarget = Math.random() * (window.innerWidth-80);
        this.yTarget = Math.random() * (window.innerHeight-120);
    }

    // snelheid uitrekenen
    protected setSpeed(xdist:number, ydist:number):void {
        let distance:number = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist/distance;
        this.yspeed = ydist/distance;

        this.xspeed *= this.speedmultiplier;
        this.yspeed *= this.speedmultiplier;
    }
}