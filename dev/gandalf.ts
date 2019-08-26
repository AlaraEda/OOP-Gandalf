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
    }

    //Update afhankelijk van de action
    public update(){
        //Update nieuwe gedrag van Sheep.
        this.behaviour.update()

        //Teken hoe Gandalf loopt.
        this.draw()        
    }

    //Sound Effect
    public playSound() {
        var audio = new Audio('GottaGo.mp3')
        audio.play()
    }
}