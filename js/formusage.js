const dropdowns = document.querySelectorAll('.landDropdown');

dropdowns.forEach(dropdown => {
    window.Landliste.forEach(land => {
        const option = document.createElement("option");
        option.value = land;
        option.textContent = land;
        dropdown.appendChild(option);
    });
  });