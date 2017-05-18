//Aufgabe 7
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 13.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert. 
    
//Aufgabe 7
//Name: Nadine Limberger
//Matrikelnr.: 255346
//Datum: 13.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.Er wurde nicht kopiert und auch nicht diktiert. 
    
namespace A07_Klassen {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    let count: number = 10; //number of beens which start

    let bees: Bee[] = [];
    let flowers: Flower[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergrund
        let b: Background = new Background();

        //Zufallsblumen
        for (var z: number = 0; z < 100; z++) {
            let rf: Flower = new Flower();
        }

        //Canvas-Daten speichern
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Zufallsblumen
        for (let i: number = 0; i < 8; i++) {
            let sf: Flower = new Flower();
            flowers[i] = sf;
            flowers.push(sf);
            console.log(sf);
        }

        //Anfangsposition
        for (let i: number = 0; i < count; i++) {
            var s: Bee = new Bee(635, 310);
            bees[i] = s;
        }

        //Click-/Touchfunktion
        window.setTimeout(animate, 50);
        canvas.addEventListener("click", addnewbee); 
        canvas.addEventListener("touch", addnewbee); 
    }


    function animate(): void {

        for (let k: number = 0; k < flowers.length; k++) {
            let f: Flower = flowers[k];
            f.draw();

        }
        crc2.putImageData(saveBackgroundData, 0, 0);
        
        //loop for moving the bees random in left direction
        for (var i: number = 0; i < count; i++) {
            var s: Bee = bees[i];

            if (s.x < 0) {
                s.x = crc2.canvas.width;
            }
            if (s.y < 0) {
                s.y = crc2.canvas.height;
            }
            if (s.y >= crc2.canvas.height) {
                s.y = 0;
            }
            s.update();
        }
        window.setTimeout(animate, 50);
    }

    //Neue Biene hinzufügen
    function addnewbee(): void {
        var s: Bee = new Bee(550, 810);
        bees.push(s);
        count += 1;
        console.log("neue Biene hinzugefügt");
    }
}