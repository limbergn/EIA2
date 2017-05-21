namespace L8_Inheritance {
    export class KleineBlume extends Superblume {

        constructor() {
            super();
            console.log("Erzeuge kleine Blume");
        }

        draw(): void {
            //Blüte
        crc2.fillStyle = this.petalColor;
        crc2.beginPath();
        crc2.arc(this.x, this.y - 5, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(this.x + 5, this.y, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(this.x, this.y + 5, 5, 0, 2 * Math.PI);
        crc2.fill();

        //Mitte
        crc2.beginPath();
        crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = this.centerColor;
        crc2.fill();
        }
    }
}