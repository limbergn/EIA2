namespace L7_Classes {
    export class Background {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;

        constructor(_x: number, _y: number, _fillColor: string) {
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;
        }
        
        drawBackground(): void {
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.fillRect(this.x, this.y, 1920, 1080);
            crc2.moveTo(0, 0);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
        }
        
        drawSun(): void {
            crc2.beginPath();
            crc2.fillStyle = "#FF8C00";
            crc2.arc(1200, 600, 200, 0, 3 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        
        drawWiese(): void {
            crc2.beginPath();
            crc2.fillStyle = "#32Cd32";
            crc2.fillRect(0, 1920, 1080, 1080);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 1080);
            crc2.closePath();
            crc2.stroke();
        }
        
        drawMountain1(): void { 
            crc2.beginPath();
            crc2.fillStyle = "#888888";
            crc2.strokeStyle = "#888888";
            crc2.moveTo(100, 600);
            crc2.lineTo(100 - 200, 600 - 350);
            crc2.lineTo(100 + 200, 600);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        
        drawMountain2(): void {
            crc2.beginPath();
            crc2.fillStyle = "#888888";
            crc2.strokeStyle = "#888888";
            crc2.moveTo(0, 170);
            crc2.lineTo(0 + 60, 170 - 130);
            crc2.lineTo(0 + 120, 170);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        
        drawBienenkorb(): void {
            //oberer Teil
            crc2.beginPath();
            crc2.fillStyle = "#E8AE00";
            crc2.arc(20, 190, 25, 0, Math.PI, true);
            crc2.closePath();
            crc2.fill();

            //unterer Teil
            crc2.beginPath();
            crc2.fillStyle = "#E8AE00";
            crc2.fillRect(20 - 25, 190, 50, 30);
            crc2.closePath();
            crc2.fill();

            //Bienenkorb Öffnung
            crc2.beginPath();
            crc2.strokeStyle = "#201500";
            crc2.fillStyle = "#201500";
            crc2.arc(25, 210, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}