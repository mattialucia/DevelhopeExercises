// Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
// Utilizzare setTimeout per simulare un'operazione asincrona.

const promise = () =>
    new Promise((resolve, reject) => {
    const result = "Mario";
    console.log("Controllando il risultato...");
    setTimeout(() => {
        if (result === "Mario") {
            resolve("Il risultato è Mario");
        } else {
            reject("Il risultato non è Mario");
        }
    }, 2000);
});

promise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })