// prova a fare una fetch che ottiene tutti i dati dall'api specificata e a stampare gli oggetti crudi in console

// const convertInJson = (response) => {
//     return response.json();
// }

// 1) https://striveschool-api.herokuapp.com/books qui c'è il database con il quale voglio mettermi in contatto
// 2) fetch dell'api
// 3) ricevo un array, devo convertirlo in json
// 4) stampiamo in console il risultato

//SINTASSI AJAX:

// fetch("https://striveschool-api.herokuapp.com/books")
// //si occupa di gestire la promise della fetch
// .then(response => response.json()) 
// //si occupa di gestire la promise del json
// //"data" si chiama così per naming convention (come tutti i parametri che stiamo utilizzando)
// .then(data => data.forEach(book => {
//     console.log(book); //funzionaaaa!
// }))
// .catch(error => console.error(error))

//SINTASSI ASYNC / AWAIT:

const handleFetch = async () => {
    //async richiede un risultato di tipo promise
    //async abilita await
    const response = await fetch("https://striveschool-api.herokuapp.com/books");
    const data = await response.json();
    // for (let i = 0; i < data.length; i++){
    // }
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        creaCard(data[i]);
    }
}

document.addEventListener("DOMContentLoaded", handleFetch);

// 5) creiamo l'oggetto card dinamicamente con i dati presi dall'api

function creaCard(bookData) {

const col = document.createElement("div");
col.classList.add("col-3");
const row = document.getElementById("row");
row.appendChild(col);
const card = document.createElement("div");
card.classList.add("card");
col.appendChild(card);
const img = document.createElement("img");
img.classList.add("card-img-top");
card.appendChild(img);
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");
card.appendChild(cardBody);
const cardUl = document.createElement("ul");
cardUl.classList.add("list-group", "list-group-flush");
card.appendChild(cardUl);
const cardBody2 = document.createElement("div");
cardBody2.classList.add("card-body");
card.appendChild(cardBody2);

img.src = bookData.img;
}
