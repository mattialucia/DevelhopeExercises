// Crea una Promise che simula il recupero dei dati da un'API. 
// A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. 
// Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
// La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 
// altrimenti fallisce con il messaggio Error: Failed to fetch data

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        const success = Math.random(); // Genera un valore casuale da 0 a 1.
        console.log("Random value generated:", success);
        setTimeout(() => {
            if (success <= 0.5) {  // Se il risultato è inferiore o uguale a 0,5 va in resolve, altrimenti in reject.
                resolve("Data retrieved successfully");
            } else {
                reject("Error: Failed to fetch data");
            }
        }, 2000);
    });
}

fetchDataFromAPI()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

 