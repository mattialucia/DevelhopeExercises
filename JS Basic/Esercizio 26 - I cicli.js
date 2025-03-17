//Stampa in console tutti i numeri pari da 0 a 20.

for (let i = 0; i <= 20; i++){
    if (i % 2 === 0){  //mod = i % 2;
        console.log(`Stampa Numero: ${i}.`);
    }
}

/*
while(i <= 20){
    mod = i % 2;
    if (!mod){  
        console.log(`Stampa Numero: ${i}.`);
    }
    i++;
}
*/