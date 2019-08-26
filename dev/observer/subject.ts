interface Subject {
    //Breakfast is the subject

    subscribe(observer : Observer) : void; 
        /*Allows Gandalf to subscribe itself as a observer to Breakfast
        So that Breakfast knows that it should notify Gandalf
        of any changes. */

    unSubscribe(observer : Observer) : void; 
        //Stop being notifed of the changes of Breakfast

    notifyObservers(): void; 
        //Functie waarbij je door de array van observers heen gaat
        //en waarbij je elke observer een notify-functie meestuurt
}