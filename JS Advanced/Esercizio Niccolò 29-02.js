/*
Scrivi una funzione che prende come parametro un array di oggetti, 
ognuno dei quali rappresenta un film con le seguenti proprietà: titolo, regista, anno e genere. 

La funzione dovrebbe restituire un oggetto che contiene le seguenti proprietà: 
numMovies: il numero totale di film nell'array 
numYears: il numero di anni unici rappresentati nell'array 
genreCounts: un oggetto che contiene un conteggio di quanti film ci sono in ciascun genere rappresentato nell'array.

Stampa l'oggetto.
*/

function infoMovies(movies){
    const numYears = []
    const genreCounts = {};

    movies.forEach(movie => {
        let trovato = numYears.find((value) => movie.anno === value)
        if(!trovato){ 
            numYears.push(movie.anno);
        }
        if (genreCounts(movie.genere)){
            genreCounts(movie.genere) += 1;
        } else{
            genreCounts(movie.genere) = 1;
        }
    });

    /*
    let crime = 0; let dramma = 0; let scifi = 0;

    movies.forEach(movie => {
        switch(movie.genere.toLowerCase()){
            case "crime":{
                crime += 1;
                break;
            }
            case "dramma":{
                dramma += 1;
                break;
            }
            case "sci-fi":{
                scifi += 1;
                break;
            }
        }
    });

    const genreCounts = {Crime: crime, Dramma: dramma, Scifi: scifi};

    result.numMovies = movies.length;
    result.numYears = numYears;
    result.genreCounts = genreCounts;
    */

    const result = {numMovies: movies.length, numYears: numYears, genreCounts: genreCounts};
    return result;
}

const film = [
  { titolo: "Il padrino", regista: "Francis Ford Coppola", anno: 1972, genere: "Crime" },
  { titolo: "La vita è bella", regista: "Roberto Benigni", anno: 1997, genere: "Dramma" },
  { titolo: "Inception", regista: "Christopher Nolan", anno: 2010, genere: "Sci-Fi" },
  { titolo: "Pulp Fiction", regista: "Quentin Tarantino", anno: 1994, genere: "Crime" },
  { titolo: "Interstellar", regista: "Christopher Nolan", anno: 2010, genere: "Sci-Fi" }
];

const Movie = infoMovies(film);
console.log(Movie);