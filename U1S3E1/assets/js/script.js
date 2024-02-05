/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

//    prendi l'h1
//    modifica il contenuto
//    esegui funzione

const changeTitle = function () {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Qualcos'altro ;-)";
}

changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
  document.querySelector("h1").className = "myHeading";
}

addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
  let selettore = document.querySelectorAll('div p')
  for (let i = 0; i < selettore.length; i++) {
    selettore[i].innerText = "ciao ciao ciao";
  }
}

changePcontent();


/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () { 

let property = document.querySelectorAll('a')
for (let i = 0; i < property.length; i++) {
  const footer = property[i].closest('footer');
  if (!footer) {
    property[i].setAttribute('href', "https://www.google.com");

  }
}
}

changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
  let secondList = document.getElementById("secondList");
  secondList.innerHTML += "<li>Ciaone</li>";

}
addToTheSecond();

// oppure (tutte e due sono valide)

// const addToTheSecond2 = function () {
//   let li = document.createElement('li');
//   li.innerText = "Testo aggiunto";
//   document.getElementById("secondList").appendChild(li);
// }
// addToTheSecond2();


/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
  //seleziona il primo div
  const primoDiv = document.querySelector("div");
  //crea un nuovo elemento paragrafo
  const paragrafo = document.createElement("p");
  //imposta il testo del paragrafo
  paragrafo.innerText = "Mamma mia quanti 'ciao'!";
  //aggiungi il paragrafo al primo div
  primoDiv.appendChild(paragrafo);
};

addParagraph();


/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () { 
//seleziona la prima ul
const unorderedList1 = document.querySelector("ul");
//rimuovi la lista
unorderedList1.remove();

}

hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
  //seleziona tutte le liste non ordinate
  const unorderedList2 = document.getElementById("secondList");
//crea e assegna la proprietà background color
  unorderedList2.setAttribute('style', 'background-color: green');
 }

 paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

function removeLastLetter(element) {
  //crea un array di caratteri dal testo dell'elemento
  const characters = Array.from(element.textContent);
  //rimuovi l'ultimo carattere dall'array
  characters.pop();
  //crea una nuova stringa dai caratteri rimanenti
  const newText = characters.join("");
  //imposta il nuovo testo dell'elemento
  element.innerHTML = newText;
}
//seleziona l'h1
const h1 = document.querySelector("h1");
//aggiungi un event listener "click" all'h1
h1.addEventListener("click", function () {
  //rimuovi l'ultima lettera dall'h1
  removeLastLetter(h1);
});

removeLastLetter();


/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () { }

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () { }

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }