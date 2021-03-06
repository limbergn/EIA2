//Aufgabe 3.2
//Name:Nadine Limberger
//Matrikelnr.: 255346
//Datum: 30.03.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 

namespace Nr3b_MauMau {
    let stapel: string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"];
    let hand: string[] = [];
    let ablage: string[] = [];

    window.addEventListener ("load", createFeld);

    function createFeld(): void {
        let div: HTMLDivElement;
        for (let i: number = 0; i < 7; i++) {
            div = <HTMLDivElement>document.createElement("div");
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

    function ziehen(): void {
        if (hand.length < 5) {
            let n: number = Math.round(Math.random() * (stapel.length - 1));
            hand.push(stapel.splice(n, 1)[0]);
        }

        update();
    }

    function ablegen(_event: MouseEvent): void {
        let div: HTMLDivElement = <HTMLDivElement>_event.target;
        let card: string = div.textContent;
        let index: number = hand.indexOf(card);
        ablage.push(hand.splice(index, 1)[0]);

        update();
    }

    function update(): void {
        let hands: NodeListOf<Element> = document.getElementsByClassName("hand");
        for (let i: number = 0; i < hands.length; i++) {
            hands[i].textContent = hand[i];
        }

        let ablageStapel: HTMLDivElement = <HTMLDivElement>document.getElementById("ablage");
        ablageStapel.textContent = ablage[ablage.length - 1];
    }

};