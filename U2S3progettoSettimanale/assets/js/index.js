/* <div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */


const url = "https://striveschool-api.herokuapp.com/api/product";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDkyMTJkN2IxMTAwMTkwZTZkZTIiLCJpYXQiOjE3MDk4ODk4MjYsImV4cCI6MTcxMTA5OTQyNn0.CSA2L2B8_nNw4z5U5chGJk6Uti363dDzjVH2gAu3yu0";

const options = {
    method: "GET",
    headers: {
        Authorization: token,
        "Content-Type": "application/json",
    },
};

const caricaProdotti = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        creaCard(data[i]);
    }
}

window.addEventListener("load", (event) => {
    caricaProdotti();
  });

const row = document.getElementById("products-row");

function creaCard(productData) {
    const col = document.createElement("div");
    col.classList.add("col-md-4");
    row.appendChild(col);
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "shadow-sm");
    col.appendChild(card);
    const img = document.createElement("img");
    img.classList.add("card-img-top", "bd-placeholder-img");
    card.appendChild(img);
    img.src = productData.imageUrl;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-between", "align-items-center");
    const cardTitle = document.createElement("h5");
    cardTitle.innerText = productData.name;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);
    const cardText = document.createElement("p");
    cardText.innerText = productData.description;
    cardText.classList.add("card-text");
    cardBody.appendChild(cardText);
    cardBody.appendChild(buttonContainer);
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");
    buttonContainer.appendChild(btnGroup);
    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnGroup.appendChild(buttonEdit);
    buttonEdit.innerText = "Modifica";
    const buttonDiscover = document.createElement("button");
    buttonDiscover.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnGroup.appendChild(buttonDiscover);
    buttonDiscover.innerText = "Scopri di più";

    buttonDiscover.addEventListener("click", () => {
        window.location.href = `dettaglio-prodotto.html?id=${productData._id}`;
      });

    buttonEdit.addEventListener("click", () => {
        window.location.href = `back-office.html?id=${productData._id}`;
      });

    // buttonDelete.addEventListener("click", async () => {
    //     const productId = productData._id;
      
    //     const deleteOptions = {
    //       method: "DELETE",
    //       headers: {
    //         Authorization: token,
    //         "Content-Type": "application/json",
    //       },
    //     };
      
    //     const deleteResponse = await fetch(`${url}/${productId}`, deleteOptions);
      
    //     if (deleteResponse.ok) {
    //       console.log("Prodotto correttamente cancellato!");
    //       const col = buttonDelete.closest(".col-md-4");
    //       col.style.display = "none";
    //     } else {
    //       console.error("Errore durante la cancellazione dell'oggetto:", deleteResponse.statusText);
    //     }
    //   });
}

