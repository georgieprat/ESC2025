const liste = document.getElementById("laenderListe");

window.Landliste.forEach(land => {
    const listItem = document.createElement("li");
    
    // Erstelle Text für das Land
    const textNode = document.createTextNode(land + " ");

    // Erstelle Eingabefeld (1 bis 26)
    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.max = "26";
    input.style.width = "50px"; // optional: kompakter

    // Füge alles zum Listeneintrag hinzu
    listItem.appendChild(textNode);
    listItem.appendChild(input);

    // Füge den Eintrag zur Liste hinzu
    liste.appendChild(listItem);
});