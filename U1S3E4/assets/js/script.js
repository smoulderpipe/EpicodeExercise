// • Crea programmaticamente, utilizzando JS, un tabellone per la Tombola formato da 76 celle, numerate con i numeri da 1 a 76.

// • Crea un bottone per simulare l'estrazione di un numero: dovrà selezionare un numero random da 1 a 76.

// • Dopo il click del bottone, evidenza in qualche modo la cella corrispondente sul tabellone (quella con lo stesso numero), ad esempio cambiandone il colore di sfondo.

/*
EXTRA:
• Fai in modo che non sia possibile richiamare un numero già precedentemente estratto.
*/


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
            td.innerText = tabellone[i * 10 + j];
            //appendo la casella alla riga
            tr.appendChild(td);
        }
        //appendo la riga alla tabella
        tableElement.appendChild(tr);
    }
};

generaTabellone();

const numeroEstrattoDOM = document.getElementById("numero-estratto");
const estraiNumeroButton = document.getElementById("estrai-numero");
const numeriEstratti = [];

let estraiNumero = (tabellone) => {
    // e.preventDefault();
    let numeroEstratto;
    let estratto = false;

    while (!estratto) {
        numeroEstratto = Math.floor(Math.random() * tabellone.length + 1);

        // Controlla se il numero è già stato estratto
        if (numeriEstratti.includes(numeroEstratto) || numeroEstratto === 0) {
            continue; // Se sì, riprova
        } else {
            estratto = true; // Se no, imposta il flag a true
        }
    }

    numeriEstratti.push(numeroEstratto); // Aggiungi il numero estratto all'array

    // Aggiorna l'interfaccia utente
    numeroEstrattoDOM.innerText = numeroEstratto;

    const celleNodeList = tableElement.querySelectorAll("td");
    const celle = Array.from(celleNodeList);

    for (let i = 0; i < celle.length; i++ && celle.length > 1) {
        if (numeroEstratto == celle[i].innerText) {
            celle[i].style.background = "red";
            break;
        }
    }
};

estraiNumeroButton.addEventListener("click", () => {
    if (numeriEstratti.length < 90) {
        estraiNumero(tabellone);
    } else {
        window.alert("Fine del gioco! Ti va di fare un'altra partita?");
        location.reload();
    }
});
