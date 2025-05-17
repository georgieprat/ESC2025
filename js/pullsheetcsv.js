export function pullSheetCSV(csvUrl, targetElement) {
    const response = fetch(csvUrl);
    const text = response.text();
  
    // CSV in Zeilen aufteilen
    const rows = text.split("\n").map(row => row.split(","));
    const headers = rows[0];
    const dataRows = rows.slice(1);
  
    // Umwandeln in JSON
    const json = dataRows.map(row => {
      const entry = {};
      headers.forEach((header, i) => {
        entry[header.trim()] = row[i]?.trim();
      });
      return entry;
    });
  
    // Ausgabe auf der Seite
    targetElement.innerHTML = "";
    json.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = JSON.stringify(entry);
      targetElement.appendChild(li);
    });
  }