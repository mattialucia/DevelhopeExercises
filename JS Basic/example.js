const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
students.forEach((value, index) => {
    if (value.name === "Mario") {
        console.log(index);
        students[index] = { id: 3, name: "Francesco", surname: "Verdi", age: 41 };
        console.log(students);
    }
})

/*
  for (let i = 0; i < students.length; i++) {
    if(students[i].name = "Giovanni"){
      students[i] = { id: 3, name: "Francesco", surname: "Verdi", age: 41 };
      console.log(students);
    }
  }
*/