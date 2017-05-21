var L8_Inheritance;
(function (L8_Inheritance) {
    class Superblume {
        constructor() {
            this.setRandomPosition();
            this.setRandomColor();
            this.setRandomStyle();
        }
        draw() { }
        setRandomStyle() {
            this.style = Math.floor((Math.random() * 2)) + 1;
        }
        setRandomPosition() {
            this.x = (Math.random() * (580 - 5)) + 20;
            this.y = (Math.random() * (500 - 255)) + 230;
        }
        setRandomColor() {
            let colorList = [
                "#c94dff", "#8db0f2", "#e68a00"
            ];
            this.petalColor = colorList[Math.floor(Math.random() * colorList.length)];
        }
    }
    L8_Inheritance.Superblume = Superblume;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=superblume.js.map