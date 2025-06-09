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

