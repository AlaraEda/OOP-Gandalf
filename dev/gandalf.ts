/// <reference path="gameObject.ts" />

class Gandalf extends GameObject{

    private _behaviour: Behaviour   //Strategy Pattern
    

    //Zodat je het ook buitenaf kan gebruiken.
    public set behaviour(b: Behaviour) {this._behaviour = b}
    public get behaviour(): Behaviour {return this._behaviour}

    constructor() {
        super("gandalf")

        //Standaard --> Gandalf-Slaapt
        this.behaviour = new Sleeping(this)
        // we slaan de click handler op in een variabele zodat we die makkelijk een listener kunnen toevoegen en verwijderen als het nodig is
        //this.callback = (e:Event) => this.onClick(e);

        // // constructor settings afhankelijk van de action
        // let action = "sleeping";    //Dit is een behavior
        // switch(action){
        // case "hungry" :             //Dit is een behavior
        //     this.div.style.backgroundImage = "url(images/"+this.tag+"_hungry.png)";
        //     this.div.style.cursor =  "auto";
        //     this.setTarget();
        //     break;
        // case "leaving" :
        //     this.div.style.backgroundImage = "url(images/"+this.tag+"_leaving.png)";
        //     this.div.style.cursor =  "auto";
        //     this.xTarget = Math.random() * window.innerWidth;
        //     this.yTarget = window.innerHeight + 300;
        //     this.speedmultiplier += 1;
        //     break;
        // case "sleeping" :
        //     this.div.style.backgroundImage = "url(images/"+this.tag+"_sleep.png)";
        //     this.div.style.cursor =  "pointer";
        //     this.div.addEventListener("click", this.callback);
        //     break;
        // }
    }

    //Update afhankelijk van de action
    public update(){
        //Update nieuwe gedrag van Sheep.
        this.behaviour.update()

        //Teken hoe Gandalf loopt.
        this.draw()

        // let action = "sleeping";
        // switch(action){
        // case "hungry" :
        //     this.hungry();
        //     break;
        // case "leaving" :
        //     this.leaving();
        //     break;
        // case "sleeping" :
        //     this.sleeping();
        //     break;
        // }
        
    }
}