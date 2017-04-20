//Aufgabe 2a
//Name:Nadine Limberger
//Matrikelnr.: 255346
//Datum: 30.03.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 

//Habe den Code mit Unterstüzung von meinem Freund erstellt. 
//Habe noch große Verständnisprobleme

document.addEventListener("DOMContentLoaded", function() {
    var cards = ["Karo 7",
        "Karo 8",
        "Karo 9",
        "Karo 10",
        "Karo Bube",
        "Karo Dame",
        "Karo König",
        "Karo As",
        "Kreuz 7",
        "Kreuz 8",
        "Kreuz 9",
        "Kreuz 10",
        "Kreuz Bube",
        "Kreuz Dame",
        "Kreuz König",
        "Kreuz As",
        "Herz 7",
        "Herz 8",
        "Herz 9",
        "Herz 10",
        "Herz Bube",
        "Herz Dame",
        "Herz König",
        "Herz As",
        "Pik 7",
        "Pik 8",
        "Pik 9",
        "Pik 10",
        "Pik Bube",
        "Pik Dame",
        "Pik König",
        "Pik As"
    ];
    /*Click on Deck("Take") --> max 5 Karten auf der Hand */
    let take = document.getElementById("take");

    take.addEventListener("click", function() {
        /*Place Div/Card - zufällige Karte aus dem Array nur wenn "Hand" > 4*/
        let cardsOnHand = document.getElementById("hand").childElementCount;
        if (cardsOnHand < 5) {
            placeCardToHand();
        }
    });


    /* Funktion zur Platzierung der Karten-Divs im Hand-Div */
    function placeCardToHand() {
        let div = document.createElement("div");
        document.getElementById("hand").appendChild(div);
        let s = div.style;
        /* Zufällige Karte */
        let n = Math.round(Math.random() * cards.length);
        while (cards[n] == undefined) {
            Math.round(Math.random() * cards.length);
        }

        div.innerText = cards[n];
        s.border = "solid black";
        s.display = "inline-block";
        s.width = "200px";
        s.height = "250px";
        div.className = "cardsDrawn";
        console.log(cards[n]);
        console.log(cards.length);
        cards.splice(n, 1);

        /* Aktivität 2: Drop card from "Hand" to "Drop"-Deck - Anzahl der "Drop" Karten anzeigen */
        div.addEventListener("click", function() {
            let cardsDropped = [""];
            let cardValue = div.innerText;
            let amountOfDroppedCards = cardsDropped.push(cardValue);
            document.getElementById("drop").innerText = cardValue;

            /* Handkarte löschen*/
            div.parentNode.removeChild(div);
        });
    }
});