
//Hole den Button und den Textbereich
let button = document.getElementById("meinButton");
let textAnzeige = document.getElementById("textAnzeige");

//Was soll passieren, wenn man den Button klickt?
button.addEventListener("click",function() {
    console.log("Button wurde geklickt!");
    textAnzeige.textContent = "Du hast den Button gedrückt!";

    meinButton.textContent = "geklickt";
});
