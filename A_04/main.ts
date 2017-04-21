// Aufgabe 4
// Name:Nadine Limberger
// Matrikelnr.: 255346
// Datum: 13.04.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 

document.addEventListener("DOMContentLoaded", function(): void {
    let canvas: HTMLCanvasElement;
    canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D;
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

    for (let i: number = 0; i < 25; i++) {
        let randomFlower: number = Math.floor((Math.random() * 3) + 0);
        let _x: number = (Math.random() * (1800 - 0)) + 0;
        let _y: number = (Math.random() * (1050 - 650)) + 620;
        let _strokeColor: string = "#088A29";
        let _fillColor: string = "#FFBF00";
        let _color: string = "#FA5858";

        switch (randomFlower) {
            case 0:
                drawBlume(_x, _y, _strokeColor, _fillColor);
                break;
            case 1:
                drawTulip(_x, _y, _color);
                break;
            case 2:
                drawFlower(_x, _y);
                break;
        }
    }
});