namespace L8_Inheritance {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let saveBackgroundData: ImageData;
    let count: number = 10; //Summe der Bienen zu Beginn

    export let bees: Superbiene[] = [];
    export let flowers: Superblume[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergrund
        let b: Hintergrund = new Hintergrund();

        //Zufallsblumen
        for (var z: number = 0; z < 70; z++) {
            let rf: GroßeBlume = new GroßeBlume();
            rf.draw();
        }

        //Canvas speichern
        saveBackgroundData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Zielblumen der Honigbienen 
        for (let i: number = 0; i < 10; i++) {
            let sf: KleineBlume = new KleineBlume(); 
            flowers.push(sf);
            console.log(sf);
        }

        //Anfangsposition
        for (let i: number = 0; i < count; i++) {
            //Bienen fliegen gezielt zu einer bestimmten Blume
            var s: Honigbiene = new Honigbiene(550, 810);
            bees.push(s);
            //Bienen fliegen wie gewohnt von rechts nach links
            var n: Biene = new Biene(550, 810);
            bees.push(n);
        }

        window.setTimeout(animate, 50);
        
        //Click-/Touchfunktion
        canvas.addEventListener("click", addnewbee); 
        canvas.addEventListener("touch", addnewbee); 
    }

    function animate(): void {
        crc2.putImageData(saveBackgroundData, 0, 0);

        for (let k: number = 0; k < flowers.length; k++) {
            flowers[k].draw();
        }

        //Schleife für das Bewegen der Bienen nach links
        for (var i: number = 0; i < count; i++) {
            var s: Superbiene = bees[i];

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

    //neue Biene hinzufügen
    function addnewbee(): void {
        var s: Honigbiene = new Honigbiene(550, 810);
        bees.push(s);
        count += 1;
        console.log("neue Biene hinzugefügt");
    }
}