class Sleeping implements Behaviour {

    private callback:EventListener;
    private gandalf: Gandalf
    public clicked: boolean = false;

    constructor(gandalf : Gandalf){
        this.gandalf = gandalf

        //Creatie van Sleeping-Gandalf
        this.gandalf.div.style.backgroundImage = "url(images/"+this.gandalf.tag+"_sleep.png)";
        this.gandalf.div.style.cursor =  "pointer";

        // we slaan de click handler op in een variabele zodat we die makkelijk een listener kunnen toevoegen en verwijderen als het nodig is
        //Wanneer op Sleeping-Gandalf geklikt word.
        this.callback = (e:Event) => this.onClick(e);
        this.gandalf.div.addEventListener("click", this.callback);

        //Wanneer je op Sleeping-Gandalf klikt op je telefoon.
        this.gandalf.div.addEventListener("touchstart", this.callback);
    }

    update(){
        //Sleeping... Do nothing...
    }

    //Bij Onclick word Gandalf wakker en wilt die wat eten.
    public onClick(e:Event):void {
        console.log("Je klikt op gandalf. De listener wordt nu verwijderd.");
        this.gandalf.div.style.cursor =  "auto";
        this.gandalf.div.removeEventListener("click", this.callback);
        this.gandalf.div.removeEventListener("touchstart",this.callback);

        //Wanneer ik klik vluchten alle gandalfs weg maakt niet uit of ze slapen of niet.
        //Notify all the Gandalfs die gesubscribed staan op Breakfast
        if(this.clicked === true && this.gandalf.game.breakfast.clicked === true){
            this.gandalf.game.breakfast.notifyObservers()
        }

        //Verandert behaviour naar hungry
        this.gandalf.behaviour = new Hungry(this.gandalf) 
    }
}