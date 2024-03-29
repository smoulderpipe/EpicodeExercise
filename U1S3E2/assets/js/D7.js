/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concaTena() {
  //definisco le variabili delle stringhe
  let stringa1 = 'cane';
  let stringa2 = 'gatto';
  //trasformo le stringhe in array
  const stringa1array = stringa1.split('');
  const stringa2array = stringa2.split('');
  console.log(stringa1array);
  console.log(stringa2array);
  //prendo le lettere che mi servono
  const restoStringa1 = stringa1array.slice(0, 2);
  const restoStringa2 = stringa2array.slice(2);
  console.log(restoStringa1);
  console.log(restoStringa2);
  //definisco una nuova variabile per la stringa da creare a partire dai due array
  let stringaConcatenata = '';
  //per ogni lettera del nuovo array che contiene i primi 2 caratteri dell'array di partenza
  for (let i = 0; i < restoStringa1.length; i++) {
  //la stringa che voglio creare sarà uguale alla somma di se stessa + restoStringa1
    stringaConcatenata += restoStringa1[i];
  }
  //per ogni lettera del nuovo array che contiene gli ultimi 3 caratteri dell'array di partenza
  for (let i = 0; i < restoStringa2.length; i++) {
  //la stringa che voglio creare sarà uguale alla somma di se stessa + restoStringa2
  stringaConcatenata += restoStringa2[i];
  }
  //faccio tutto maiuscolo
  stringaConcatenata = stringaConcatenata.toUpperCase();
  console.log(stringaConcatenata);
}

concaTena('cane', 'gatto'); // Stampa "CATTO"

/*oppure*/

const stringa1 = 'ciao';
const stringa2 = 'salve';

function crasi(stringa1, stringa2) {
  return (stringa1.slice(0,2)).toUpperCase() + stringa2.slice(2, 5).toUpperCase()
} 
console.log("esercizio 1");
console.log(crasi(stringa1, stringa2))


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

/* questo si fa come quello dei colori del giorno precedente*/


//crea una funzione
//definisci un array vuoto
//per ogni indice dell'array fino al 10 escluso
//metti nell'array un valore casuale fino a 100
//console log dell'array aggiornato

function tornaRandom() {
  const tenElements = [];
  for(let i = 0; i < 10; i++) {
    tenElements.push(Math.floor(Math.random() * 101)); 
  }
  console.log(tenElements); // Stampa l'array di numeri casuali nella console
}

tornaRandom();


// function generaArrayRandom() {
//   const array = [];
//   for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 101));
//   }
//   return array;
// }

// Esempio di utilizzo
// const arrayRandom = generaArrayRandom();
// console.log(arrayRandom); // Stampa un array di 10 numeri casuali tra 0 e 100



/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

//definisco variabile array
//creo funzione
//creo array di destinazione
//creo un filter dell'array originale
//che ritorni solo i pari
//stampo in console log
//richiamo funzione

const arrayNumerico3 = [11, 25, 82, 3, 4];

function ricavaPari() {
  const nuovoArray = arrayNumerico3.filter(function(element) {
    return element % 2 === 0;
  });
  console.log(nuovoArray);
}

ricavaPari();

/*oppure con il ciclo for*/
// const arrayNumerico = [5, 8, 3, 9, 2121281, 34834];

// function valoriPari() {
//   const arrayPari = [];
//   for (i = 0; i < arrayNumerico.length; i++) {
//     if(arrayNumerico[i] % 2 === 0) {
//       arrayPari.push(arrayNumerico[i]); 
//     }
//   }
//   console.log(arrayPari);
// }

// valoriPari(arrayNumerico);

/*oppure, utilizzando il filter()*/

// Dichiara una variabile chiamata `arrayNumerico2` che contiene un array di numeri.
// const arrayNumerico2 = [5, 8, 3, 9, 2121281, 34834];
// Filtra i numeri pari dall'array utilizzando il metodo `filter()`.
// const numeriPari = arrayNumerico2.filter(elemento => elemento % 2 === 0);
// Stampa in console il contenuto della variabile `numeriPari`.
// console.log(numeriPari);


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const arrayBreve = [1, 2, 3];
function sommaNumeri() {
  let somma = 0;
  arrayBreve.forEach((element) => {
    somma += element;
  });
  return somma;
  // console.log(somma); (perché non posso metterlo dentro la funzione?)
}

const risultato = sommaNumeri();
console.log(risultato); //6

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaNumeriReduce() {
  return arrayBreve.reduce((totale, valoreCorrente) => {
    return totale + valoreCorrente;
  }, 0);
}

const risultato2 = sommaNumeriReduce();
console.log(risultato2); // 6

/*stessa cosa*/

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const numeri6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valore = 7;

function secondoArray(array, valore) {
  const qualcosa = array.map(function(val6) {
    return val6 * valore
  });
  return qualcosa;
};

const Risultato6 = secondoArray(numeri6, valore);
console.log('esercizio 6 ' + Risultato6);


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
// function lunghezzeStringhe() {
//   const lengthArray = []; // Dichiarazione di `lengthArray` all'inizio della funzione

//   for (let i = 0; i < arrayEpicode.length; i++) {
//     lengthArray.push(arrayEpicode[i].length); // Aggiunta della lunghezza di ogni stringa all'array `lengthArray`
//   }

//   return lengthArray;
// }

// console.log('esercizio 7:', lunghezzeStringhe()); // Stampa il risultato della funzione


/*dentro map devo scrivere il metodo che mi ritorna la lunghezza di ogni singola stringa*/

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function dispari() {
  let arrayTutti = [];
  for (let i = 1; i < 100; i++) {
    arrayTutti.push(i);
  }
  let arrayDispari = [];
  arrayTutti.forEach((element) => {
    if(element % 2 !== 0) {
      arrayDispari.push(element);
    }
  });
  return arrayDispari;
}
console.log('esercizio 8 ' + dispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function piuVecchio() {
  let anno = 2100;
  movies.forEach((element) => {
    //Number trasforma un valore di tipo stringa, booleano o altro in un numero.
    //se l'anno è inferiore a 2100
    //anno corrisponde al valore riportato nella proprietà year degli oggetti dell'array
    if (Number(element.Year) < anno) {
      anno = Number(element.Year);
    }
  });
  console.log(anno);
}

piuVecchio();
  
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titoli() {
  arrayTitoli = movies.map((element) => {
    return element.Title;
    
  });
  return arrayTitoli;
}
console.log(titoli());

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/*con questo esercizio 14 faremo netflix. 16.50 in aula.*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

/* nell'anno che ti passo come parametro */
