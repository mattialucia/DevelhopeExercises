// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
    setTimeout(() => {
        if (typeof a === 'number' && typeof b === 'number'){
            const sum = a + b;
            callback(null, sum); 
        } else {
            callback(new Error('I valori passati in input devono essere di tipo numerico.'), null); 
        }
    }, 2000);
}

function displayResult(error, result) {
    if (error){
        console.error(error);
    } else {
        console.log("Il risultato è:", result);
    }
}

performOperation(5, 2, displayResult);
// performOperation(5, "Sei", displayResult);








/*
function performOperation(a, b, callback) {
    setTimeout(() => {
        if (typeof a !== 'number' && typeof b !== 'number'){
            const error = new Error('I valori passati in input devono essere di tipo numerico.'); 
            return callback(error);
        } 
        const result = a + b;
        callback(null, result); 
    }, 2000);
}

const gestisciCallback = (error, result) => {
    if (error) {
        console.error("Errore:", error.message);
    } else {
        console.log("Il risultato è:", result);
    }
}

performOperation(5, 3, gestisciCallback);
*/
