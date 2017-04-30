// Aufgabe 5
// Name:Nadine Limberger
// Matrikelnr.: 255346
//  Datum: 13.04.2017
//  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
var A05_Bienenschwarm;
(function (A05_Bienenschwarm) {
    window.addEventListener("load", init);
    let crc2;
    let x = [];
    let y = [];
    let saveBackground;
    let count = 10;
    function init(_event) {
        let canvas;
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
        function drawMountain(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "#808080";
            crc2.moveTo(_x - 200, _y);
            crc2.lineTo(_x, _y - 350);
            crc2.lineTo(_x + 200, _y);
            crc2.closePath();
            crc2.fill();
        }
        drawMountainSmall(250, 600);
        function drawMountainSmall(_x, _y) {
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
        function drawMountainTop(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "#FFFaFa";
            crc2.moveTo(_x - 30, _y);
            crc2.lineTo(_x, _y - 50);
            crc2.lineTo(_x + 30, _y);
            crc2.closePath();
            crc2.fill();
        }
        drawMountainTopSmall(250, 350);
        function drawMountainTopSmall(_x, _y) {
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
        function drawSun(_x, _y) {
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
        function drawCloud(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
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
        drawBienenstock(550, 810, "#DEB887", "#8B4513");
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
        saveBackground = crc2.getImageData(0, 0, 1920, 1080);
        //Animation Bienen
        for (let i = 0; i < count; i++) {
            x[i] = 558;
            y[i] = 810;
        }
        function animate() {
            crc2.putImageData(saveBackground, 0, 0);
            for (let i = 0; i < count; i++) {
                x[i] += Math.random() * 1 - 2;
                y[i] += Math.random() * 4 - 2;
                drawBiene(x[i], y[i], "#FFFF00", "#000000");
                //WENN Bienen Canvas verlassen, DANN starten sie von gegenüber
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
        function neueBiene(_event) {
            x.push(558);
            y.push(820);
            count++;
        }
        //Click-/Touchevent
        window.setTimeout(animate, 22);
        canvas.addEventListener("click", neueBiene);
        canvas.addEventListener("touch", neueBiene);
        // Blumen
        function drawBlume(_x, _y, _strokeColor, _fillColor) {
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
            //Blüte
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
        function drawTulip(_x, _y, _color) {
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
        function drawFlower(_x, _y) {
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
        function drawBienenstock(_x, _y, _fillColor, _strokeColor) {
            // Dach
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x, _y, 50, 0, Math.PI, true);
            crc2.closePath();
            crc2.fill();
            //Körper
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.fillRect(_x - 50, _y, 100, 60);
            crc2.closePath();
            crc2.fill();
            //Eingang
            crc2.beginPath();
            crc2.strokeStyle = "#201500";
            crc2.fillStyle = "#FFD39B";
            crc2.arc(550, 820, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        function drawBiene(_x, _y, _fillColor, _strokeColor) {
            //Flügel
            crc2.beginPath();
            crc2.fillStyle = "#B9FFFF";
            crc2.arc(_x + 1, _y - 8, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#B9FFFF";
            crc2.arc(_x + 9, _y + 3, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            // Kopf
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(_x - 1, _y + 2, 5, 0, 2 * Math.PI);
            crc2.fill();
            // Auge
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(_x - 2, _y + 1, 1, 0, 2 * Math.PI);
            crc2.fill();
            // Körper
            crc2.fillStyle = "#000000";
            crc2.fillRect(_x, _y, 3, 10);
            crc2.fillStyle = "yellow";
            crc2.fillRect(_x + 3, _y, 3, 10);
            crc2.fillStyle = "#000000";
            crc2.fillRect(_x + 6, _y, 3, 10);
            crc2.fillStyle = "yellow";
            crc2.fillRect(_x + 9, _y, 3, 10);
            crc2.fillStyle = "#000000";
            crc2.fillRect(_x + 12, _y, 3, 10);
            //Fühler
            crc2.beginPath();
            crc2.moveTo(_x - 2, _y);
            crc2.strokeStyle = "#000000";
            crc2.lineTo(_x - 6, _y - 6);
            crc2.closePath();
            crc2.stroke();
            //Fühler 2
            crc2.beginPath();
            crc2.moveTo(_x - 2, _y);
            crc2.strokeStyle = "#000000";
            crc2.lineTo(_x - 1, _y - 6);
            crc2.closePath();
            crc2.stroke();
            //Stachel
            crc2.beginPath();
            crc2.moveTo(_x + 15, _y + 5);
            crc2.strokeStyle = "#000000";
            crc2.lineTo(_x + 18, _y + 5);
            crc2.closePath();
            crc2.stroke();
        }
    }
})(A05_Bienenschwarm || (A05_Bienenschwarm = {}));
//# sourceMappingURL=schwarm.js.map