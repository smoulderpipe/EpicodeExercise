// • Crea programmaticamente, utilizzando JS, un tabellone per la Tombola formato da 76 celle, numerate con i numeri da 1 a 76.

// • Crea un bottone per simulare l'estrazione di un numero: dovrà selezionare un numero random da 1 a 76.

// • Dopo il click del bottone, evidenza in qualche modo la cella corrispondente sul tabellone (quella con lo stesso numero), ad esempio cambiandone il colore di sfondo.

//+ eventuali EXTRA da vedere dopo, il punto 2 e punto 3 sono veramente extra, il 1 se riesci fallo


//creare una griglia di 90 numeri, su 9 righe, ognuna composta da 10 caselle
//creare un button che generi un numero random tra 1 e 90 e stampare il numero estratto
//evidenziare sul tombolone il numero estratto

/*----------

verificare che il numero estratto non sia già uscito: se è uscito, estrarre un nuovo numero (funzione ricorsiva: è una funzione che a condizione chiama se stessa)*/

const tabellone = []; //un array che conterrà le caselle del tabellone

for (let i = 1; i <= 90; i++) {
    tabellone.push(i);
}

console.log(tabellone);

