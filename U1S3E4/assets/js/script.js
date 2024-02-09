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
//definisco una variabile e la associo all'elemento tabella presente in html
const tableElement = document.querySelector('table');

const generaTabellone = () => {
    //creo le righe da 1 a 9
    for (let i = 0; i < 9; i++) {
        const tr = document.createElement('tr');
    //e per ciascuna riga, creo 10 td
        for (let j = 0; j < 10; j++) {
            const td = document.createElement('td');
    //per ciascun td, inserisco al suo interno un testo.
    //questo testo sarà il risultato tra (1<i<9)*10 + j
    //quindi per esempio:
    // 0*10 + 1 = 1
    // 1*10 + 1 = 11
    // 2*10 + 1 = 21
    // 3*10 + 1 = 31
    //...
    //0*10 + 2 = 2
    //1*10 + 2 = 22
    //...
    //fino a
    //8*10 + 10 = 90
            td.innerText = tabellone[i * 10 + j];
    //appendo la casella alla riga
            tr.appendChild(td);
        }
    //appendo la riga alla tabella
    tableElement.appendChild(tr);
    }
};

generaTabellone(0); // Estrai e modifica la prima casella


