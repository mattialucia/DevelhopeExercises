// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

/*
function fetchDataFromAPI(callback) {
    setTimeout(() => console.log('Invio richiesta in corso...'), 1000)
    setTimeout(() => {
        const response = { name: "John", age: 30 };
        callback(response);
    }, 4000)
}

function handleData(data) {
    console.log(`\nDati ricevuti dall'API:\nNome: ${data.name}.\nEtà: ${data.age}.`);
}

fetchDataFromAPI(handleData);
*/

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        const response = { name: "John", age: 30 };
        if (response.age >= 18){
            resolve("L'utente è maggiorenne.");
        } else {
        reject("L'utente é minorenne.");
        }
    });
}

fetchDataFromAPI().then((data) => console.log("Resolved:", data)).catch((error) => error.log("Rejected:", error))
