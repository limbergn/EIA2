window.addEventListener("load", init);
export let crc2: CanvasRenderingContext2D;
export let canvas: HTMLCanvasElement;
let bees: Bienen[] = [];
let n: number = 10;
let imgData: ImageData;

function init(_event: Event): void {
    let y: number = 0;
    let x: number = 0;
    let fillColor: string = "#A9F5F2";
    let b: Background = new Background(x, y, fillColor);
    let f: Flower = new Flower(x, y);

    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");

    b.drawBackground();
    b.drawSun();
    b.drawWiese();
    b.drawMountain1();
    b.drawMountain2();
    b.drawIce1();
    b.drawIce2();
    b.drawBienenkorb();

    // zufällige Blumen
    f.setrandomblume();

    imgData = crc2.getImageData(0, 0, 1920, 1080);

    // Koordinaten der Öffnung des Bienenkorbs

    for (let i: number = 0; i < n; i++) {
        let s: Bienen = new Bienen(550, 820, "yellow", "#00000", (Math.random() * 2));
        s.setPosition();
        s.setStyle();
        s.move();
        bees[i] = s;
    }

    window.setTimeout(animate, 20);

    // Click-/Touchfunktion
    canvas.addEventListener("click", fuegeEineBieneDazu);
    canvas.addEventListener("touch", fuegeEineBieneDazu);
}

// Animation der Bienen
function animate(): void {
    crc2.putImageData(imgData, 0, 0);
    for (let i: number = 0; i < bees.length; i++) {
        let s: Bienen = bees[i];
        s.animate();
        s.drawBee();
    }
    window.setTimeout(animate, 20);
}

function fuegeEineBieneDazu(_event: Event): void {
    let bienen: Bienen = new Bienen(550, 820, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "#B9FFFF", (Math.random() * 2));
    bees.push(bienen);
    n++;
}