const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]



/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

const characterNames = [];
console.log(characterNames);

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

/* RAGIONAMENTO PAOLA
hai 2 array:
il 1° array si chiama starWarsCharacters ed è popolato da oggetti 
il 2° array si chiama characterNames ed è vuoto
devo inserire nel 2° array l'elenco di valori assunti dalla proprietà "name", che si trova in ogni oggetto contenuto dentro il 1° array

come faccio a farlo?

1) per prima cosa devo accedere alla lunghezza del primo array per usarla come condizione di interruzione del for, in maniera che l'array che devo popolare venga popolato con un numero finito di dati.
2) poi devo accedere alla proprietà name di starWarsCharacters, quindi immagino che ci sarà un starWarsCharacters.name da qualche parte
3) questo starWarsCharacters.name, che mi serve per popolare il secondo array, dovrà essere usato in combinazione con [i], perché c'è il for che ci fa andare da 0 all'ultimo elemento del primo array.
4) per popolare il secondo array con i valori della proprietà "nome" (come richiesto dall'esercizio), devo fare un push su characterNames con i dati relativi alla proprietà "name" del primo array.
5) alla fine stampo a video il secondo array per vedere se è venuto fuori corretto
6) profit
*/

/*SOLUZIONE PAOLA*/

// for (let i = 0; i < starWarsCharacters.length; i++) {
// characterNames.push(starWarsCharacters[i].name);
// console.log('characterNames');
// }

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/


/* 
RAGIONAMENTO PAOLA
questo non è uguale a quello di prima, perché vuoi pushare dentro l'array degli oggetti, non dei valori, quindi attenzione.
  Gli oggetti vanno destrutturati per essere inseriti dentro un array, giusto?
  Inoltre devo usare un filtro sulla proprietà "gender" perché voglio stampare solo le femmine.
*/

/*SOLUZIONE PAOLA*/

const femaleCharacters = []; //l'array femaleCharacters è vuoto.
for (let i = 0; i < starWarsCharacters.length; i++) { //al verificarsi di questa condizione
  if (starWarsCharacters[i].gender === "female") { //se il genere è femminile, pusha dentro l'array gli oggetti uno alla volta
    let oggettoFemminile = {
      name: starWarsCharacters[i].name,
      mass: starWarsCharacters[i].mass,
      hair_color: starWarsCharacters[i].hair_color,
      skin_color: starWarsCharacters[i].skin_color,
      eye_color: starWarsCharacters[i].eye_color,
      birth_year: starWarsCharacters[i].birth_year,
      gender: starWarsCharacters[i].gender,
    };
    femaleCharacters.push(oggettoFemminile);
  }
}

console.log(femaleCharacters);



/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
