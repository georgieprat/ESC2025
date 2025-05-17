const scriptURL = "https://script.google.com/macros/s/AKfycbzigiyLLsOpfRb4pn5L8IyUGxruHnWO51eoGZn_ei3qpmIPxs6Y1V7AirsmK08CT3jwbA/exec";

  document.getElementById("Inputs").addEventListener("submit", e => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      P1: form.P1.value,
      P2: form.P2.value,
      P3: form.P3.value,
      P4: form.P4.value,
      P5: form.P5.value
    };

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      alert("Submitted successfully!");
      form.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Thanks for your submission! ^-^");
    });
  });