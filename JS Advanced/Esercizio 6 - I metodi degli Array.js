function printStudent(students){
    students.forEach(student => {console.log(student)});
}

function trovaVoto(students){
    const voto90 = students.find(student => student.voto >= 90);
    return voto90;
}

function avgStudent(students){
    const sum = students.reduce((acc, student) => acc + student.voto, 0);
    const avg = sum/students.length;
    return avg;
}

function uppercaseStudent(students){
    const capslock = students.map(student => student.nome.toUpperCase());
    return capslock;
}

function bestStudent(students){
    const voto85 = students.filter(student => student.voto > 85);
    return voto85;
}

const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

console.log("\n1) Utilizzo forEach per stampare i nomi degli studenti:");
printStudent(studenti);

const voto = trovaVoto(studenti);
console.log("\n2) Utilizzo find per trovare uno studente con un voto superiore a 90:");
console.log(voto);

const average = avgStudent(studenti);
console.log("\n3) Utilizzo reduce per calcolare la media dei voti degli studenti:");
console.log(average);

const upperCase = uppercaseStudent(studenti);
console.log("\n4) Utilizzo map per creare un nuovo array contenente i nomi degli studenti in maiuscolo:");
console.log(upperCase);

const bestStudents = bestStudent(studenti);
console.log("\n5) Utilizzo filter per trovare gli studenti con voti superiori a 85:");
console.log(bestStudents);