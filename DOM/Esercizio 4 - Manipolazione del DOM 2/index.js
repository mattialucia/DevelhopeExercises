function createPersonObject(event) {
  event.preventDefault() // Metodo per prevenire il comportamento di default
  // Recupero i valori di ciascun campo di input
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  // Creo l'oggetto person con i valori recuperati in input
  const person = { firstName: firstName, lastName: lastName, age: age };
  console.log(
    "Valori recuperati correttamente, ecco l'oggetto person:\n",
    person
  );

  // Converto l'oggetto in formato JSON
  const personJSON = JSON.stringify(person);
  console.log("Converto l'oggetto in formato JSON:\n", personJSON);

  // Recupero il form
  const form = document.querySelector("form");

  // Aggiungo l'attributo data-person al JSON
  form.setAttribute("data-person", personJSON);
  console.log("Stampo il form con il nuovo attributo data-person:\n", form)
}

const form = document.querySelector("form");
form.addEventListener("submit", createPersonObject);
