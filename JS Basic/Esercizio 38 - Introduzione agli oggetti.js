// Crea un oggetto di nome car, che abbia al suo interno due proprietà: name, color.
const car = {
    name: "Citroen C1",
    color: "Lightgrey",
  };

// Stampa il valore delle due proprietà di questo oggetto
console.log(car);

// Ciclo for in dove stampiamo le chiavi dell'oggetto car
for (let key in car) {
    console.log(key, car[key]);
  }