//Dichiarazione variabile "tariffa" di tipo stringa
let tariffa = "Tariffa BB";

switch (tariffa.toLowerCase()){
    case "tariffa bb":{
        console.log("Tariffa BB --> 50€");
        break;
    }
    case "tariffa hb":{
        console.log("Tariffa HB --> 80€");
        break;
    }
    case "tariffa fb":{
        console.log("Tariffa FB --> 100€");
        break;
    }
    default:{
        console.log("Nessuna tariffa corrispondente.");
        break;
    }
}