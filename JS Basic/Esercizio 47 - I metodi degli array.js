const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

console.log('- Vettore iniziale "names":\n', names);
// Rimuovere il nome "Giovanni" dal nostro array.
names.pop();
console.log('\n1) Rimuovo il nome "Giovanni" dal nostro array:\n', names);

// Aggiungere il nome "Pippo" alla coda del nostro array.
names.push("Pippo");
console.log('\n2) Aggiungo il nome "Pippo" alla coda del nostro array:\n', names);

// Aggiungere il nome "Giovanni" come primo elemento del nostro array.
names.unshift("Giovanni");
console.log('\n3) Aggiungo il nome "Giovanni" come primo elemento del nostro array:\n', names);

