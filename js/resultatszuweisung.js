import { pullSheet } from './pullsheet.js';

const liste = document.getElementById("laenderListe");

window.Landliste.forEach(land => {
    const listItem = document.createElement("li");

    // Erstelle Text für das Land
    const textNode = document.createTextNode(land + " ");

    const inputId = land.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

    // Erstelle Eingabefeld (1 bis 26)
    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.max = "26";
    input.style.width = "50px"; // optional: kompakter
    input.id = inputId;

    // Füge alles zum Listeneintrag hinzu
    listItem.appendChild(textNode);
    listItem.appendChild(input);

    // Füge den Eintrag zur Liste hinzu
    liste.appendChild(listItem);
});

const sheetURL = "https://spreadsheets.google.com/feeds/list/1nUWunpclL0nLo_ZdqosrzCa279Vy_O4qEqkidhSKDhY/od6/public/values?alt=json";
const zielListe = document.getElementById("sheetDaten");

document.getElementById("ShowSheet").addEventListener("submit", e => {
    console.log("hi")
    //e.preventDefault(); 
    pullSheet(sheetURL,zielListe)

    console.log(zielListe)
});

