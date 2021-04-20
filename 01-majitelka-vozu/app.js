// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: "Mustang",
    barva: "modra",
    rokVyroby: 2015,
    spz: "TN215364"
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
// auto.majitel.jmeno = "Jana" - nejde, musíš postupne
auto.majitel = {};
auto.majitel.jmeno = "Heli";
auto.majitel.prijmeni = "Zubcekova";

// Přepiš značku na Škoda
auto["znacka"] = "Skoda";

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
const majitelka = auto.majitel.jmeno + " " + auto.majitel.prijmeni;
const znacka = auto.znacka;
const spz = auto.spz;

document.getElementById("majitelka").innerHTML = majitelka;
document.getElementById("znacka").innerHTML = znacka;
document.getElementById("spz").innerHTML = spz;