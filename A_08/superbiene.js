var L8_Inheritance;
(function (L8_Inheritance) {
    class Superbiene {
        constructor(_x, _y) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() { }
        setRandomStyle() {
            this.size = Math.random() * 3.3 + 3;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        draw() { }
    }
    L8_Inheritance.Superbiene = Superbiene;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=superbiene.js.map