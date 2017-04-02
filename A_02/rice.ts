document.addEventListener('DOMContentLoaded', function (): void {
    var i: number = 0;
    var line: number = 0;
    var rice: number = 1;
    for (i = 0; i < 64; i++) {
        var div: string = document.createElement("div");
        div.innerText = "" + rice;
        rice = rice * 2;
        document.body.appendChild(div);
        if (i % 8 == 0) {
            line = line + 1;
        }
        if (line % 2 == 0) {
            if (i % 2 != 0) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
            else {
                div.style.backgroundColor = "white";
            }
        }
        else {
            if (i % 2 != 0) {
                div.style.backgroundColor = "white";
            }
            else {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }};