// Funzione costruttrice dell'oggetto smartphone con le proprietà brand, name e price
function Smartphone(brand, name, price){
    this.brand = brand;
    this.name = name;
    this.price = price;
}

// Creazione di 3 nuovi oggetti smartphone
let smartphone1 = new Smartphone("Xiaomi", "15", 599);
let smartphone2 = new Smartphone("iPhone", "16 Pro Max", 1599);
let smartphone3 = new Smartphone("Samsung", "Galaxy S25 Ultra", 1619);

// Stampa dei 3 nuovi oggetti smartphone appena creati
console.log(smartphone1);
console.log(smartphone2);
console.log(smartphone3);