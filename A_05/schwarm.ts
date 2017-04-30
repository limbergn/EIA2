// Aufgabe 5
// Name:Nadine Limberger
// Matrikelnr.: 255346
//  Datum: 13.04.2017
//  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 

namespace Aufgabe5 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    let x: number[] = [];
    let y: number[] = [];
    let count: number = 10;
    let saveBackground: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Wiese
        crc2.beginPath();
        crc2.fillStyle = "#32Cd32";
        crc2.rect(0, 0, 1920, 1080);
        crc2.fill();
        crc2.closePath();

        //Himmel
        crc2.beginPath();
        crc2.fillStyle = "#FFDAB9";
        crc2.rect(0, 0, 1920, 600);
        crc2.fill();
        crc2.closePath();

        //Berge
        drawMountain(100, 600);
        drawMountain(480, 600);
        drawMountain(600, 600);

        function drawMountain(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#808080";
            crc2.moveTo(_x - 200, _y);
            crc2.lineTo(_x, _y - 350);
            crc2.lineTo(_x + 200, _y);
            crc2.closePath();
            crc2.fill();
        }

        drawMountainSmall(250, 600);

        function drawMountainSmall(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#a9a9a9";
            crc2.moveTo(_x - 150, _y);
            crc2.lineTo(_x, _y - 300);
            crc2.lineTo(_x + 150, _y);
            crc2.closePath();
            crc2.fill();
        }


        // Bergspitzen
        drawMountainTop(100, 300);
        drawMountainTop(600, 300);

        function drawMountainTop(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#FFFaFa";
            crc2.moveTo(_x - 30, _y);
            crc2.lineTo(_x, _y - 50);
            crc2.lineTo(_x + 30, _y);
            crc2.closePath();
            crc2.fill();
        }

        drawMountainTopSmall(250, 350);

        function drawMountainTopSmall(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#F5F5F5";
            crc2.moveTo(_x - 25, _y);
            crc2.lineTo(_x, _y - 50);
            crc2.lineTo(_x + 25, _y);
            crc2.closePath();
            crc2.fill();
        }


        // Sonne

        drawSun(800, 600);

        function drawSun(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#FF8C00";
            crc2.arc(1200, 600, 200, 0, Math.PI * 3, true);
            crc2.closePath();
            crc2.fill();
        }


        // Wolken
        drawCloud(350, 60, 100, 180, 370, "#FFFAF0", "#FFFAF0");
        drawCloud(900, 50, 100, 180, 370, "#fffaf0", "#fffaf0");
        drawCloud(1290, 70, 100, 180, 370, "#FFFAF0", "#FFFAF0");

        function drawCloud(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: any, _fillColor: any): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 100, 180, 470);
            crc2.arc(_x + 100, _y - 50, 100, 180, 470);
            crc2.arc(_x + 120, _y + 50, 100, 180, 270);
            crc2.arc(_x + 270, _y, 100, 180, 470);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        
        drawbeehive(550,850, "#8A4B08","#000000");
        drawFlower(900, 900);
        drawFlower(400, 700);
        drawFlower(100, 800);
        drawFlower(700, 1000);
        drawTulip(1000, 700, "#F7819F");
        drawTulip(650, 850, "#F7819F");
        drawTulip(1400, 1000, "#F7819F");
        drawTulip(1600, 900, "#F7819F");
        drawBlume(1700, 700, "#008000", "#FE9A2E");
        drawBlume(170, 700, "#008000", "#FE9A2E");
        drawBlume(1750, 1000, "#008000", "#FE9A2E");
        drawBlume(1300, 800, "#008000", "#FE9A2E");




        //Hintergrund speichern
        saveBackground = crc2.getImageData(0, 0, 1920, 1080);

        //Anfangsposition der Bienen
        for (let i: number = 0; i < count; i++) {
            x[i] = 558;
            y[i] = 810;
        }

        //Animation der Bienen
        function animate(): void {
            //Hintergrungbild das gespeichert wurde, wird aufgerufen
            crc2.putImageData(saveBackground, 0, 0);

            for (let i: number = 0; i < count; i++) {
                x[i] += Math.random() * 1 - 2;
                y[i] += Math.random() * 4 - 2;

                //Malen der Bienen an der neuen Position
                drawBee(x[i], y[i], "#FFFF00", "#000000");

                //Bienen erscheinen am gegenüberliegen Rand
                if (x[i] >= 1920)
                    x[i] = 0;

                if (y[i] <= 0)
                    y[i] = 1080;

                if (x[i] < 0)
                    x[i] = 1920;

                if (y[i] > 1080)
                    y[i] = 0;
            }
            window.setTimeout(animate, 22);
        }

        //Anfangsposition der neuen Biene
        function newBee(_event: Event): void {
            x.push(558);
            y.push(820);
            count++;
        }
        window.setTimeout(animate, 22);
        canvas.addEventListener("click", newBee); //Bei Click auf den Canvas erscheint eine neue Biene
        canvas.addEventListener("touch", newBee); //Bei Touch auf den Canvas erscheint eine neue Biene

        // Blumen


        function drawBlume(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 50);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x + 10, _y - 30);
            crc2.lineTo(_x, _y);
            crc2.lineTo(_x - 10, _y - 30);
            crc2.closePath();
            crc2.stroke();
            //Bl�te
            crc2.beginPath();
            crc2.arc(_x, _y - 50, 14, 0 * Math.PI, 1 * Math.PI);
            crc2.lineTo(_x - 10, _y - 60);
            crc2.lineTo(_x - 5, _y - 52);
            crc2.lineTo(_x, _y - 60);
            crc2.lineTo(_x + 5, _y - 52);
            crc2.lineTo(_x + 10, _y - 60);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();
        }


        function drawTulip(_x: number, _y: number, _color: string): void {
            //Stiel
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 5, _y - 70);
            crc2.lineTo(_x + 10, _y - 70);
            crc2.lineTo(_x + 6, _y);
            crc2.closePath();
            crc2.fillStyle = "#008000";
            crc2.fill();
            //Tulip
            crc2.beginPath();
            crc2.fillStyle = _color;
            crc2.moveTo(_x - 7, _y - 68);
            crc2.lineTo(_x - 5, _y - 90);
            crc2.lineTo(_x + 2, _y - 76);
            crc2.lineTo(_x + 8.5, _y - 90);
            crc2.lineTo(_x + 15, _y - 76);
            crc2.lineTo(_x + 21.5, _y - 90);
            crc2.lineTo(_x + 23, _y - 69);
            crc2.arc(_x + 8, _y - 70, 15, 0, 1 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }


        function drawFlower(_x: number, _y: number): void {
            //Blütenblätter
            crc2.beginPath();
            crc2.fillStyle = "#81DAF5";
            crc2.arc(_x + 10, _y + 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#81DAF5";
            crc2.arc(_x + 10, _y - 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#81DAF5";
            crc2.arc(_x - 10, _y + 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#81DAF5";
            crc2.arc(_x - 10, _y - 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.arc(_x, _y, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //Stengel
            crc2.beginPath();
            crc2.strokeStyle =
                crc2.fillStyle = "#228B22";
            crc2.moveTo(_x, _y + 10);
            crc2.lineTo(_x, _y + 40);
            crc2.lineTo(_x + 10, _y + 20);
            crc2.lineTo(_x, _y + 30);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }


        function drawbeehive(_x: number, _y: number, _fillColor: string, _fillColor2: string): void {
            //Stiel
            crc2.beginPath();
            crc2.fillRect(_x, _y, 10, 90);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();
            //Rechteck
            crc2.beginPath();
            crc2.fillRect(_x - 30, _y - 60, 80, 70);
            crc2.closePath();
            crc2.fillStyle = _fillColor;
            crc2.fill();
            //Kreis
            crc2.beginPath();
            crc2.arc(_x + 8, _y - 27, 16, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillColor2;
            crc2.fill();
        }

        function drawBee(x: number, y: number, _fillColor1: string, _fillColor2: string): void {
            crc2.beginPath();
            crc2.fillRect(x, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor1;
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x - 3, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor1;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x - 7, y + 5, 3, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = _fillColor2;
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x + 6, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor1;
            crc2.fill();
            crc2.beginPath();
            crc2.fillRect(x + 3, y, 3, 9);
            crc2.closePath();
            crc2.fillStyle = _fillColor2;
            crc2.fill();
        }
    }
}