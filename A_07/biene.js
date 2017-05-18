//Aufgabe 7
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 13.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert. 
var A07_Klassen;
(function (A07_Klassen) {
    class Bee {
        constructor(_x, _y) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random() * -5 - 1;
            this.y += Math.random() * 6 - 3;
        }
        setRandomStyle() {
            this.size = Math.random() * 3.3 + 3;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        draw() {
            //Kopf
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = "#000000";
            A07_Klassen.crc2.arc(this.x - 1, this.y + 2, this.size, 0, 2 * Math.PI);
            A07_Klassen.crc2.fill();
            //Auge
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.fillStyle = "white";
            A07_Klassen.crc2.arc(this.x - 2, this.y + 1, 1, 0, 2 * Math.PI);
            A07_Klassen.crc2.fill();
            //Körper
            A07_Klassen.crc2.fillStyle = "#000000";
            A07_Klassen.crc2.fillRect(this.x, this.y, 3, 10);
            A07_Klassen.crc2.fillStyle = "yellow";
            A07_Klassen.crc2.fillRect(this.x + 3, this.y, 3, 10);
            A07_Klassen.crc2.fillStyle = "#000000";
            A07_Klassen.crc2.fillRect(this.x + 6, this.y, 3, 10);
            A07_Klassen.crc2.fillStyle = "yellow";
            A07_Klassen.crc2.fillRect(this.x + 9, this.y, 3, 10);
            A07_Klassen.crc2.fillStyle = "#000000";
            A07_Klassen.crc2.fillRect(this.x + 12, this.y, 3, 10);
            //Fühler
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.moveTo(this.x - 2, this.y);
            A07_Klassen.crc2.strokeStyle = "#000000";
            A07_Klassen.crc2.lineTo(this.x - 6, this.y - 6);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.stroke();
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.moveTo(this.x - 2, this.y);
            A07_Klassen.crc2.strokeStyle = "#000000";
            A07_Klassen.crc2.lineTo(this.x - 1, this.y - 6);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.stroke();
            //Stachel
            A07_Klassen.crc2.beginPath();
            A07_Klassen.crc2.moveTo(this.x + 15, this.y + 5);
            A07_Klassen.crc2.strokeStyle = this.color;
            A07_Klassen.crc2.lineTo(this.x + 18, this.y + 5);
            A07_Klassen.crc2.closePath();
            A07_Klassen.crc2.stroke();
        }
    }
    A07_Klassen.Bee = Bee;
})(A07_Klassen || (A07_Klassen = {}));
//# sourceMappingURL=biene.js.map