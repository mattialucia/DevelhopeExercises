// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

// Funzione con Rest Parameter

function filterOutOdds(...numbers){
    return numbers.filter((value) => (value % 2 === 0), 0);
}

const odds = filterOutOdds(10, 20, 31, 32, 100, 3, 5, 7, 8);
console.log("I numeri pari sono:");
console.log(odds);

/*
function filterOutOdds(...numbers){
    let oddVector = [];                 // Array vuoto oddVector

    numbers.forEach((value) => {        // Per ogni elemento, pusho nell'array solo i numeri pari utilizzando il modulo di 2.
        if (value % 2 === 0) {          // Ovvero tutti i numeri che diviso due come danno resto 0
            oddVector.push(value);
        }
    });

    //console.log(oddVector);             // Stampo il nuovo vettore con all'interno solo i numeri pari
    return oddVector;
}
*/