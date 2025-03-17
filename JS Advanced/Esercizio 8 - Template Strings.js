// Utilizza una template string per creare una stringa su più righe che includa interruzioni di riga.

const firstName = "Mattia";
const surname = "Lucia";
const ID = 123;
const age = 24;
const sesso = "Maschio";

const fullNameTemplateString = `Informazioni utenza n°${ID}:\nNome completo: ${firstName} ${surname};\nEtà: ${age};\nSesso: ${sesso}.`

console.log(fullNameTemplateString);