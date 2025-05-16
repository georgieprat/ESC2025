const dropdowns = document.querySelectorAll('.landDropdown');

dropdowns.forEach(dropdown => {
    Landliste.forEach(land => {
      const option = document.createElement("option");
      option.value = land;
      option.textContent = land;
      dropdown.appendChild(option);
    });
  });