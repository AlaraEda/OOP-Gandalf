class Game {
    //Singleton
    private static instance: Game

    public breakfast:Breakfast;
    private ork:Ork;
    private ork2: Ork;
    public gandalf: Gandalf[] = []         //We willen 50 copies die rondlopen

    private gameobjects: GameObject[] = []  //Hier zitten alle objecten in

    //Vanwege singleton staat dit leeg.
    //Omdat de constructor private is kan je geen new game() doen.
    constructor() { 
        console.log("This game uses singleton")
    }

    public static getInstance(){
        return this.instance || (this.instance = new Game())
    }
    
    //Alles wat zichtbaar is in het spel
    public initGame() {
        
        this.breakfast = new Breakfast();

        //Creeer 2 ork's
        this.ork = new Ork()
        this.ork2 = new Ork()
        this.gameobjects.push(this.ork, this.ork2)

        //Creeer 50 gandalf's
        for(let i = 0; i<50; i++){
            let gandalf = new Gandalf(this)
            this.gameobjects.push(gandalf)

            //Subscribe breakfast to all Gandalfs.
            this.breakfast.subscribe(gandalf)
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){

        //Update alle onderdelen
        this.breakfast.update();

        //Update alle objecten (Gandalf & de Ork) hier met polymorfisme
        for (let o of this.gameobjects){
            //Update alle Gandalfs & orks
            o.update()
        }
        
        requestAnimationFrame(() => this.gameLoop());
    }


    // demo code om een object uit een array te verwijderen
    /*
    private removeFromArray(object:something){
        let i:number = this.array.indexOf(object);
        if(i != -1) {
            this.array.splice(i, 1);
        }
    }
    */    
} 

window.addEventListener("load", () => {
    let gameOne = Game.getInstance()    //Aangezien je niet met new Game() de Class kan oproepen roep je het zo op.
    gameOne.initGame()
})