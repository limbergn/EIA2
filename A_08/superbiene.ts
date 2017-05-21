namespace L8_Inheritance {
    export class Superbiene {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {}

        setRandomStyle(): void {
            this.size = Math.random() * 3.3 + 3;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        draw(): void {}
    }
}