namespace L8_Inheritance {
    export class Honigbiene extends Superbiene {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.04;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }

        //Position Target
        setRandomTargetPosition(): void {
            let randomtargetflower: number = Math.round(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[randomtargetflower].x;
            this.yTarget = flowers[randomtargetflower].y;
        }

        setStartPosition(): void {
            this.x = 635;
            this.y = 310;
        }

        //Biene zum Target fliegen lassen
        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
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