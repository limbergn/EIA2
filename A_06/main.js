// Aufgabe 6
//  Name: Nadine Limberger
// Matrikelnr.: 255346
// Datum: 13.04.2017
//  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. -->
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=m oder 1=w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var strArr;
        strArr = _input.split(","); //Der Input-String soll zerstückelt werden
        if (strArr.length < 5) {
            return "Bitte Eingabe vervollstaendigen";
        }
        //Nun kann auf einzelne Strings innerhalb der Input-String zugegriffen werden und umkonvertiert werden
        var data = {
            matrikel: parseInt(strArr[0]),
            name: strArr[1],
            vorname: strArr[2],
            alter: parseInt(strArr[3]),
            geschlecht: parseInt(strArr[4]) == 0,
            kommentar: strArr[5]
        };
        //dem array students wird die data hinzugefügt
        students.push(data);
        let geschlecht = data.geschlecht ? "m" : "w";
        console.log(data);
        //Die eingegebenen Daten werden untereinander aufgelistet
        return "Ihre Daten wurden gespeichert:" + "\n" + "\nMatrikel: " + data.matrikel + "\nName: " + data.name + "\nVorname: " + data.vorname + "\nAlter: " + data.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + data.kommentar;
    }
    function queryData(_matrikel) {
        for (var z = 0; z < students.length; z++) {
            let geschlecht = students[z].geschlecht ? "m" : "w";
            //Sofern die eingegebene Matrikelnummer mit der eingespeicherten übereinstimmt, werden die Daten der Person angezeigt
            if (students[z].matrikel == _matrikel) {
                console.log("Matrikelnummern sind identisch");
                return "Die Suche ergab folgenden Treffer: " + "\n" + "\nMatrikel: " + students[z].matrikel + "\nName: " + students[z].name + "\nVorname:" + students[z].vorname + "\nAlter: " + students[z].alter + "\nGeschlecht: " + geschlecht + "\nKommentar:" + students[z].kommentar;
            }
        }
        //Falls die eingegebene Matrikelnummer nicht mit der zuvor gespeicherten Matrikelnummer übereinstimmt
        console.log("Matrikelnummern unterscheiden sich");
        return "Ihre Suche ergab leider keinen Treffer, kontrollieren Sie bitte Ihre Eingabe.";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main.js.map