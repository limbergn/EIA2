var L8_Inheritance;
(function (L8_Inheritance) {
    class Honigbiene extends L8_Inheritance.Superbiene {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.04;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }
        //Position Target
        setRandomTargetPosition() {
            let randomtargetflower = Math.round(Math.random() * (L8_Inheritance.flowers.length - 1));
            this.xTarget = L8_Inheritance.flowers[randomtargetflower].x;
            this.yTarget = L8_Inheritance.flowers[randomtargetflower].y;
        }
        setStartPosition() {
            this.x = 635;
            this.y = 310;
        }
        //Biene zum Target fliegen lassen
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        draw() {
            //Kopf
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.arc(this.x - 1, this.y + 2, this.size, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            //Auge
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "white";
            L8_Inheritance.crc2.arc(this.x - 2, this.y + 1, 1, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
            //Körper
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.fillRect(this.x, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "yellow";
            L8_Inheritance.crc2.fillRect(this.x + 3, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.fillRect(this.x + 6, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "yellow";
            L8_Inheritance.crc2.fillRect(this.x + 9, this.y, 3, 10);
            L8_Inheritance.crc2.fillStyle = "#000000";
            L8_Inheritance.crc2.fillRect(this.x + 12, this.y, 3, 10);
            //Fühler
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x - 2, this.y);
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.lineTo(this.x - 6, this.y - 6);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x - 2, this.y);
            L8_Inheritance.crc2.strokeStyle = "#000000";
            L8_Inheritance.crc2.lineTo(this.x - 1, this.y - 6);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
            //Stachel
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.moveTo(this.x + 15, this.y + 5);
            L8_Inheritance.crc2.strokeStyle = this.color;
            L8_Inheritance.crc2.lineTo(this.x + 18, this.y + 5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.stroke();
        }
    }
    L8_Inheritance.Honigbiene = Honigbiene;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=honigbiene.js.map