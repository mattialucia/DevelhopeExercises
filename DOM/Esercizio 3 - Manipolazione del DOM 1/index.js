function addProduct(event) {
  event.preventDefault() // Metodo per prevenire il comportamento di default del button
  const input = document.querySelector("input") // Seleziona la input field
  const taskText = input.value // Prende il valore digitato nella input field
  if (taskText === "") {
    alert("Non lasciare il campo vuoto!") // Alert se la input field rimane vuota
    console.log("Errore: Input field vuota.")
    return
  }
  const ul = document.querySelector("ul") // Seleziona l'elemento <ul>
  const li = document.createElement("li") // Crea l'elemento <li>

  const checkbox = document.createElement("input") // Crea la un nuovo elemento di input
  checkbox.setAttribute("type", "checkbox") // Di tipo checkbox checkbox.type = "checkbox"

  li.appendChild(checkbox) // Aggiunge la checkbox a <li>
  li.appendChild(document.createTextNode(taskText)) // Aggiunge il testo alla <li>
  ul.appendChild(li) // Aggiunge la <li> alla <ul>
  
  console.log(`Task "${taskText}" aggiunta correttamente.`)
  input.value = "" // Pulisce l'area testuale
}