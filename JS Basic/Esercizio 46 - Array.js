const students = [
  { id: "1", name: "Ugo", surname: "Lucia", age: 24},
  { id: "2", name: "Marco", surname: "Sasso", age: 25},
  { id: "3", name: "Mirko", surname: "Foglie", age: 32},
];

// Ciclo for per stampare ogni proprietà dell'oggetto
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("\nStudenti suddividendoli se hanno meno di 30 anni:");
// Ciclo for per stampare ogni proprietà dell'oggetto suddividendoli se hanno meno di 30 anni.
for (let i = 0; i < students.length; i++) {
  if(students[i].age < 30){
    //console.log(students[i]);
    console.log(students[i].name, students[i].surname, "è under 30, precisamente ha", students[i].age, "anni.");
  }else{
    console.log(students[i].name, students[i].surname, "non è under 30, precisamente ha", students[i].age, "anni.");
  }
}

console.log("\nStudenti con eta pari:");
// Ciclo for per stampare ogni proprietà dell'oggetto suddividendoli se hanno età pari
for (let i = 0; i < students.length; i++) {
  if(students[i].age % 2 === 0){
    console.log(students[i]);
  }
}

console.log("\nStudenti con nome lungo almeno 4 caratteri:");
// Ciclo for per stampare ogni proprietà dell'oggetto suddividendoli se hanno il nome lungo almeno 4 caratteri
for (let i = 0; i < students.length; i++) {
  if(students[i].name.length >= 4){
    console.log(students[i]);
  }
}

console.log("\nPer gli studenti con nome minore e uguale a 3, crea un nuovo oggetto modificandone il nome:");
// Ciclo for per gli studenti con la lunghezza del nome minore o uguale a 3, creando un nuovo oggetto modificandone il nome
for (let i = 0; i < students.length; i++) {
  if(students[i].name.length <= 3){
    let studentClone = Object.assign({}, students[i])
    studentClone.name = studentClone.name + " Mango";
    console.log(studentClone);
  }
}