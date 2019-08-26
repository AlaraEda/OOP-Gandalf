//Het lopertje dat aangeeft wanneer voedsel klaar is
class Breakfast implements Subject {

    private counter:number = 0;
    private bar:HTMLElement;
    private button:HTMLElement;
    private callback:EventListener;

    public clicked: boolean = false;

    //Gandalfs
    private observers: Observer [] = []    //Array van iedereen die een observeerder is
        
    constructor() {
        this.bar = <HTMLElement> document.getElementsByTagName("bar")[0];
        this.button = <HTMLElement> document.getElementsByTagName("foodbutton")[0];
        this.button.style.cursor =  "auto";
        this.callback = (e:Event) => this.onClick(e);   
    }

    public update():void {
        this.counter = Math.min(1, this.counter + 0.003);
        this.bar.style.width = (143 * this.counter) + "px";

        if(this.counter >= 1) {
            this.button.classList.add("blinking");
            this.button.addEventListener("click", this.callback);
            this.button.style.cursor =  "pointer";
        } 
    }

    private onClick(e:Event):void {
        console.log("Ontbijtjes uitdelen!");
        this.counter = 0;
        this.button.removeEventListener("click", this.callback);
        this.button.classList.remove("blinking"); 
        this.button.style.cursor =  "auto";

        this.clicked === true;
    }

    //Hou bij wie zichzelf gesubscribed heeft op de Breakfast
    public subscribe(observer: Observer) {
        //Keep track of the observer/Gandalf
        this.observers.push(observer)
    }

    //Unsubscribe Gandalf van Breakfast
    public unSubscribe(observer: Observer) {
        let index = this.observers.indexOf(observer)        //Kijk waar die ene observer/Gandalf is in onze array
        this.observers.splice(index,1)                      //Haal die ene observer uit de array van observers
    }

    //Notify all je observers over de veranderingen van Breakfast
    public notifyObservers(){
        for (let observer of this.observers){    //Ga door de array van observers heen
            observer.notify()                    //Notify elke observer in de array dat Breakfast klaar is
            console.log("Notify all Gandalfs")
        }
    }
}