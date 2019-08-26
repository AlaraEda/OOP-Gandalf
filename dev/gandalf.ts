/// <reference path="gameObject.ts" />

class Gandalf extends GameObject implements Observer{

    private _behaviour: Behaviour   //Strategy Pattern
    

    //Zodat je het ook buitenaf kan gebruiken.
    public set behaviour(b: Behaviour) {this._behaviour = b}
    public get behaviour(): Behaviour {return this._behaviour}

    public game: Game

    constructor(game: Game) {
        super("gandalf")

        this.game = game

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

    public notify(){
        console.log("Gandalf is the class that observes")

        //De wolf is wakker, en alle Sheeps worden notifyed en gaan hierom rennen.
        this.behaviour = new Leaving(this)
    }
}