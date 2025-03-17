/*
Per correggere l'esercizio ho dichiarato all'interno della funzione "canPlay()" la variabile "personName", senza di ciò l'algoritmo non avrebbe mai funzionato
perché prima "personName" era definito all'interno dell'if, che una volta terminata la sua esecuzione, la variabile dichiarata al suo interno viene distrutta per liberare memoria.
*/

function canPlay() {
    let sport = " Football";
    let personName; 
    if (true) {
        personName = "Cosimo";
    }
    console.log(personName + sport);
}

canPlay();