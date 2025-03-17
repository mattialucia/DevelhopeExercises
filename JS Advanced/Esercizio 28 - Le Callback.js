// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. 
// 1) Implementare una callback per gestire i dati recuperati. 
// 2) Utilizzare setTimeout per simulare il ritardo dell'operazione.

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