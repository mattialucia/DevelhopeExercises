//Dichiarazione variabile "favoriteFood" di tipo stringa
let favoriteFood = "Pizza";

switch(favoriteFood.toLowerCase()){
    case "pizza":{
        console.log("You like PIZZA!");
        break;
    }
    case "coconut":{
        console.log("You like COCONUT!");
        break;
    }
    default:{
        console.log("You like something else!");
        break;
    }
}