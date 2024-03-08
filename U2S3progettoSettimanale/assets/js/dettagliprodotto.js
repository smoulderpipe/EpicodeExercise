/*

<div class="col-6">
    <img src="https://cdn.pixabay.com/photo/2015/01/06/08/02/sky-589982_1280.jpg" class="img-fluid"/>
    </div>

    <div class="col-6">
    <small>
    brand
    </small>

    <h3>
    nome
    </h3>

    <p class="price">
    prezzo
    </p>

    <p class="description">
    Descrizione...
    </p>
</div>

*/


const url = "https://striveschool-api.herokuapp.com/api/product";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDkyMTJkN2IxMTAwMTkwZTZkZTIiLCJpYXQiOjE3MDk4ODk4MjYsImV4cCI6MTcxMTA5OTQyNn0.CSA2L2B8_nNw4z5U5chGJk6Uti363dDzjVH2gAu3yu0"; // 

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
        creaDettaglio(data[i]);
    }
};

window.addEventListener("load", (event) => {
    caricaProdotti();
});

const row = document.getElementById("details-row");

function creaDettaglio(productData) {
    const colImg = document.createElement("div");
    colImg.classList.add("col-md-6");
    row.appendChild(colImg);

    const img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = productData.imageUrl;
    colImg.appendChild(img);

    const title = document.createElement("h2");
    title.innerText = productData.name;
    colImg.appendChild(title);

    const description = document.createElement("p");
    description.innerText = productData.description;
    colImg.appendChild(description);

    const price = document.createElement("p");
    price.classList.add("price");
    price.innerText = `€${productData.price}`;
    colImg.appendChild(price);

    const brand = document.createElement("p");
    brand.innerText = `Brand: ${productData.brand}`;
    colImg.appendChild(brand);
}