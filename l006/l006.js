console.log("reeeee");

let button = document.getElementById("meinButton");
let textAnzeige = document.getElementById("textAnzeige");

//Was soll passieren, wenn man den Button klickt?
button.addEventListener("click",function() {
    console.log("Button wurde geklickt!");
    textAnzeige.textContent = "Du hast den Button gedrückt!";

    meinButton.textContent = "geklickt";
});



let eingabeFeld = document.getElementById("name_in");
let hi_Button = document.getElementById("HI_Button");
let text_Out = document.getElementById("ausgabeText");

//Wenn hi-butten gklickt wird:
hi_Button.addEventListener("click", function() {
    let name = eingabeFeld.value;

    if (name.trim() === "") {
        ausgabeText.textContent = "Bitte gib deinen Namen ein!";
    } else { 
        ausgabeText.textContent = "Hallo " + name + ", schön dich zu sehe!";
    }
}); 



    // Zufallszahl erzeugen zwischen 1 und 10
let geheimeZahl = Math.floor(Math.random() * 10) + 1;
console.log("Geheime Zahl ist (nur zum Testen):", geheimeZahl);

let rateEingabe = document.getElementById("rateEingabe");
let rateButton = document.getElementById("rateButton");
let rateAusgabe = document.getElementById("rateAusgabe");

rateButton.addEventListener("click", function () {
    let benutzerZahl = Number(rateEingabe.value);
    
    if (benutzerZahl === geheimeZahl) {
        rateAusgabe.textContent = "🎉 Richtig! Du hast die geheime Zahl erraten!";
    } else if (benutzerZahl < geheimeZahl) {
        rateAusgabe.textContent = "⏫ Die Zahl ist größer!";
    } else if (benutzerZahl > geheimeZahl) {
        rateAusgabe.textContent = "⏬ Die Zahl ist kleiner!";
    } else {
        rateAusgabe.textContent = "⚠️ Bitte gib eine gültige Zahl ein.";
    }
});


restartNum.addEventListener("click", function () {
    // let MUSS weg, damit es überschrieben werden kann. 
    geheimeZahl = Math.floor(Math.random() * 10) + 1;
    console.log("Neue geheimZahl =", geheimeZahl);

    rateAusgabe.textContent = "Neue Zahl, lul";
});


let animalList = ["Panda","Dogo","Cwat"];

for (let i=0; i < animalList.length; i++) {
    console.log("Animal_nr",i,"is",animalList[i]);
}
animalList.push("Löwe");



let tier_JS_Li =["Elefant"];

let tierLi = document.getElementById("tierLi");
//let newAnimal = document.getElementById("newAnimal");
let animalAddButton = document.getElementById("animalAddButton"); 

animalAddButton.addEventListener("click", function() {
    let newAnimal = document.getElementById("newAnimal");
//WRONG:    tier_JS_Li.push(newAnimal);
    tier_JS_Li.push(newAnimal.value);

    tierLi.textContent = tier_JS_Li;
});


/*
hi_Button.addEventListener("click", function() {
    let name = eingabeFeld.value;

    if (name.trim() === "") {
        ausgabeText.textContent = "Bitte gib deinen Namen ein!";
    } else { 
        ausgabeText.textContent = "Hallo " + name + ", schön dich zu sehe!";
    }
}); 
*/

