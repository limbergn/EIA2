namespace L8_Inheritance {
    export class Biene extends Superbiene {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }
        
        //von rechts nach links
        move(): void {
            this.x += Math.random() * -5 - 1;
            this.y += Math.random() * 6 - 3;
        }

        draw(): void {
            //Kopf
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x - 1, this.y + 2, this.size, 0, 2 * Math.PI);
            crc2.fill();

            //Auge
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(this.x - 2, this.y + 1, 1, 0, 2 * Math.PI);
            crc2.fill();

            //Körper
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x, this.y, 3, 10);

            crc2.fillStyle = "yellow";
            crc2.fillRect(this.x + 3, this.y, 3, 10);

            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x + 6, this.y, 3, 10);

            crc2.fillStyle = "yellow";
            crc2.fillRect(this.x + 9, this.y, 3, 10);

            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x + 12, this.y, 3, 10);

            //Fühler
            crc2.beginPath();
            crc2.moveTo(this.x - 2, this.y);
            crc2.strokeStyle = "#000000";
            crc2.lineTo(this.x - 6, this.y - 6);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 2, this.y);
            crc2.strokeStyle = "#000000";
            crc2.lineTo(this.x - 1, this.y - 6);
            crc2.closePath();
            crc2.stroke();

            //Stachel
            crc2.beginPath();
            crc2.moveTo(this.x + 15, this.y + 5);
            crc2.strokeStyle = this.color;
            crc2.lineTo(this.x + 18, this.y + 5);
            crc2.closePath();
            crc2.stroke();

        }
    }
}