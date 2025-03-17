const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted    //Uguaglianza debole, confronta solo il valore e non il tipo
yearsCompleted === firstYearCompleted   //Uguaglianza forte/stretta, confronta sia il valore che il suo tipo

console.log(`\n1) Uguaglianza debole: yearsCompleted == firstYearCompleted\n- Risultato: ${yearsCompleted == firstYearCompleted} \n(Perché confronta solo il valore, che essendo identico ritorna 'true')`);
console.log(`\n2) Uguaglianza forte: yearsCompleted === firstYearCompleted\n- Risultato: ${yearsCompleted === firstYearCompleted} \n(Perché confronta sia il valore che il suo tipo, che essendo diverso ritorna 'false')`);