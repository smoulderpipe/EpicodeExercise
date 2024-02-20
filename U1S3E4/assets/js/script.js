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
const tableElement = document.getElementById('tabellaTabellone');

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

/*
La cartella dovrebbe seguire la stessa logica della vera cartella di una tombola:
alcuni td dovrebbero essere privi di contenuto
nei td con un numero al loro interno posizionati sulla stessa colonna dovrebbe corrispondere un numero entro una specifica decina

(quindi, per esempio:
- nella prima colonna dovrebbero essere presenti o td vuoti oppure td che presentano un numero compreso tra 1 e 10
- mentre nell'ultima dovrebbero essere presenti o td vuoti oppure td che presentano un numero tra 81 e 90
- inoltre ogni riga dovrebbe contenere 4 td vuoti e 5 contenenti un numero).
*/

// const numeriCartella = [];

// for (let i = 0; i < 16; i++) {

// }

//genera cartelle
const cartellaElement1 = document.getElementById('tabellaCartella1');
const generaCartelle = () => {
    let numeroRandomCartella;
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const td = document.createElement('td');
            // td.innerText = tabellone[i * 10 + j];
            td.style.border = "1px solid red";
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.textAlign = "center";
            
            tr.appendChild(td);
            
    }
    //appendo la riga alla tabella
    cartellaElement1.appendChild(tr);
    
}
}
generaCartelle();

function inserisciNumeriCartelle() {
    
    const celleVuoteCartellaNodeList = cartellaElement1.querySelectorAll("#tabellaCartella1 td");
    const celleVuoteCartella = Array.from(celleVuoteCartellaNodeList);
    console.log(celleVuoteCartella);
    for (let i = 0; i < celleVuoteCartella.length; i++) {
        numeroCasella = celleVuoteCartellaNodeList[i];
        numeroCasella.innerText = Math.floor(Math.random() * tabellone.length + 1);
        // td.innerText = tabellone[i * 10 + j];
    }
}

inserisciNumeriCartelle();

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
            estratto = true; // Se no, esci dal ciclo
        }
    }
    
    // for (let i = 0; i < tabellone.length; i++) {
    //     numeroEstratto = Math.floor(Math.random() * tabellone.length + 1);
    
    //     // Controlla se il numero è già stato estratto
    //     if (numeriEstratti.includes(numeroEstratto) || numeroEstratto === 0) {
    //         continue; // Se sì, riprova
    //     } else {
    //         break; // Se no, esci dal ciclo
    //     }
    // }

  

    numeriEstratti.push(numeroEstratto); // Aggiungi il numero estratto all'array

    // Aggiorna l'interfaccia utente
    numeroEstrattoDOM.innerText = numeroEstratto;

    const celleNodeList = tableElement.querySelectorAll("#tabellaTabellone td");
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
