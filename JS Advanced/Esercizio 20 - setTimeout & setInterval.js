// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// 1) Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// 2) Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// 3) Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.

let tempoRimanente = 10;

function contoAllaRovescia() {
    console.log("Conto alla rovescia in corso...");

    const conto = setInterval(() => {
        console.log(tempoRimanente);
        tempoRimanente--;

        if (tempoRimanente < 0){
            clearInterval(conto);
            console.log("Il conto alla rovescia é terminato.");
        }
    }, 1000);
}

contoAllaRovescia();

/*
if(conto = 10){
    console.log("Conto alla rovescia in corso...")
}else if(conto = 0){
    console.log("Il conto alla rovescia é terminato.")
} else{
    console.log(tempoRimanente);
    let conto = tempoRimanente - 1;
}
let conto = tempoRimanente - 1;
*/