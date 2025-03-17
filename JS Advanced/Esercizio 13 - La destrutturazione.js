// Date due variabili a e b, scambia i loro valori usando la destrutturazione.

let a = 5;
let b = 10;

console.log("Valori iniziali:\n- A:", a, "\n- B:", b);

[a,b] = [b,a];

console.log("\nValori modificati:\n- A:", a, "\n- B:", b);

/*
let c;

console.log("Valori iniziali:\n- A:", a, "\n- B:", b);

c = a;
a = b;
b = c;

console.log("\nValori modificati:\n- A:", a, "\n- B:", b);
*/