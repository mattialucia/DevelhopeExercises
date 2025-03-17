//variabili
let number1 = 4;
let number2 = 8;

//costante
const numeroStudenti = 6;

//cambiando valore a number1
number1 = 16;

//dichiarando variabili di tipo stringa-testuale
let nome = "Giacomo";
let cognome = "La Spinà";
let eta = "20";  

//cambiando sia tipo che valore alla variabile eta
eta = 21;

//variabili booleane
let staPiovendo = true;
let staNevicando = false;

staPiovendo = false;

//cambiando valore alla variabile booleana staPiovendo
staPiovendo = "ciao";

//cambiando sia valore che tipo alla variabile booleana staNevicando
staNevicando = 34;

/*
Questo succede perchè Javascript (JS) non è un linguaggio di programmazione tipizzato, 
quindi non mantiene il tipo di una variabile dichiarata, cosa che fa invece Typescript (TS)
*/
//Es. per stampare sul terminale:
console.log("Sta piovendo?", staPiovendo)

let number = 0;
let text = "ciao";
let vero = true;

console.log(number, text, vero);

number = String(number);
vero = String(vero);

text = Number(text);
vero = Number(vero);

number = Boolean(number);
text = Boolean(text);

console.log(number, text, vero);

let numberz1 = 20;
let numberz2 = "20";
let numberz3 = 22;

let text1 = "1";
let text2 = true;

console.log("UGUAGLIANZA", number1 == number2);
console.log("UGUAGLIANZA STRETTA", number1 === number2);

console.log("DISUAGLIANZA", number1 != number2);
console.log("DISUGUAGLIANZA STRETTA", number1 !== number2);

console.log("UGUAGLIANZA", text1 == text2);
console.log("UGUAGLIANZA STRETTA 1", text1 === text2);
console.log("UGUAGLIANZA STRETTA 2", Boolean(text1) === text2);

console.log("MAGGIORE", text1 > text2);
console.log("MAGGIORE o UGUALE", number1 >= number2);

console.log("MINORE", number1 < number2);
console.log("MINORE o UGUALE", number1 <= number2);