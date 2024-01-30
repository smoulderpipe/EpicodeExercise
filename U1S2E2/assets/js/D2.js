/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*

let numero1 = 3;
let numero2 = 4;

if (numero1 < numero2) {
  console.log(numero2 + ' è maggiore di ' + numero1)
} else if (numero1 === numero2) {
  console.log(numero2 + ' è uguale a ' + numero1)
} else {
  console.log(numero2 + ' è minore di ' + numero1)
};*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

/*
let numero3 = 8;

if (numero3 !== 5) {
  console.log('not equal')
} else {
  console.log('equal')
};
*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)

  
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numero4 = 17;
let resto = numero4 % 5;
if (resto === 0) {
  console.log(numero4 + ' è divisibile per 5')
} else {
  console.log(numero4 + ' non è divisibile per 5')
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
// se almeno uno dei due numeri è uguale a 8, stampa "almeno uno dei due numeri è uguale a 8"
// se nessuno dei due numeri è uguale a 8, stampa "nessuno dei due numeri è uguale a 8"
// se la loro addizione/sottrazione è uguale a 8, stampa "la loro addizione o la loro sottrazione è uguale a 8"

/* SCRIVI QUI LA TUA RISPOSTA */
/*let numero5 = 4;
let numero6 = 5;
let otto = 8;
let somma = numero5 + numero6;
let sottrazione1 = numero5 - numero6;
let sottrazione2 = numero6 - numero5;
let addizione = numero5 + numero6;

if (numero5 === otto || numero6 === otto && sottrazione1 !== otto && sottrazione2 !== otto && addizione !== otto) {
  console.log('Uno dei due numeri è uguale a 8. Né la loro somma né la loro sottrazione danno come risultato 8.')
} else if (numero5 !== otto && numero6 !== otto && sottrazione1 !== otto && sottrazione2 !== otto && addizione !== otto) {
  console.log('Nessuno dei due numeri è uguale a 8. Né la loro somma né la loro sottrazione danno come risultato 8.')
} else if (sottrazione1 === otto || sottrazione2 === otto || addizione === otto) {
  console.log('Nessuno dei due numeri è uguale a 8, ma la loro addizione o la loro sottrazione danno come risultato 8.')
};*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 3;
let spedizione = 10;

if (totalShoppingCart >= 50) {
  console.log(totalShoppingCart)
} else {
  console.log(totalShoppingCart + spedizione)
};
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 33;
let spedizione = 10;

if (totalShoppingCart >= 50) {
  console.log(totalShoppingCart - ((20 / 100) * totalShoppingCart))
} else {
  console.log(totalShoppingCart + spedizione - ((20 / 100) * totalShoppingCart))
};
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* (la risposta che ho dato all'esercizio 7 è sbagliata)
let a = 3;
let b = -0.04;
let c = 0.58;
let insieme = [a, b, c];
if (a !== b && a !== c){
  console.log(insieme.reverse())
}
else {
  console.log('Non ordinarlo!')
};*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let valore = 'Sette';
if (typeof valore === 'number') {
  console.log(valore + ' è un numero!')
} else {
  console.log(valore + ' non è un numero!')
};
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numero7 = 6;
if (numero7 % 2 === 0) {
  console.log(numero7 + ' è un numero pari')
} else {
  console.log(numero7 + ' è un numero dispari')
};
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let val = 14
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me2 = Object.assign({},me,{city: 'Toronto'});
console.log(me2);
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// delete me.lastName;
// console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*me.skills.pop();
console.log(me.skills);
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//(nota: questa l'ho azzeccata cercando su internet, ma non ho capito esattamente il funzionamento)
/*
const arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr)
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
arr[arr.length - 1] = 100;
console.log(arr);
*/
