let hello = 'Ciao';         // number
let age = 18;               // boolean
let isGraduated = false;    // string

let helloNumber = Number(hello);
let ageBoolean = Boolean(age);
let isGraduatedString = String(isGraduated);

console.log(`\nDa stringa: ${hello} --> A number: ${helloNumber}.\nDa numerico: ${age} --> A booleano: ${ageBoolean}.\nDa booleano: ${isGraduated} --> A stringa: ${isGraduatedString}.\n`);
console.log(`Da conversione da stringa a numerico diventa "NaN" proprio perché la stringa contiene una parola e non dei numeri, infatti NaN sta per "Not a Number".`);