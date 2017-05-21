var L8_Inheritance;
(function (L8_Inheritance) {
    class GroßeBlume extends L8_Inheritance.Superblume {
        constructor() {
            super();
        }
        draw() {
            //linkes Blatt
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x - 8, this.y + 0, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //rechtes Blatt
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x + 8, this.y + 0, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //linkes Blatt unten
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x - 4, this.y + 6, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //rechtes Blatt oben
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x + 3, this.y - 7, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //rechtes Blatt unten
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x + 4, this.y + 6, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //linkes Blatt oben
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.arc(this.x - 5, this.y - 7, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //Blatt Mitte
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#F7819F";
            L8_Inheritance.crc2.arc(this.x + 0, this.y + 0, 5.5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.GroßeBlume = GroßeBlume;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=großeblume.js.map