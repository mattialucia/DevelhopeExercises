// Creazione oggetto user con proprietà name e age.
let user = {
    name: "Cosimo",
    age: 30,
  };

// Dichiarazione di un nuovo oggetto vuoto.
let userClone = {};

// Ciclo for per copiare ogni proprietà dell'oggetto user all'oggetto userClone.
for (let key in user) {
  userClone[key] = user[key];
}

// Prima stampa di entrambi gli oggetti per verificarne il corretto clonaggio.
console.log("userClone created:", user, userClone);

// Modifica alla proprietà name dell'oggetto userClone.
userClone.name = "Mattia";

// Ultima stampa di entrambi gli oggetti per confrontarle dopo la modifica precedente.
console.log("userClone modified:",user, userClone);