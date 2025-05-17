const liste = document.getElementById("laenderListe");

window.Landliste.forEach(land => {
    const listItem = document.createElement("li");
    listItem.textContent = land;
    liste.appendChild(listItem);
});