import { pullSheetCSV } from './pullsheetcsv.js';

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

const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcfbhPI6nHlNrHoVPXLQgyYFmHqQXV52Er02JSyE3K6W-zuOE8IZP16Zb6EglVrB0lcpND1C92yN-x/pub?output=csv";
const zielListe = document.getElementById("sheetDaten");

document.getElementById("ShowSheet").addEventListener("click", async e => {
    console.log("hi")
    pullSheetCSV(sheetURL,zielListe)
});

