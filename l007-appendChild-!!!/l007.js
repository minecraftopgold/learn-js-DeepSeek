/*
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
*/

let tierLiHTML = document.getElementById("tierLiHTML");
let animalAddButton = document.getElementById("animalAddButton");

tierListeJs = ["Delfin"];


tierLiHTML.innerHTML = "";

for (let i=0; i<tierListeJs.length; i++) {
    let newLiElementJs = document.createElement("li");
    newLiElementJs.textContent = tierListeJs[i];
    tierLiHTML.appendChild(newLiElementJs);

}

animalAddButton.addEventListener("click", function () {
    let newAnimalInput = document.getElementById("newAnimalInput");


    tierLiHTML.innerHTML = "";

    if (newAnimalInput.value.trim() !== "") {
        tierListeJs.push(newAnimalInput.value.trim());
        newAnimalInput.value="";
        for (let i=0; i<tierListeJs.length; i++) {
            let newLiElementJs = document.createElement("li");
            newLiElementJs.textContent = tierListeJs[i];
            tierLiHTML.appendChild(newLiElementJs);
        
        }
    }
});


//HTML(3):  animalAddButton, tierLi, newAnimal
//(7)       tierLi, animalAddButton, tierListe (Js), neuesLI (JS), li (JS), newAnimal, 
/*
let tierLi = document.getElementById("tierLi");
let animalAddButton = document.getElementById("animalAddButton");

let tierListe = ["Elefant"]; // Startliste

function aktualisiereTierListe() {
    // Erstmal alte Liste leeren    //NUR on screen, NICHT DIE DATEN
    tierLi.innerHTML = "";

    // Jetzt jedes Tier anzeigen
    for (let i = 0; i < tierListe.length; i++) {
        let neuesLI = document.createElement("li");
        neuesLI.textContent = tierListe[i];
        tierLi.appendChild(neuesLI);
    }
}

// Initial anzeigen
aktualisiereTierListe();

animalAddButton.addEventListener("click", function () {
    let newAnimal = document.getElementById("newAnimal");

    if (newAnimal.value.trim() !== "") {
        tierListe.push(newAnimal.value.trim());
        newAnimal.value = ""; // Eingabefeld leeren
        aktualisiereTierListe();
    }
});
 */



/*
// GPT

document.createElement("li") erzeugt ein neues Listen-Element.

appendChild() hängt es wirklich ins HTML.

Jedes Mal, wenn du ein Tier hinzufügst, wird die Liste neu aufgebaut.

✅ Aufgaben für dich:
Teste den Code in deinem Projekt.

Probiere lustige Tiernamen aus – „Flamingokatze“, „Wolpadinger“ 😄

Optional: Sortiere die Liste alphabetisch mit tierListe.sort() vor dem Anzeigen.

Bereit für Lektion 8: Checkboxen und Filter oder möchtest du das hier noch erweitern (z. B. mit Entfernen von Tieren oder Emojis)?
*/