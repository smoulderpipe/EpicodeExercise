// https://www.pexels.com/api/documentation/

/*
1. Registrati per ottenere la tua API key: https://www.pexels.com/join/

2. La key, quando ottenuta, dovrà essere usata negli header della tua HTTP request con la proprietà:
{Authorization: "[LA TUA API KEY]"}

questo dovrebbe essere abbastanza per fare la richiesta GET con successo.

ESERCIZIO:  

1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina: 
https://api.pexels.com/v1/search?query=[your-query]
2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:https://api.pexels.com/v1/search?query=[your-secondary-query]
3) Il tasto "Edit" andrà sostituito con un tasto "Hide".
4) Quando si preme "Hide", l'intera card dovrebbe scomparire.
5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente.
6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.
7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.
Documentazione URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
*/


// const handleFetch = async () => {
//     const apiKey = "[LA TUA API KEY]";
//     const headers = {
//       Authorization: `Bearer ${apiKey}`
//     };

//     const url = `https://api.pexels.com/v1/search?query=clouds&per_page=20&page=1`;
//     const response = await fetch(url, {
//       headers: headers
//     });
//     const data = await response.json();

//     // ... resto del tuo codice che utilizza i dati
//   };

const row = document.getElementById("row");
row.innerHTML = "";

const apiKey = "3C1KdpeTnEsN0LCNJhUi3JtPJSSZ2YQGZww8N2OF7LZwtsokpwnEqVWf";

const options = {
    method: "GET",
    headers: {
        Authorization: "3C1KdpeTnEsN0LCNJhUi3JtPJSSZ2YQGZww8N2OF7LZwtsokpwnEqVWf",
        "Content-Type": "application/json",
    },
};

let loadImages = document.getElementById("load-images");
let secondaryImages = document.getElementById("secondary-images");

const functionLoadImages = async () => {
    row.innerHTML = "";
    const url = `https://api.pexels.com/v1/search?query=clouds`;
    const response = await fetch(url, options);
    const data = await response.json();
    for (let i = 0; i < data.photos.length; i++) {
        console.log(data.photos[i]);
        creaCard(data.photos[i]);
    }
}

const functionSecondaryImages = async () => {
    const url = `https://api.pexels.com/v1/search?query=rain`;
    const response = await fetch(url, options);
    const data = await response.json();
    for (let i = 0; i < data.photos.length; i++) {
        console.log(data.photos[i]);
        creaCard(data.photos[i]);
    }
}

loadImages.addEventListener("click", functionLoadImages);
secondaryImages.addEventListener("click", functionSecondaryImages);
buttonHide.addEventListener("click", hideCard);

function creaCard(photoData) {
    const col = document.createElement("div");
    col.classList.add("col-md-4");
    row.appendChild(col);
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "shadow-sm");
    col.appendChild(card);
    const img = document.createElement("img");
    img.classList.add("card-img-top", "bd-placeholder-img");
    card.appendChild(img);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-between", "align-items-center");
    cardBody.appendChild(buttonContainer);
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");
    buttonContainer.appendChild(btnGroup);
    const buttonView = document.createElement("button");
    buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnGroup.appendChild(buttonView);
    buttonView.innerText = "View";
    const buttonHide = document.createElement("button");
    buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnGroup.appendChild(buttonHide);
    buttonHide.innerText = "Hide";
    const small = document.createElement("small");
    small.classList.add("text-muted");
    btnGroup.appendChild(small);
    const cardUl = document.createElement("ul");
    cardUl.classList.add("list-group", "list-group-flush");
    card.appendChild(cardUl);
    const cardBody2 = document.createElement("div");
    cardBody2.classList.add("card-body");
    card.appendChild(cardBody2);

    img.src = photoData.src.landscape;
    small.innerText = photoData.id;

    buttonHide.addEventListener("click", () => {
        const col = buttonHide.closest(".col-md-4");
        col.style.display = "none";
    });

}

