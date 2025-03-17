//Dichiarazione variabile "Primitive", puoi assegnargli un numero, una stringa o un booleano.
let primitive = true;     

// Controllo del tipo di variabile e stampa in console
if (typeof primitive === 'number') {
    console.log("La variabile è di tipo numero:");
} else if (typeof primitive === 'string') {
    console.log("La variabile è di tipo stringa");
} else if (typeof primitive === 'boolean') {
    console.log("La variabile è di tipo booleano");
} else {
    console.log("Errore: La variabile non è stata riconosciuta correttamente. Si prega di contattare l'assistenza.");
}