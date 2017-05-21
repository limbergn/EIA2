var L8_Inheritance;
(function (L8_Inheritance) {
    class Hintergrund {
        constructor() {
            //sky
            L8_Inheritance.crc2.fillStyle = "#80b3ff"; //blue
            L8_Inheritance.crc2.fillRect(0, -200, L8_Inheritance.crc2.canvas.width, L8_Inheritance.crc2.canvas.height);
            //field
            L8_Inheritance.crc2.fillStyle = "#009900"; //green
            L8_Inheritance.crc2.fillRect(0, 200, L8_Inheritance.crc2.canvas.width, L8_Inheritance.crc2.canvas.height);
            //function calls
            //mountainBackground
            this.drawMountain(30, 120, "#00ff00", "#737373");
            this.drawMountain(250, 110, "#00ff00", "#737373");
            this.drawMountain(520, 90, "#00ff00", "#737373");
            //mountainForeground
            this.drawMountain(70, 135, "#00ff00", "#8c8c8c");
            this.drawMountain(180, 120, "#00ff00", "#8c8c8c");
            this.drawMountain(320, 130, "#00ff00", "#8c8c8c");
            this.drawMountain(470, 120, "#00ff00", "#8c8c8c");
            this.drawMountain(600, 120, "#00ff00", "#8c8c8c");
            this.drawMountain(730, 120, "#00ff00", "#8c8c8c");
            //clouds
            this.drawCloud(90, 0, 15, "#ffffff");
            this.drawCloud(320, -70, 20, "#ffffff");
            this.drawCloud(490, -20, 14, "#ffffff");
            this.drawCloud(590, 10, 17, "#ffffff");
            //sun
            this.drawSun(690, 10, 50, "#ff8533", "#ffff33");
            //tree
            this.drawTree(680, 190);
            this.drawTree(610, 197);
            this.drawTree(400, 205);
            //bee house
            this.drawBeeHouse(640, 300);
        }
        drawMountain(_x, _y, _strokeColor, _fillColor) {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = _fillColor;
            L8_Inheritance.crc2.strokeStyle = _strokeColor;
            L8_Inheritance.crc2.moveTo(_x - 80, _y + 80);
            L8_Inheritance.crc2.lineTo(_x, _y - 80);
            L8_Inheritance.crc2.lineTo(_x + 80, _y + 80);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
        drawCloud(_x, _y, _radius, _fillColor) {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = _fillColor;
            L8_Inheritance.crc2.arc(_x + 30, _y + 80, _radius, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = _fillColor;
            L8_Inheritance.crc2.arc(_x + 50, _y + 90, _radius, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = _fillColor;
            L8_Inheritance.crc2.arc(_x + 55, _y + 70, _radius, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = _fillColor;
            L8_Inheritance.crc2.arc(_x + 70, _y + 85, _radius, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = _fillColor;
            L8_Inheritance.crc2.arc(_x + 80, _y + 75, _radius, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
        drawSun(_x, _y, _radius, _strokeColor, _fillColor) {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = _fillColor;
            L8_Inheritance.crc2.strokeStyle = _strokeColor;
            L8_Inheritance.crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
        drawBeeHouse(_x, _y) {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#70380f";
            L8_Inheritance.crc2.fillRect(_x - 3, _y + 30, 6, 55);
            L8_Inheritance.crc2.fillRect(_x - 25, _y, 50, 30);
            L8_Inheritance.crc2.moveTo(_x - 25, _y);
            L8_Inheritance.crc2.lineTo(_x, _y - 20);
            L8_Inheritance.crc2.lineTo(_x + 25, _y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            //circle in the middle of the bee house
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#9d4e15";
            L8_Inheritance.crc2.strokeStyle = "#432109";
            L8_Inheritance.crc2.arc(_x, _y + 12, 10, 0, 2 * Math.PI);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
        drawTree(_x, _y) {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#4d2600";
            L8_Inheritance.crc2.strokeStyle = "#0a290a";
            L8_Inheritance.crc2.fillRect(_x - 8, _y, 16, 20);
            L8_Inheritance.crc2.fillStyle = "#145214";
            L8_Inheritance.crc2.moveTo(_x - 50, _y);
            L8_Inheritance.crc2.lineTo(_x, _y - 50);
            L8_Inheritance.crc2.lineTo(_x + 50, _y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#145214";
            L8_Inheritance.crc2.strokeStyle = "#0a290a";
            L8_Inheritance.crc2.moveTo(_x - 40, _y - 30);
            L8_Inheritance.crc2.lineTo(_x, _y - 67);
            L8_Inheritance.crc2.lineTo(_x + 40, _y - 30);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#145214";
            L8_Inheritance.crc2.strokeStyle = "#0a290a";
            L8_Inheritance.crc2.moveTo(_x - 20, _y - 60);
            L8_Inheritance.crc2.lineTo(_x, _y - 80);
            L8_Inheritance.crc2.lineTo(_x + 20, _y - 60);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
        }
    }
    L8_Inheritance.Hintergrund = Hintergrund;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=hintergrund.js.map