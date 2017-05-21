namespace L8_Inheritance {
    export class GroßeBlume extends Superblume {

        constructor() {
            super();
        }

        draw(): void {
            //linkes Blatt
        crc2.beginPath();
        crc2.fillStyle = this.petalColor;
        crc2.arc(this.x - 8, this.y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //rechtes Blatt
        crc2.beginPath();
        crc2.fillStyle = this.petalColor;
        crc2.arc(this.x + 8, this.y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //linkes Blatt unten
        crc2.beginPath();
        crc2.fillStyle = this.petalColor;
        crc2.arc(this.x - 4, this.y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //rechtes Blatt oben
        crc2.beginPath();
        crc2.fillStyle = this.petalColor;
        crc2.arc(this.x + 3, this.y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //rechtes Blatt unten
        crc2.beginPath();
        crc2.fillStyle = this.petalColor;
        crc2.arc(this.x + 4, this.y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //linkes Blatt oben
        crc2.beginPath();
        crc2.fillStyle = this.petalColor;
        crc2.arc(this.x - 5, this.y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Blatt Mitte
        crc2.beginPath();
        crc2.fillStyle = "#F7819F";
        crc2.arc(this.x + 0, this.y + 0, 5.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        }
    }
}