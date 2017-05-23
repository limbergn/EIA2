namespace L8_Inheritance {
    export class Hintergrund { 
        constructor() {

            //Himmel
            crc2.fillStyle = "#FFDAB9";
            crc2.fillRect(0, -200, crc2.canvas.width, crc2.canvas.height);

            //Wiese
            crc2.fillStyle = "#32Cd32";
            crc2.fillRect(0, 200, crc2.canvas.width, crc2.canvas.height);

            //Berge
            this.drawMountain(100, 480, "#00ff00", "#808080");
            this.drawMountain(480, 480, "#00ff00", "#808080");
            this.drawMountain(600, 480, "#00ff00", "#808080");

            this.drawMountain(250, 480, "#00ff00", "#a9a9a9");

            //Wolken
            this.drawCloud(90, 0, 15, "#FFFAF0");
            this.drawCloud(320, -70, 20, "#FFFAF0");
            this.drawCloud(490, -20, 14, "#FFFAF0");
            this.drawCloud(590, 10, 17, "#FFFAF0");
            this.drawCloud(270, 0, 15, "#FFFAF0");


            //Sonne
            this.drawSun(690, 10, 50, "#FF8C00", "#FF8C00");



            //Bienenstock
            this.drawBienenstock(640, 300);


        }

        drawMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x - 120, _y + 120);
            crc2.lineTo(_x, _y - 120);
            crc2.lineTo(_x + 120, _y + 120);
            crc2.closePath();
            crc2.fill();
        }

        drawCloud(_x: number, _y: number, _radius: number, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x + 50, _y + 80, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x + 50, _y + 90, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x + 55, _y + 70, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x + 70, _y + 85, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x + 80, _y + 75, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        drawSun(_x: number, _y: number, _radius: number, _strokeColor: string, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawBienenstock(_x: number, _y: number, _fillColor: string, _strokeColor: string): void {

            //Dach
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x, _y, 25, 0, Math.PI, true);
            crc2.closePath();
            crc2.fill();

            //Körper
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.fillRect(_x - 25, _y, 50, 30);
            crc2.closePath();
            crc2.fill();

            //Eingang
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