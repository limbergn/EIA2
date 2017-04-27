//Aufgabe 3a
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 08.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert.
var Nr3a_Schachbrett;
(function (Nr3a_Schachbrett) {
    let sum = 0;
    let div;
    window.onload = function () {
        let rice = 1;
        let row = 0;
        for (let i = 0; i < 64; i++) {
            let element = document.createElement("div"); //Create Divs
            if (i < 8) {
                element.addEventListener("click", selectDiv);
            }
            if (((i + row) % 2) == 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
            if (((i + 1) % 8) == 0) {
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
    function selectDiv(event) {
        let clickedDiv = event.target;
        if (clickedDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }
    function updateRice(event) {
        div.style.top = event.clientY + 10 + "px";
        div.style.left = event.clientX + 10 + "px";
        div.textContent = "Summe zur Basis 10 = " + sum + " Summe zur Basis 16 = " + sum.toString(16);
    }
})(Nr3a_Schachbrett || (Nr3a_Schachbrett = {}));
;
//# sourceMappingURL=rice.js.map