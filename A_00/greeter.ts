/*Aufgabe: 0
Name: Nadine Limberger
Matrikel: 255438
Datum: 20.03.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

document.addEventListener("DOMContentLoaded", function (): void {
    var name: string = prompt("Wie heißt du? :-)");
    var greeting: string = "Ich wünsche dir einen schönen Tag ";
    document.body.innerHTML = greeting + name;
});