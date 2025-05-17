export function pullSheet(sheetURL,zielListe) {
    fetch(sheetUrl)
        .then(response => response.json())
        .then(data => {
            const eintraege = data.feed.entry;

            eintraege.forEach(eintrag => {
            // Spaltennamen werden als "gsx$spaltenname" abgebildet
            const name = eintrag.gsx$name?.$t || "(kein Name)";
            const wert = eintrag.gsx$wert?.$t || "-";

            const li = document.createElement("li");
            li.textContent = `${name}: ${wert}`;
            zielListe.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Fehler beim Laden des Sheets:", error);
        });
    } 