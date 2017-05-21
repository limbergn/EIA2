var L8_Inheritance;
(function (L8_Inheritance) {
    class KleineBlume extends L8_Inheritance.Superblume {
        constructor() {
            super();
            console.log("Erzeuge kleine Blume");
        }
        draw() {
            //Blüte
            L8_Inheritance.crc2.fillStyle = this.petalColor;
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y - 5, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y + 5, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            //Mitte
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fillStyle = this.centerColor;
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.KleineBlume = KleineBlume;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=kleineblume.js.map