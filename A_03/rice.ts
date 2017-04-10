//Aufgabe 3a
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 08.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert.
    
//Habe den Code mit Unterstüzung von meinem Freund erstellt. 
//Mir ist bewusst, dass er nicht voll funktionsfähig ist, aber ich weiß nicht weiter.
//Habe noch große Verständnisprobleme

document.addEventListener('DOMContentLoaded', function() {
        let rice: number = 1;
        let color: boolean = true;
        for (let row: number = 0; row < 8; row++) {
            for (let board: number = 0; board < 8; board++) {
                let div: string = document.createElement("div");
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
    
    let mouseBox = document.createElement("div");
    document.body.appendChild(mouseBox);
    mouseBox.className = "mouseBox"; // 
    document.addEventListener("mousemove", boxbewegen);
    function boxbewegen(Event) {
        mouseBox.style.left = (Event.clientX + 30) + "px";
        mouseBox.style.top = (Event.clientY + 30) + "px";
    }
    function mark(event) {
        let target = event.target;
        if (target.className.includes("marked")) {
            if (target.className.includes("black")) {
                target.className = "board black";
            }
            else {
                target.className = "board white";
            }
        }
        else {
            target.className += " marked";
        }
        sum = 0;
        let marked = document.getElementsByClassName("marked");
        for (let i: number = 0; i < marked.length; i++) {
            sum += parseInt(marked[i].innerText);
            mouseBox.innerText = "Dez:" + sum.toString() + "\r\n" + "hexDez:" + sum.toString(16);
        }
        if (marked.length == 0) {
            mouseBox.style.display = "none";
        }
        else {
            mouseBox.style.display = "inline-block";
        }
        console.log(sum + "\r\n" + sum.toString(16));
    }
});
});