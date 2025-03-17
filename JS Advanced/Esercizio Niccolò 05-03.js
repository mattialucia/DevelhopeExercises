/*
Scrivi una funzione eseguiInOrdine che accetta tre callback e le esegue in sequenza,
dove la seconda parte solo dopo che la prima ha terminato e la terza dopo la seconda.
*/

function primoPasso() {
    console.log("Primo passo");
}
function secondoPasso() {
    console.log("Secondo passo");
}
function terzoPasso() {
    console.log("Terzo passo");
}

function eseguiInOrdine(callback1, callback2, callback3) {
    setTimeout(() => console.log('Invio richiesta in corso...'), 1000)
    setTimeout(() => {
        callback1();
        setTimeout(() => {
            callback2();
            setTimeout(() => {
                callback3();
            }, 2000);
        }, 2000);
    }, 3000);
}

eseguiInOrdine(primoPasso, secondoPasso, terzoPasso);