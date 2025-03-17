let name;
let surname = 'Rossi';

if (!!name && !!surname){
    console.log("\nFullname:", name + " " + surname);
} else {
    console.log("\nFullname is invalid.");
}

/*
//Se il valore assoluto di name risulta falsy, gli assegna come nome "Mario"
if (!!name === false){
    console.log("\nLa variabile 'name' risulta falsy. \nProcedo ad assegnargli come nome 'Mario'.");
    name = "Mario";
} 

//Se il valore assoluto di name risulta truthy, concatena le stringhe delle variabili name e surname con in mezzo uno spazio.
if (!!name === true){
    console.log("\nFullname:", name + " " + surname);
}
*/