// All'oggetto student ho aggiunto un ulteriore oggetto annidato di nome "personalData" con le proprietà: name, surname e age.

const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    personalData: {
        name: "Mattia",
        surname: "Lucia",
        age: 24
    }
};

// Stampa esclusivamente l'oggetto annidato personalData situato dentro student.
console.log(student.personalData);

// Stampa tutte le proprietà di "personalData" solo se esso esiste all'interno di "student".
// console.log(student.personalData?.name, student.personalData?.surname, student.personalData?.age)