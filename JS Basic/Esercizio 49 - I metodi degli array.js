const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

// Stampo il vettore iniziale "students".
console.log(students);

// Rimuovo "Giovanni" dal nostro array "students" e stampo il vettore.
students.pop();
console.log('\n1) Rimuovo "Giovanni" dal nostro array:')
console.log(students);

// Aggiungo "Francesco" al nostro array "students" e stampo il vettore.
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log('\n2) Aggiungo "Francesco" al nostro array:');
console.log(students);
