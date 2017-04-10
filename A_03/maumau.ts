//Aufgabe 2a
//Name:Nadine Limberger
//Matrikelnr.: 255346
//Datum: 30.03.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 

//Habe den Code mit Unterstüzung von meinem Freund erstellt. 
//Mir ist bewusst, dass er nicht voll funktionsfähig ist, aber ich weiß nicht weiter.
//Habe noch große Verständnisprobleme

let gezogen: number = 0;
let abgelegt: number = 0;
let hand: number;

//let rest: number = 32 - gezogen - abgelegt

document.addEventListener("DOMContentLoaded", function() {
    gezogen = document.getElementById("ziehstapel");
    ziehstapel.addEventListener("click", addhandkarten);
    karten = ["Karo7", "Karo8", "Karo9", "Karo10", "KaroBube", "KaroDame", "KaroKöing",
        "Herz7", "Herz8", "Herz9", "Herz10", "HerzBube", "HerzDame", "HerzKönig",
        "Kreuz7", "Kreuz8", "Kreuz9", "Kreuz10", "KreuzBube", "KreuzDame", "KreuzKönig",
        "Pik7", "Pik8", "Pik9", "Pik10", "PikBube", "PikDame", "PikKönig"];

    hand = document.getElementsByClassName("handkarten");
    for (let x = 0; x < hand.length; x++) {
        hand[x].addEventListener("click", addfiledeck);
    }

    function addhandkarten() {
        let randomCard = karten.splice(Math.round(Math.random() * (karten.length - 1)), 1)[0];

        let freieHand = findEmpty();
        if (freieHand != null) {
            freieHand.innerText = randomCard;
        }
        if (karten.length === 0) {
            deck.style.display = "none";
        }
    }
    function findEmpty() {
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].textContent === "") {
                return hand[i];
            }
        }
        return null;
    }
    function addfiledeck(_event) {
        let element = _event.target;
        file.textContent = element.textContent;
        element.textContent = "";
    }