// Implementa la funzione lanciaDadi che:

// 1) Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// 2) Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// 3) Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// 4) Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."

function lanciaDadi(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Lancio dei dadi in corso...");

setTimeout(() => {
    const dado1 = lanciaDadi(1,6);
    const dado2 = lanciaDadi(1,6);
    const dadi = dado1 + dado2;

    console.log(`\n1° Dado: ${dado1} - 2° Dado: ${dado2}\nRisultato del lancio: ${dadi}`);
}, 2000);