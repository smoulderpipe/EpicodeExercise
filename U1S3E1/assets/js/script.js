/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

//    prendi l'h1
//    modifica il contenuto
//    esegui funzione

const changeTitle = function () {
  let h1 = document.querySelector("h1");
  h1.innerText = "Qualcos'altro ;-)";
}

changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

// const addClassToTitle = function () {
//   let h1 = document.qyerySelector("h1");
//   h1.classList
// }
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

// const changeUrls = function () { 

// let property = document.querySelectorAll('a')
// for (let i = 0; i < property.length; i++) {
//   const footer = property[i].closest('footer');
//   if (!footer) {
//     property[i].setAttribute('href', "https://www.google.com");

//   }
// }
// }

const changeUrls = function (url) {
  let links = document.querySelectorAll('a:not(footer a)');
  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('href', 'https://www.google.com');
  }
};

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

// function removeLastLetter(element) {
  //crea un array di caratteri dal testo dell'elemento
  // const characters = Array.from(element.textContent);
  //rimuovi l'ultimo carattere dall'array
  // characters.pop();
  //crea una nuova stringa dai caratteri rimanenti
  // const newText = characters.join("");
  //imposta il nuovo testo dell'elemento
  // element.innerHTML = newText;
// }
//seleziona l'h1
// const h1 = document.querySelector("h1");
//aggiungi un event listener "click" all'h1
// h1.addEventListener("click", function () {
  //rimuovi l'ultima lettera dall'h1
  // removeLastLetter(h1);
// });

// removeLastLetter();

let h1 = document.querySelector("h1");

const makeItClickable = function () {
  h1.style.cursor = "pointer";
  h1.addEventListener('click', function() {
    let scritta = h1.innerText.split('');
    scritta.pop();
    let nuovaScritta = scritta.join('');
    h1.innerText = nuovaScritta;
  });
}

makeItClickable();


/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

// Passo 1: Selezionare il footer
// Passo 2: Aggiungere un event listener "click" al footer
// Passo 3: Ottenere l'URL del link interno
// Passo 4: Mostrare l'URL in un alert

function footerClick() {
  const footer = document.querySelector("footer");
  footer.style.cursor = 'pointer';
  footer.onclick = function () {
    const linkfooter = document.querySelectorAll('footer a')[0];
    const urllinkfooter = linkfooter.getAttribute('href');
    alert(urllinkfooter);
  };
}
footerClick();



/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

function generateTable2() {

  const container = document.getElementById("tableArea");
  const table = createElement("table");
  table.style.width = '100%';
  const headerRow = createElement("tr");
  const celle = createElement("th");
  const thImage = document.create("td");
  thImage.innerText = "Immagine";
  const thProduct = document.create("td");
  thProduct.innerText = "Prodotto";
  const thQntity = document.create("td");
  thQntity.innerText = "Quantità";
  const thPrice = document.createElement("td");
  thPrice.innerText = "Prezzo";
  headerRow.appendChild(thImage);
  headerRow.appendChild(thProduct);
  headerRow.appendChild(thQntity);
  headerRow.appendChild(thPrice);
  

}

/*
Funzione generateTable:

    Prendere l'elemento con id tableArea
    Creare una tabella
    Stilizzare la tabella (impostare larghezza)
    Creare una riga per l'header
    Creare le celle di header
        Impostare il testo della cella di header "Immagine"
        Impostare il testo della cella di header "Prodotto"
        Impostare il testo della cella di header "Quantità"
        Impostare il testo della cella di header "Prezzo"
    Aggiungere le celle di header alla riga di header
    Aggiungere la riga di header alla tabella

Variabile images:

    Array di link di immagini

Ciclo for:

    Creare le righe di dati
        Creare una riga per ogni immagine
        Creare una cella per l'immagine
            Inserire l'immagine nella cella
        Creare le altre celle di dati
            Impostare il testo della cella "Prodotto"
            Generare una quantità casuale
            Generare un prezzo casuale
        Aggiungere le celle alla riga
        Aggiungere la riga alla tabella

Funzione generateTable:

    Aggiungere la tabella al contenitore

Richiamo funzione:

    Richiamare la funzione generateTable per generare la tabella
*/








const generateTable = function () {
  // Prendere l'elemento con id tableArea
  const container = document.getElementById('tableArea');
  // Creare una tabella
  const table = document.createElement('table');
  // Stilizzare la tabella (impostare larghezza)
  table.style.width = '100%';
  // Creare una riga per l'header
  const firstRow = document.createElement('tr');
  // Creare le celle di header
  const thImage = document.createElement('th');
  thImage.innerText = 'Immagine'; // Impostare il testo della cella di header "Immagine"
  const thProduct = document.createElement('th');
  thProduct.innerText = 'Prodotto'; // Impostare il testo della cella di header "Prodotto"
  const thQuantity = document.createElement('th');
  thQuantity.innerText = 'Quantità'; // Impostare il testo della cella di header "Quantità"
  const thPrice = document.createElement('th');
  thPrice.innerText = 'Prezzo'; // Impostare il testo della cella di header "Prezzo"
//definire una variabile composta dai link delle immagini
// Aggiungere le celle di header alla riga di header
firstRow.appendChild(thImage);
firstRow.appendChild(thProduct);
firstRow.appendChild(thQuantity);
firstRow.appendChild(thPrice);
// Aggiungere la riga di header alla tabella
table.appendChild(firstRow);
  const images = [
    'https://m.media-amazon.com/images/I/81yJf4K+L1L._AC_SY450_.jpg',
    'https://m.media-amazon.com/images/I/61MRTh9xotL._AC_SX679_.jpg',
    'https://www.tradeinn.com/f/13805/138054505/samsung-smartphone-galaxy-s21-5g-8gb-128gb-6.2.jpg',
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661333885.70133010!500x500.png',
    'https://tomatosmartphone.it/wp-content/uploads/2022/06/EU-IN_Green.png',
  ]

// Creare le righe di dati
for (let i = 0; i < images.length; i++) {
  // Creare una riga per ogni immagine
  const newRow = document.createElement('tr');
  // Creare una cella per l'immagine
  const tdImage = document.createElement('td');
  tdImage.innerHTML = `<img src=${images[i]} alt="smartphone" height="200" />`; // Inserire l'immagine nella cella
  // Creare le altre celle di dati
  const tdProduct = document.createElement('td');
  tdProduct.innerText = 'Smartphone'; // Impostare il testo della cella "Prodotto"
  const tdQuantity = document.createElement('td');
  tdQuantity.innerText = Math.floor(Math.random() * 50); // Generare una quantità casuale
  const tdPrice = document.createElement('td');
  tdPrice.innerText = Math.floor(Math.random() * 500) + '€'; // Generare un prezzo casuale
  // Aggiungere le celle alla riga
  newRow.appendChild(tdImage);
  newRow.appendChild(tdProduct);
  newRow.appendChild(tdQuantity);
  newRow.appendChild(tdPrice);
  // Aggiungere la riga alla tabella
  table.appendChild(newRow);
}
// Aggiungere la tabella al contenitore
container.appendChild(table);
};
// Richiamare la funzione per generare la tabella
generateTable();


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