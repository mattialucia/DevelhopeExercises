let buttonActive = true;                                // Dichiarazione variabile con tipo Boolean
let buttonActiveNumber = Number(buttonActive);          // Conversione da Boolean a Number
let buttonActiveString = String(buttonActiveNumber);    // Conversione da Number a String
let buttonActiveBoolean = Boolean(buttonActiveString);  // Conversione da String a Boolean

console.log(`1) Valore: ${buttonActive} - Tipo di dato: ${typeof buttonActive}.`);
console.log(`2) Valore: ${buttonActiveNumber} - Tipo di dato: ${typeof buttonActiveNumber}.`);
console.log(`3) Valore: ${buttonActiveString} - Tipo di dato: ${typeof buttonActiveString}.`);
console.log(`4) Valore: ${buttonActiveBoolean} - Tipo di dato: ${typeof buttonActiveBoolean}.`);

/*
    1)  Considera di usare const per dichiarare buttonActive, poiché il suo valore rimane invariato, 
        indicando così chiaramente che si tratta di una costante nel tuo codice.
        
    2)  Per una visualizzazione più efficiente e leggibile dei dati in console, esamina l'opportunità di utilizzare console.table(). 
        Questo non solo semplificherebbe la lettura dei valori e dei tipi, ma migliorerebbe 
        anche l'organizzazione del tuo output quando lavori con molteplici variabili.
*/