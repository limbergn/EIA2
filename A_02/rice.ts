//Aufgabe 2a
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 30.03.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert.
    
document.addEventListener('DOMContentLoaded', function() {
        let rice = 1;
        let color = true;
        for (let row = 0; row < 8; row++) {
            for (let board = 0; board < 8; board++) {
                let div = document.createElement("div");
                document.body.appendChild(div);
                if (color == true) {
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                    color = false;
                }
                
                else {
                    div.style.backgroundColor = "white";
                    div.style.color = "black";
                    color = true;
                }
                
                div.innerText = "" + rice;
                rice = rice * 2;
            }
            if (color == true) {
                color = false;
            }
            else {
                color = true;
            }
        }
    });