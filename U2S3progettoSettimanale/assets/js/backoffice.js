
// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDkyMTJkN2IxMTAwMTkwZTZkZTIiLCJpYXQiOjE3MDk4ODk4MjYsImV4cCI6MTcxMTA5OTQyNn0.CSA2L2B8_nNw4z5U5chGJk6Uti363dDzjVH2gAu3yu0

// You can use it in your request setting the headers in this way:

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDkyMTJkN2IxMTAwMTkwZTZkZTIiLCJpYXQiOjE3MDk4ODk4MjYsImV4cCI6MTcxMTA5OTQyNn0.CSA2L2B8_nNw4z5U5chGJk6Uti363dDzjVH2gAu3yu0"
// }
// })


// https://striveschool-api.herokuapp.com/api/product

const url = "https://striveschool-api.herokuapp.com/api/product";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDkyMTJkN2IxMTAwMTkwZTZkZTIiLCJpYXQiOjE3MDk4ODk4MjYsImV4cCI6MTcxMTA5OTQyNn0.CSA2L2B8_nNw4z5U5chGJk6Uti363dDzjVH2gAu3yu0";

const formElement = document.querySelector("form");
const nomeProdottoElement = document.getElementById("nome-prodotto");
const brandElement = document.getElementById("brand");
const prezzoElement = document.getElementById("prezzo");
const urlImmagineElement = document.getElementById("url-immagine");
const descrizioneProdotto = document.getElementById("descrizione")

const saveButtonElement = document.getElementById("save-button");
const resetButtonElement = document.getElementById("reset-button");

function svuotaForm() {
    nomeProdottoElement.value = "";
    brandElement.value = "";
    prezzoElement.value = "";
    urlImmagineElement.value = "";
    descrizioneProdotto.value = "";
}

resetButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    svuotaForm();
});

saveButtonElement.addEventListener("click", (event) => {
  event.preventDefault();

  const nomeProdotto = nomeProdottoElement.value;
  const brand = brandElement.value;
  const prezzo = prezzoElement.value;
  const urlImmagine = urlImmagineElement.value;
  const descrizione = descrizioneProdotto.value;
  
  const payload = {
    "name": nomeProdotto,
    "brand": brand,
    "imageUrl": urlImmagine,
    "price": prezzo,
    "description": descrizione
  };

  const options = {
    method: "POST",
    headers: {
        "Authorization": token,
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        console.log("Prodotto creato correttamente!");
        alert("Prodotto creato correttamente!");
        svuotaForm();
      } else {
        console.error("Errore durante la creazione del prodotto:", response.statusText);
        alert("Tutti i campi sono obbligatori, compila il form per intero.");
      }
    })
    .catch((error) => {
      console.error("Errore di rete:", error);
      alert("Errore di rete:", error);
    });

});

// const payload = {
//     "name": "Nommex",
//     "brand": "Nokia",
//     "imageUrl": "https://example.com/3310.jpg",
//     "price": 99,
//     "description": "Descrizione del prodotto"
// };

// const options = {
//     method: "POST",
//     headers: {
//         "Authorization": token,
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
// };


// fetch(url, options)
//     .then((response) => {
//         if (response.ok) {
//             console.log("Prodotto creato correttamente!");
//         } else {
//             console.error("Errore durante la creazione del prodotto:", response.statusText);
//         }
//     })
//     .catch((error) => {
//         console.error("Errore di rete:", error);
//     });