/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/



// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum;
sum = 10 + 20;
console.log('****** ESERCIZIO A ******');
console.log(sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random;
random = Math.floor(Math.random() * 21);
console.log('****** ESERCIZIO B ******');
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Paola",
  surname: "Del Vecchio",
  age: 32,
};

console.log('****** ESERCIZIO C ******');
console.log(me);
console.log(me.name);
console.log(me.surname);
console.log(me.age);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log('****** ESERCIZIO D ******');
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "Javascript principiante"];
console.log('****** ESERCIZIO E ******');
console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('<del>Javascript intermedio?</del> non ancora');
console.log('****** ESERCIZIO F ******');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

delete me.skills;
console.log('****** ESERCIZIO G ******');
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let randomDice = Math.floor(Math.random() * 6 + 1);
  return randomDice;
}

const risultatoLancioDado = dice();

console.log('****** ESERCIZIO 1 ******');
console.log(risultatoLancioDado);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(number1, number2) {
  if (number1 > number2) {
    console.log(number1 + " è maggiore di " + number2);
  } else if (number2 > number1) {
    console.log(number2 + " è maggiore di " + number1);
  } else {
    console.log(number1 + " e " + number2 + ' sono uguali ')
  }
}

console.log('****** ESERCIZIO 2 ******');
whoIsBigger(8, 4);
whoIsBigger(3, 9);
whoIsBigger(5, 5);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const frase = "I love coding";
const parole = splitMe(frase);

function splitMe(stringa) {
  const ogniParola = stringa.split(" ");
  return ogniParola;
}

console.log('****** ESERCIZIO 3 ******');
console.log(parole);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const parola = "Test";

function deleteOne(stringa, bool) {
  if (bool) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}

console.log('****** ESERCIZIO 4 ******');
console.log(deleteOne(parola, true));
console.log(deleteOne(parola, false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/




//quando passo il parametro stringa alla funzione
//creo due nuove variabili: una chiamata "nuovaStringa" di tipo stringa, e una chiamata "spazio" di tipo booleano
//creo un ciclo for per un nuovo array che creerò dentro il for
//il nuovo array si chiamerà "char" e avrà come elementi interni tutti caratteri

// function onlyLetters(stringa) {
//   let nuovaStringa = "";
//   let spazio = false;
//   for (let i = 0; i < stringa.length; i++) {
//     const char = stringa[i];
//     if (isNaN(char)) {
//       nuovaStringa += char;
//     }
//   }
//   return nuovaStringa;
// }

// const frase2 = "Dieci 9 otto 7 sei 5 quattro 3 due 1";
// const soloLettere = onlyLetters(frase2);
// console.log(soloLettere);


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

stringaEmail = 'unduetre@gmail.com'
stringaNonEmail = 'unduetre@gmail'

function isThisAnEmail2(stringa) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let risultato = regex.test(stringa);
  if (risultato === true) {
    console.log(stringa + ' è una mail valida');
  } else {
    console.log(stringa + ' non è una mail valida');
  }
  return risultato;
}

console.log('****** ESERCIZIO 6 ******');
isThisAnEmail2(stringaEmail);
isThisAnEmail2(stringaNonEmail);


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const data1 = new Date();
const settimana = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]

function whatDayIsIt() {
  let giornoInNumeri = data1.getDay();
  return settimana[giornoInNumeri];
}

console.log('****** ESERCIZIO 7 ******');
console.log('oggi è ' + whatDayIsIt()); // Stampa il numero del giorno

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const oggettoFinale = {};

function rollTheDices(numeroLanci) {
  let sum = 0;
  let risultatiLanci = [];
  for (let i = 0; i < numeroLanci; i++) {
    risultatiLanci.push(dice());
  }
  for (let i = 0; i < risultatiLanci.length; i++) {
    sum += risultatiLanci[i];
  }
  oggettoFinale.sum = sum;
  oggettoFinale.values = risultatiLanci;
  console.log(oggettoFinale);
}

console.log('****** ESERCIZIO 8 ******')
rollTheDices(3);


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  const dataInMillisecondi = data.getTime();
  const differenzaMillisecondi = Date.now() - dataInMillisecondi;
  const secondi = differenzaMillisecondi / 1000;
  const minuti = secondi / 60;
  const ore = minuti / 60;
  const giorniTrascorsi = Math.floor(ore / 24);
  return giorniTrascorsi;
}

const dataPassata = new Date("2024-01-31");

const giorniTrascorsi = howManyDays(dataPassata);
console.log('****** ESERCIZIO 9 ******');
console.log('Sono trascorsi ' + giorniTrascorsi + ' giorni dalla data ' + dataPassata);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

let nuovaData = new Date();
let giornoCorrente = nuovaData.getDate();
let meseCorrente = nuovaData.getMonth() + 1;
let dataCorrente = giornoCorrente + '/' + meseCorrente;
let mioCompleanno = "28/1"

function isTodayMyBirthday(dataDaAnalizzare) {
  let meseCompleanno = 1;
  if (dataDaAnalizzare === dataCorrente) {
    console.log(true);
  } else {
    console.log(false);
  }
}
console.log('****** ESERCIZIO 10 ******');
isTodayMyBirthday(mioCompleanno);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let parString = 'proprietà';
const parObj = {};
parObj.parString = '';
console.log(parObj);

function deleteProp(parObj, parString) {
  delete parObj.parString;
  console.log(parObj);
  return parObj;
}
console.log('****** ESERCIZIO 11 ******');
deleteProp(parObj, parString);

/********/

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

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let anno = 1200;
  movies.forEach((element) => {
    //Number trasforma un valore di tipo stringa, booleano o altro in un numero.
    //se l'anno è superiore a 1200
    //anno corrisponde al valore riportato nella proprietà year degli oggetti dell'array
    if (Number(element.Year) > anno) {
      anno = Number(element.Year);
      titolo = element.Title;
    }
  });
  console.log(`Il film più recente dell'array movies è del ${anno} e si intitola "${titolo}"`);
}
console.log('****** ESERCIZIO 12 ******');
newestMovie();



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  console.log(`Nell'array "movies" ci sono in totale ${movies.length} film.`);
}
console.log('****** ESERCIZIO 13 ******');
countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  let yearsList = [];
  for (let i = 0; i < movies.length; i++) {
    yearsList.push(movies[i].Year);
  }
  console.log(yearsList);

}
console.log('****** ESERCIZIO 14 ******');
onlyTheYears();

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/



let onlyInLastMillennium = () =>
movies.forEach((element) => {
  if (Number(element.Year) < 2000) {
    console.log(element);
  }
});

console.log('****** ESERCIZIO 15 ******');
console.log('i film prodotti nel millennio scorso sono:');
onlyInLastMillennium();

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

let sumAllTheYears = () => {
let sommaAnni = 0;
  for (let i = 0; i < movies.length; i++) {
    sommaAnni += Number(movies[i].Year);
  }
console.log('La somma degli anni di tutti i film è ' + sommaAnni);
}

console.log('****** ESERCIZIO 16 ******');
sumAllTheYears();


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// let searchByTitle = (stringa3) => {
//   const soloTitoli = [];
// for (let i = 0; i < movies.length; i++) {
//   soloTitoli.push(movies[i].Title);
// }
// console.log(soloTitoli);
// }

// searchByTitle();

// //
// let searchByTitle = (stringa3) => {
//   movies.forEach((element) => {
  

//   });

// }


// //questa l'abbiamo fatta nell'esercizio del calendario)
// appointmentsForThisDay.forEach((appointment) => {
//         const newLi = document.createElement('li');
//         newLi.innerText = appointment;
//         appointmentsList.appendChild(newLi);
//     });

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

