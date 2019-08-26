class Game {
    //Singleton
    private static instance: Game

    private breakfast:Breakfast;
    private gandalf1:Gandalf;
    private gandalf2:Gandalf;
    private ork1:Ork;
    private ork2:Ork;

    //Vanwege singleton staat dit leeg.
    //Omdat de constructor private is kan je geen new game() doen.
    constructor() { 
        console.log("This game uses singleton")
      
    }

    public static getInstance(){
        return this.instance || (this.instance = new Game())
    }
    
    public initGame() {
        //Allles wat zichtbaar is in het spel
        this.breakfast = new Breakfast();
        this.gandalf1 = new Gandalf();
        this.gandalf2 = new Gandalf();
        this.ork1 = new Ork();
        this.ork2 = new Ork();

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){

        //Update alle onderdelen
        this.breakfast.update();
        this.gandalf1.update();
        this.gandalf2.update();
        this.ork1.update();
        this.ork2.update();

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