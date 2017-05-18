//Aufgabe 7
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 13.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert. 

namespace A07_Klassen {
    export class Flower {
        x: number;
        y: number;
        petalColor: string;
        centerColor: string;
        style: number;

        constructor() {
            console.log("flower");
            this.setRandomPosition();
            this.setRandomColor();
            this.setRandomStyle();
            this.draw();
        }

        draw(): void {

            if (this.style == 1) {
                this.drawLittleflower();

            } else {
                this.drawBigflower();
            }
        }

        setRandomStyle(): void {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (580 - 5)) + 20;
            this.y = (Math.random() * (500 - 255)) + 230;
        }

        setRandomColor(): void {
            let colorList: string[] = [
                "#c94dff", "#8db0f2", "#e68a00"
            ];
            this.petalColor = colorList[Math.floor(Math.random() * colorList.length)];
        }

        drawFlowerBig(_x: number, _y: number, _petalColor: string): void {

        //linkes Blatt
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 8, _y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //rechtes Blatt
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 8, _y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //linkes Blatt unten
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 4, _y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //rechtes Blatt oben
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 3, _y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //rechtes Blatt unten
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 4, _y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //linkes Blatt oben
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 5, _y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Blatt Mitte
        crc2.beginPath();
        crc2.fillStyle = "#F7819F";
        crc2.arc(_x + 0, _y + 0, 5.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    drawFlowerLittle(_x: number, _y: number, _centerColor: string, _petalColor: string): void {

        //Blüte
        crc2.fillStyle = _petalColor;
        crc2.beginPath();
        crc2.arc(_x, _y - 5, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x - 5, _y, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 5, _y, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x, _y + 5, 5, 0, 2 * Math.PI);
        crc2.fill();

        //Mitte
        crc2.beginPath();
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = _centerColor;
        crc2.fill();
    }
}
}