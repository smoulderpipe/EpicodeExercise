/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
SCRIVI QUI LA TUA RISPOSTA

I principali datatype in Javascript sono 3 (+2): stringhe, valori numerici e valori booleani (+ ci sono anche le keywords "null" e "undefined", se vogliamo considerarle parte di questo insieme).
 - Le stringhe sono sequenze finite di caratteri (ma possono essere composte anche solo da 1 carattere) racchiuse tra due apici doppi o singoli (meglio usare i doppi). Per esempio: "CIAO MONDO!" è una stringa.
 - I valori numerici sono numeri interi oppure numeri decimali (Javascript non ha bisogno che gli venga detto se il numero è intero o decimale, lo capisce da solo leggendolo). Si scrivono senza apici, altrimenti diventano stringhe. Il decimale si scrive con il punto. Per esempio: 35718417.351515 è un valore numerico.
 - I valori booleani possono essere solo di due tipi: true oppure false. Si usano nei controlli condizionali, dove il nostro codice può eseguire una determinata operazione se un valore booleano è true, oppure ne esegue un'altra se quel valore è false (e viceversa, questo è solo un esempio, dipende dal caso quello che vogliamo fargli fare). Per esempio: 3 > 9 è un valore booleano di tipo false, perché 3 non è minore di 9.
 - Il valore "null" segnala l'assenza intenzionale di un oggetto ed è diverso dal valore 0. Es. se un utente dimentica di riempire alcuni campi del form, il valore inviato a Javascript per quei campi è "null".
 - Il valore "undefined" segnala che una proprietà non ha valore, perché non è stata definita. Es. se dico let myName sto dichiarando la variabile senza definirla, e se faccio un console log di console.log(myName) avrò come risultato "undefined" perché non ho assegnato alcun valore a quella variabile, quindi sarà indefinita. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*SCRIVI QUI LA TUA RISPOSTA

let myName = "Paola" */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
SCRIVI QUI LA TUA RISPOSTA

console.log(12 + 20);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
SCRIVI QUI LA TUA RISPOSTA

let x = 12
console.log(x);
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*

SCRIVI QUI LA TUA RISPOSTA

questa qui funziona perché è possibile assegnare un nuovo valore alla variabile "myName":

let myName = "Paola"
myName = "Del Vecchio"
console.log(myName);

questa qui invece non funziona perché è impossibile assegnare un nuovo valore alla costante "myName", il console log restituisce questo risultato: invalid assignment to const 'myName'.

const myName = "Paola"
myName = "Del Vecchio"
console.log(myName);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
SCRIVI QUI LA TUA RISPOSTA

let x = 12
console.log(4-x); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*
SCRIVI QUI LA TUA RISPOSTA

RISPOSTA 1

let name1 = "john"
let name2 = "John"
console.log(name1===name2);

RISPOSTA EXTRA

let name1 = "john"
let name2 = "John"
name2Lowercase = name2.toLowerCase();
console.log(name1===name2Lowercase);

*/

document.getElementById("risposta1").innerHTML = " CIAO MONDO!";
document.getElementById("risposta2").innerHTML = 35718417.351515;
document.getElementById("risposta3").innerHTML = " let myName = 'Paola' "
document.getElementById("risposta4").innerHTML = " console.log(12 + 20); "
document.getElementById("risposta5").innerHTML = " let x = 12 <br> console.log(x); "
document.getElementById("risposta6").innerHTML = " let myName = 'Paola' <br> myName = 'Del Vecchio' <br> console.log(myName); "
document.getElementById("risposta7").innerHTML = " const myName = 'Paola' <br> myName = 'Del Vecchio' <br> console.log(myName); "
document.getElementById("risposta8").innerHTML = " let x = 12 <br> console.log(4-x); "
document.getElementById("risposta9").innerHTML = " let name1 = 'john' <br> let name2 = 'John' <br> console.log(name1===name2); "
document.getElementById("risposta10").innerHTML = " let name1 = 'john' <br> let name2 = 'John' <br> name2Lowercase = name2.toLowerCase(); <br> console.log(name1===name2Lowercase); "



