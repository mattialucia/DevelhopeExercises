// Creazione oggetto user con proprietà name e age.
let user = {
    name: "Cosimo",
    age: 30,
};

// Dichiarazione di un nuovo oggetto clone di "user".
let newUser = Object.assign({}, user);

// Modifica della proprietà "name" dell'oggetto "newUser".
newUser.name = "Paolo";

// Stampa di entrambi gli oggetti per verificarne il corretto clonaggio e modifica.
console.log(newUser);
console.log(user);