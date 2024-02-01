/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let l1 = 2;
let l2 = 4;

function area(l1, l2) {
return l1 * l2;
}

console.log(area(l1, l2));

/*oppure*/

area = (l1, l2) => {
    return l1 * l2;
}

console.log("L'area del rettangolo è: "+area(l1, l2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

crazySum = (n1, n2) => {
    if (n1 === n2) {
return (n1 + n2)*3;
} 
    return (n1 + n2);
}


console.log(crazySum(3, 4));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero1) {
    let differenza = Math.abs(numero1 - 19);
    if (numero1 < 19) {
        return differenza();
    }
    return differenza*3;
}

console.log(crazyDiff(21));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if((n > 20 && n <= 100) || (n === 400)){
        return true;
    }
        return false;
}

console.log(boundary(10));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa){
    let nuovaStringa = "CIAO CIAO CIAO";
    if (nuovaStringa.indexOf(stringa) === 0) {
        return nuovaStringa;
    }
   return stringa + ' ' + nuovaStringa;
}

console.log(epify('EPICODE'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let numeroPos = numero
function check3and7(numero){
    if ((numero % 3 === 0) || (numero % 7 === 0)) {
        return 'È un multiplo di 3 o 7';
    }
    return 'Non è un multiplo di 3 o 7';
}

console.log(check3and7(13));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

// function reverseString(stringa) {
//     return stringa.
// }
// console.log(reverseString('EPICODE'));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
