function adultFilter(persons) {
    return persons.filter(person => person.age >= 18);
    /*
        persons.forEach(person => {
        if(person.age >= 18){
            console.log(person);
        }
        return(person);
    });
    */
}

const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];
  
const adults = adultFilter(persons);

console.log("Lista persone:", persons);
console.log("Lista maggiorenni:", adults);


/*  
for (let i = 0; i < persons.length; i++) {
    if(persons[i].age >= 18){
        console.log(persons[i]);
        return persons[i];
    }
} 
*/