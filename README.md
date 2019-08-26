# PRG08 hertentamen

## Gandalf Clicker

Gandalf gaat op weg naar Mordor, maar hij moet eerst wakker worden en wat eten.

## Opdracht

- Lees de [Toetsinstructie PDF](hertentamen_gandalf_2018_2019_instructie.pdf) goed door.
- Vergeet niet om Typescript te compileren naar Javascript met CMD/CTRL+SHIFT+B (watch mode)
- Vergeet niet het inleverdocument hieronder in te vullen. Je kan rechtstreeks in deze readme file typen.
- Lever het project in als zip bestand op N@Tschool, inclusief ingevuld inleverdocument.

# Inleverdocument

## OOP Fundamentals

Beschrijf waar en waarom je code gebruik maakt van Inheritance, Composition en Encapsulation.
Ik heb gebruik gemaakt van Inheritance:

Ik heb gebruik gemaakt van Inheritance op Gandolf & Ork omdat ze grotendeels bestaan uit dezelfde code. Hierdoor had ik dubbele code, wat onnodig was. Alle dubbele code heb ik in GameObject class gestopt en heb ik ge-extent naar de Gandolf/Ork classen.


Ik heb gebruik gemaakt van Composition:

Composition houd in dat een class een instance van een andere class bevat. Ik heb vooral gebruik gemaakt van Composition bij de class Game.ts aangezien daarbij alle andere classes verwerkt staan in Game.ts omdat ze daarin samen komen. 


Ik heb gebruik gemaakt van Encapsulation:

Om ervoor te zorgen dat sommige functies en variabelen alleen intern in de class aangeroepen kunnen worden door gebruik te maken van Private en Protected. Ik heb dit vooral gebruikt bij de properties van GameObject.ts. Voor methodes die vanaf buiten de class toegankelijk moeten zijn gebruik ik Public. 


---

## Singleton

Beschrijf welk programmeerprobleem je oplost met de Singleton en waarom het patroon zich goed leent voor dit probleem.

In Game.ts heb ik singleton toegepast om ervoor te zorgen dat het spel: "Gandalf vs Hamburgers" maar 1x aangemaakt kan worden. Als ik dit niet doe kan het namelijk zo zijn dat meerdere spelletjes in de achtergrond tegelijkertijd draaien, waardoor ik twee games in een verster heb zitten. 

---

## Polymorfisme

Beschrijf waar en waarom polymorfisme gebruikt wordt in jouw project. Dit moet code zijn die niet onderdeel is van de Strategy of Observer patronen uit dit tentamen.

Bij Polymorfisme gebruik je het type van de parent om verschillende typen children generiek te kunnen aanspreken. Bij mij is dit het geval bij Gandalf en de Ork. Die zitten namelijk allebij bij game.ts gestopt in een GameObjects array. Bij de update loop ik door deze array en voer ik checks uit op de objecten zoals op Gandalf & de ork.Ik maak gebruik van "Type Assertion" (Vertel aan Typescript welke type een object echt is) & Type Guards (Check welk type een object echt is). Door dit te doen geef ik aan aan Typescript wanneer ik de Ork bedoel en wanneer ik Gandolf bedoel. Ook creeer ik hierdoor meerdere kopieen van Gandolf. 

---

## Strategy

Beschrijf welk programmeerprobleem je oplost met de Strategy en waarom het patroon zich goed leent voor dit probleem.
Het programmeerprobleem bij dit spel is dat Gandalf verschillende acties verricht: sleeping, hungry & leaving. Dit zijn 3 verschillende behaviours die eerst allemaal in een rommeltje opgeslagen waren in Gandalf.ts (ook is het zo moeilijk om het gedrag van buitenaf aan te passen). 

Ik heb doormiddel van Strategy-Pattern alle acties in aparte classes gestopt om zo overzicht te creeeren. Ook heb ik ervoor gezorgd dat alle gedragen het Behaviour interface implementeert. En heb ik ervoor gezorgd dat het gedrag weet wie zijn eigenaar is.

Nu is het zo dat wanneer je op een slapende Gandalf klikt, hij hongerig heen en weer gaat lopen in het scherm en dat wanneer je hem eten geeft hij vol vreugde het scherm verlaat richting Mordor! Bij het aanpassen van het gedrag word de behaviour-property op een ander behaviour-patroon overgezet.


---

## Observer

Beschrijf welk programmeerprobleem je oplost met de Observer en waarom het patroon zich goed leent voor dit probleem.

De Observer pattroon is een one to many relationship tussen een Subject en al zijn Observers. Dit spel leent zich er goed voor uit aangezien ik hiermee alle Observers(Gandalfs) die gesubscribed staan aan de Subject(Breakfast) kan notifyen dat het eten klaar staat en dat de Gandalfs nu kunnen gaan eten en vertrekken, daarna kan ik alle Gandalfs weer unsubscriben van het subject. 

---

## Finished product

Beschrijf welke componenten uit de onderstaande "finished product" lijst voorkomen in jouw project. Je krijgt 1 punt per component tot een maximum van 2 punten.

Ik heb uit de lijst van "Finished Product" gekozen voor: De game werkt op mobiele schermen met touch controls. Ook heb ik ervoor gezorgd dat nadat je op de Gandalf geklikt hebt de click-listener verwijdert word. Dat ik dit gebruikt heb is zichtbaar wanneer je dit spel op je mobiel speelt en op Gandalf klikt.

Ook heb ik uit de lijst van "Finished Product" gekozen voor: Geluid en Muziek is een integraal onderdeel van de game.
Wanneer Gandalf het spel verlaat/uit rent, hoor je het muziekje: "Gotta Go Fast"!

---

### Finished product components

- De game heeft een startscherm en een eindscherm met een scoreweergave.
- Je score komt in een lijst met namen en scores. De lijst wordt bewaard als de browser is afgesloten. 
- De game bevat local of online multiplayer.
- De game werkt op mobiele schermen met touch controls.
- De game gebruikt alternatieve input zoals de camera, microfoon, gyroscoop, locatiebepaling.
- De game heeft levels met een oplopende moeilijkheidsgraad.
- Geluid en muziek is een integraal onderdeel van de game.
- De game werkt met Canvas in plaats van DOM elementen.
- Gandalf stuurt een kaartje als hij in Mordor aankomt.
