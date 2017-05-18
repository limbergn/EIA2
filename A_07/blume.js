//Aufgabe 7
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 13.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert. 
var A07_Klassen;
(function (A07_Klassen) {
    class Flower {
        constructor() {
            console.log("flower");
            this.setRandomPosition();
            this.setRandomColor();
            this.setRandomStyle();
            this.draw();
        }
        draw() {
            if (this.style == 1) {
                this.drawLittleflower();
            }
            else {
                this.drawBigflower();
            }
        }
        setRandomStyle() {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }
        setRandomPosition() {
            this.x = (Math.random() * (580 - 5)) + 20;
            this.y = (Math.random() * (500 - 255)) + 230;
        }
        setRandomColor() {
            let colorList = [
                "#c94dff", "#8db0f2", "#e68a00"
            ];
            this.petalColor = colorList[Math.floor(Math.random() * colorList.length)];
        }
        drawBigflower() {
            //linkes Blatt
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = this.petalColor;
            A07_Klassen.crc2.arc(this.x - 8, this.y + 0, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.fill();
            //rechtes Blatt
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = this.petalColor;
            A07_Klassen.crc2.arc(this.x + 8, this.y + 0, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.fill();
            //linkes Blatt unten
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = this.petalColor;
            A07_Klassen.crc2.arc(this.x - 4, this.y + 6, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.fill();
            //rechtes Blatt oben
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = this.petalColor;
            A07_Klassen.crc2.arc(this.x + 3, this.y - 7, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.fill();
            //rechtes Blatt unten
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = this.petalColor;
            A07_Klassen.crc2.arc(this.x + 4, this.y + 6, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.fill();
            //linkes Blatt oben
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = this.petalColor;
            A07_Klassen.crc2.arc(this.x - 5, this.y - 7, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.fill();
            //Blatt Mitte
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = "#331a00";
            A07_Klassen.crc2.arc(this.x + 0, this.y + 0, 5.5, 0, 2 * Math.PI);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.fill();
        }
        drawLittleflower() {
            A07_Klassen.crc2.fillStyle = this.petalColor;
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.arc(this.x, this.y - 5, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.fill();
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.fill();
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.fill();
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.arc(this.x, this.y + 5, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.fill();
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            A07_Klassen.crc2.fillStyle = "#ffffff";
            A07_Klassen.crc2.fill();
        }
    }
    A07_Klassen.Flower = Flower;
})(A07_Klassen || (A07_Klassen = {}));
//# sourceMappingURL=blume.js.map