//Aufgabe 3.2
//Name:Nadine Limberger
//Matrikelnr.: 255346
//Datum: 30.03.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
var Nr3b_MauMau;
(function (Nr3b_MauMau) {
    let stapel = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"];
    let hand = [];
    let ablage = [];
    window.addEventListener("load", createFeld);
    function createFeld() {
        let div;
        for (let i = 0; i < 7; i++) {
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
    function ziehen() {
        if (hand.length < 5) {
            let n = Math.round(Math.random() * (stapel.length - 1));
            hand.push(stapel.splice(n, 1)[0]);
        }
        update();
    }
    function ablegen(_event) {
        let div = _event.target;
        let card = div.textContent;
        let index = hand.indexOf(card);
        ablage.push(hand.splice(index, 1)[0]);
        update();
    }
    function update() {
        let hands = document.getElementsByClassName("hand");
        for (let i = 0; i < hands.length; i++) {
            hands[i].textContent = hand[i];
        }
        let ablageStapel = document.getElementById("ablage");
        ablageStapel.textContent = ablage[ablage.length - 1];
    }
})(Nr3b_MauMau || (Nr3b_MauMau = {}));
;
//# sourceMappingURL=maumau.js.map