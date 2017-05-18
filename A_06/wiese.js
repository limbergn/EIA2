var A6_Interface;
(function (A6_Interface) {
    window.addEventListener("load", init);
    let crc2;
    let colorList = [
        "#c94dff", "#8db0f2", "#e68a00"
    ];
    let saveBackgroundData;
    let squares = [];
    let count = 10; //Bienenanzahl bei Beginn
    function init(_event) {
        console.log("CanvasWindow");
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let bild;
        bild = document.getElementsByTagName("img")[0];
        //Himmel
        crc2.fillStyle = "#FFDAB9";
        crc2.fillRect(0, -400, canvas.width, canvas.height); //-200
        //Wiese
        crc2.fillStyle = "#32Cd32"; //
        crc2.fillRect(0, 600, canvas.width, canvas.height); //200
        //Berge
        drawMountain(100, 480, "#00ff00", "#808080");
        drawMountain(480, 480, "#00ff00", "#808080");
        drawMountain(600, 480, "#00ff00", "#808080");
        drawMountain(250, 480, "#00ff00", "#a9a9a9");
        //Wolken
        drawCloud(90, 0, 15, "#FFFAF0");
        drawCloud(320, -70, 20, "#FFFAF0");
        drawCloud(490, -20, 14, "#FFFAF0");
        drawCloud(590, 10, 17, "#FFFAF0");
        drawCloud(270, 0, 15, "#FFFAF0");
        //sun
        drawSun(1000, 150, 100, "#FF8C00", "#FF8C00");
        //little flower with four leafes
        drawFlowerLittle(50, 700, "#e6b800", "#ffffff");
        drawFlowerLittle(400, 1000, "#e6b800", "#ffffff");
        //big flower with six leafes
        drawFlowerBig(270, 900, "#ffff00");
        drawFlowerBig(500, 700, "#ffff00");
        drawFlowerBig(130, 800, "#00ace6");
        drawFlowerBig(390, 800, "#00ace6");
        drawFlowerBig(610, 900, "#00ace6");
        //Zufallsposition für Schleifen
        for (var z = 0; z < 100; z++) {
            var xRandom = (Math.random() * (1620 - 5)) + 10;
            var yRandom = (Math.random() * (1000 - 255)) + 630;
            var colorRandom = colorList[Math.floor(Math.random() * colorList.length)];
            var flowerRandom = Math.floor((Math.random() * 2)) + 1;
            if (flowerRandom == 1) {
                drawFlowerLittle(xRandom, yRandom, "#ffffff", colorRandom);
            }
            else {
                drawFlowerBig(xRandom, yRandom, colorRandom);
            }
        }
        //Canvas-Daten speichern
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Anfangsposition
        for (let i = 0; i < count; i++) {
            var s = { x: 0, y: 0, size: 0, color: "" };
            s.x = 550;
            s.y = 810;
            s.size = Math.random() * 3.3 + 3;
            s.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            squares[i] = s;
        }
        window.setTimeout(animate, 50);
        //Click-/Touchfunktion
        canvas.addEventListener("click", addnewbee);
        canvas.addEventListener("touch", addnewbee);
    }
    function animate() {
        crc2.putImageData(saveBackgroundData, 0, 0);
        //Schleife, um Bienen nach link zu bewegen
        for (var i = 0; i < count; i++) {
            var s = squares[i];
            s.x += Math.random() * -5 - 1;
            s.y += Math.random() * 6 - 3;
            if (s.x < 0) {
                s.x = crc2.canvas.width;
            }
            if (s.y < 0) {
                s.y = crc2.canvas.height;
            }
            if (s.y >= crc2.canvas.height) {
                s.y = 0;
            }
            drawBee(s);
        }
        window.setTimeout(animate, 50);
    }
    //neue Biene hizufügen
    function addnewbee(_event) {
        squares.push({ x: 550, y: 810, color: "hsl(" + Math.random() * 360 + ", 100%, 50%)", size: Math.random() * 3.3 + 3 });
        count += 1;
    }
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 120, _y + 120);
        crc2.lineTo(_x, _y - 120);
        crc2.lineTo(_x + 120, _y + 120);
        crc2.closePath();
        crc2.fill();
    }
    function drawCloud(_x, _y, _radius, _fillColor) {
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
    function drawSun(_x, _y, _radius, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFlowerBig(_x, _y, _petalColor) {
        //leafe left
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 8, _y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //leafe right
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 8, _y + 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //leafe bottom left
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 4, _y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //leafe top right
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 3, _y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //leafe bottom right
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x + 4, _y + 6, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //leafe top left
        crc2.beginPath();
        crc2.fillStyle = _petalColor;
        crc2.arc(_x - 5, _y - 7, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //leafe center
        crc2.beginPath();
        crc2.fillStyle = "#F7819F";
        crc2.arc(_x + 0, _y + 0, 5.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawFlowerLittle(_x, _y, _centerColor, _petalColor) {
        //petals
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
        //center
        crc2.beginPath();
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = _centerColor;
        crc2.fill();
    }
    function drawBienenstock(_x, _y, _fillColor, _strokeColor) {
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
    function drawBee(_s) {
        //Kopf
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_s.x - 1, _s.y + 2, _s.size, 0, 2 * Math.PI);
        crc2.fill();
        //Auge
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(_s.x - 2, _s.y + 1, 1, 0, 2 * Math.PI);
        crc2.fill();
        //Körper
        crc2.fillStyle = "#000000";
        crc2.fillRect(_s.x, _s.y, 3, 10);
        crc2.fillStyle = "yellow";
        crc2.fillRect(_s.x + 3, _s.y, 3, 10);
        crc2.fillStyle = "#000000";
        crc2.fillRect(_s.x + 6, _s.y, 3, 10);
        crc2.fillStyle = "yellow";
        crc2.fillRect(_s.x + 9, _s.y, 3, 10);
        crc2.fillStyle = "#000000";
        crc2.fillRect(_s.x + 12, _s.y, 3, 10);
        //Fühler 
        crc2.beginPath();
        crc2.moveTo(_s.x - 2, _s.y);
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_s.x - 6, _s.y - 6);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_s.x - 2, _s.y);
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_s.x - 1, _s.y - 6);
        crc2.closePath();
        crc2.stroke();
        //Stachel
        crc2.beginPath();
        crc2.moveTo(_s.x + 15, _s.y + 5);
        crc2.strokeStyle = _s.color;
        crc2.lineTo(_s.x + 18, _s.y + 5);
        crc2.closePath();
        crc2.stroke();
    }
})(A6_Interface || (A6_Interface = {}));
//# sourceMappingURL=wiese.js.map