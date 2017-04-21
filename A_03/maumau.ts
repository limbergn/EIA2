//Aufgabe 3.2
//Name:Nadine Limberger
//Matrikelnr.: 255346
//Datum: 30.03.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 

let stapel: any = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"];
    var hand: any = [];
    let ablage: any = [];
    window.onload = function (): void {
        createFeld();
    };

// Erstellen der einzelnen Kartenstapel
    function createFeld(): void {
        let div: any;
        for (let i: number = 0; i < 7; i++) {
            div = document.createElement("div");
            switch (i) {
                case 0:
                    div.id = "stapel";
                    div.textContent = "Stapel";
                    div.addEventListener("click", ziehen);
                    break;
                case 6:
                    div.id = "ablage";
                    break;
                default:
                    div.className = "hand";
                    div.addEventListener("click", ablegen);
            }
            document.body.appendChild(div);
        }
    }

// Ziehe eine zufällige Karte aus dem Array
    function ziehen(): void {
        if (hand.length < 5) {
            let n: any = Math.round(Math.random() * (stapel.length - 1));
            hand.push(stapel.splice(n, 1)[0]);
        }
        update();
    }

// Karte wir duch Klicken auf Ablagestapel gelegt
    function ablegen(event: any): void {
        let div: any = event.target;
        let card: any = div.textContent;
        let index: any = hand.indexOf(card);
        ablage.push(hand.splice(index, 1)[0]);
        update();
    }
    function update(): void {
        let hands: any = document.getElementsByClassName("hand");
        for (let i: number = 0; i < hands.length; i++) {
            hands[i].textContent = hand[i];
        }
        let ablage: any = document.getElementById("ablage");
        ablage.textContent = ablage[ablage.length - 1];
    };