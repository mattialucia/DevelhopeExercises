//Per rendere la variabile "sport" una variabile globale, basta dichiararla fuori dalla funzione. 
// Perché una variabile di tipo const o let può essere vista se si trova esternamente o nel contesto di riferimento, tranne quelle annidate.
// Solo nel caso di una var la sua dichiarazione viene spostata in cima alla funzione dentro la quale la stiamo dichiarando.
let sport = " Football";

function canPlay() {
  if (true) {
    var personName = "Cosimo";
  }
  console.log(personName + sport);
}

canPlay();