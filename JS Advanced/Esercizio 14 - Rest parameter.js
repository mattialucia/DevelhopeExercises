// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

// Funzione con Rest Parameter
function somma(...args){
    console.log("Vettore args:", args);
    let sum = args.reduce((acc, value) => (acc += value), 0);
    return sum;
}
console.log("Il risultato della somma è:", somma(5, 10, 20, 1, 100,));