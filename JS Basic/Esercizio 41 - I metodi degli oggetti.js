// Creazione oggetto smartphone con proprietà brand, name e price.
const smartphone = {
    brand: "Apple",
    name: "Iphone 13",
    price: 1300,
};

// Metodo per freezare l'oggetto smartphone
Object.freeze(smartphone);

// Tentativo di modifica che non avrà effetto
smartphone.price = 100;

// Stampa dell'oggetto smartphone con modifiche nulle
console.log(smartphone);
  