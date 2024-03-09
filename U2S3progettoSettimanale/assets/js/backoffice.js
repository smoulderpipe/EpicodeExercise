
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
const descrizioneProdotto = document.getElementById("descrizione");

const searchParams = new URLSearchParams(window.location.search);
const idProdotto = searchParams.get("id");

const deleteButtonElement = document.getElementById("delete-button");

window.addEventListener("load", () => {
  if (idProdotto) {
    const h1DOM = document.querySelector("h1");
    h1DOM.innerText = "Modifica il prodotto";
    fetch(`${url}/${idProdotto}`, {
      headers: {
        "Authorization": token,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("ID non valido o problemi di rete");
          throw new Error("ID non valido o problemi di rete");
        }
      })
      .then((productData) => {
        deleteButtonElement.style.display = "inline";
        nomeProdottoElement.value = productData.name;
        brandElement.value = productData.brand;
        prezzoElement.value = productData.price;
        urlImmagineElement.value = productData.imageUrl;
        descrizioneProdotto.value = productData.description;
      })
      .catch((error) => {
        console.error("Errore nel download dei dati:", error);
      });
  } else {
    deleteButtonElement.style.display = "none";
  }
});

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
    name: nomeProdotto,
    brand: brand,
    imageUrl: urlImmagine,
    price: prezzo,
    description: descrizione
  };

  let requestUrl = url;
  let requestMethod = "POST";

  if (idProdotto) {
    requestUrl = `${url}/${idProdotto}`;
    requestMethod = "PUT";
  }

  const options = {
    method: requestMethod,
    headers: {
      "Authorization": token,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  fetch(requestUrl, options)
    .then((response) => {
      if (response.ok) {
        if (idProdotto) {
          console.log("Prodotto aggiornato correttamente!");
          alert("Prodotto aggiornato correttamente!");
        } else {
          console.log("Prodotto creato correttamente!");
          alert("Prodotto creato correttamente!");
          svuotaForm();
        }
      } else {
        console.error("Errore durante l'operazione:", response.statusText);
        alert("Errore durante l'operazione:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Errore di rete:", error);
      alert("Errore di rete:", error);
    });
});

deleteButtonElement.addEventListener("click", () => {
  if (idProdotto) {
    if (confirm("Sei sicuro di voler eliminare questo prodotto?")) {
      const deleteUrl = `${url}/${idProdotto}`;
      const options = {
        method: "DELETE",
        headers: {
          "Authorization": token,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      };

      fetch(deleteUrl, options)
        .then((response) => {
          if (response.ok) {
            console.log("Prodotto eliminato con successo!");
            alert("Prodotto eliminato con successo!");
            window.location.href = "index.html"
          } else {
            console.error("Errore durante l'eliminazione del prodotto:", response.statusText);
            alert("Errore durante l'eliminazione del prodotto:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Errore di rete:", error);
          alert("Errore di rete:", error);
        });
    }
  } else {
    console.log("ID del prodotto non disponibile per l'eliminazione.");
  }
});

