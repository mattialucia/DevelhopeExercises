// Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.

function doubleArray(arr, callback) {
    const result = arr.map(callback);
    return result;
  }
  function doubleValue(num) {
    return num * 2;
  }
  const numbers = [1, 2, 3, 4, 5];
  // const doubledNumbers = doubleArray(numbers, doubleValue);
  // console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]

function promise(arr, callback) {
    return new Promise((resolve, reject) => {   //todo: implementare una reject
        setTimeout(() => {
            arr.forEach(number => {
                if (typeof number !== "number"){
                    reject(new Error("Devi fornire un array numerico."));
                }
            });
            const result = arr.map(callback);
            resolve(result);
        }, 2000);
    })
}

promise(numbers, doubleValue)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
