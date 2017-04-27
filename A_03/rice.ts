//Aufgabe 3a
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 08.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert.

namespace Nr3a_Schachbrett {
    let sum: number = 0;
    let div: HTMLDivElement;

    window.onload = function(): void {

        let rice: number = 1;
        let row: number = 0;
        for (let i: number = 0; i < 64; i++) { //For-Schleife
            let element: HTMLElement = document.createElement("div"); //Create Divs
            if (i < 8) {
                element.addEventListener("click", selectDiv);
            }
            if (((i + row) % 2) == 0) { //Modulo
                element.className = "board white";
            } else {
                element.className = "board black";
            }
            if (((i + 1) % 8) == 0) { //Modulo
                row++;
            }

            element.innerText = "" + rice;
            rice *= 2;
            document.body.appendChild(element);
        }
        div = document.createElement("div");
        div.id = "move";
        document.addEventListener("mousemove", updateRice);
        document.body.appendChild(div);
    };

    function selectDiv(event: MouseEvent): void {
        let clickedDiv: HTMLDivElement = <HTMLDivElement>event.target;
        if (clickedDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }

    function updateRice(event: MouseEvent): void {
        div.style.top = event.clientY + 10 + "px";
        div.style.left = event.clientX + 10 + "px";
        div.textContent = "Summe zur Basis 10 = " + sum + " Summe zur Basis 16 = " + sum.toString(16);
    }
};