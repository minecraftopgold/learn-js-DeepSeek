/*
//Arrays
let tiere = [];
tiere[0] = "Hund";
tiere[1] = "Katze";

console.log(tiere[0]);
console.log(tiere[1]);

for (let i=0;i<tiere.length;i++) {
    console.log("Tier nr" + i + "ist" + tiere[i]);
}
*/

/*
//Objekte mit dynamischen Keys

let tierObj = {};

tierObj["tier0"] = "Maus";
tierObj["tier1"] = "Giraffe";

console.log(tierObj["tier0"]);  // Maus
console.log(tierObj["tier1"]);  // Giraffe

// Dynamisch:
for (let i = 0; i < 2; i++) {
    let key = "tier" + i;
    console.log(key + ": " + tierObj[key]);
}
*/

let biomes = {}; // ← Objekt, nicht Array

for (let i = 0; i <= 5; i++) {
    biomes["biome" + i] = "🗺️ Biom Nummer " + i;
}

// Zugriff
console.log(biomes["biome3"]); // → 🗺️ Biom Nummer 3
