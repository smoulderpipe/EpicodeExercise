const saveBtn = document.getElementById("save-btn");
const removeBtn = document.getElementById("remove-btn");

saveBtn.addEventListener("click", saveToLS);
removeBtn.addEventListener("click", removeFromLS);

function saveToLS() {
    const yourName = document.getElementById("your-name");
    const retrievedName = yourName.value;
    localStorage.setItem("name", retrievedName);
    yourName.value = "";
}

function removeFromLS() {
    if (localStorage.getItem("name")) {
        localStorage.removeItem("name");
    } else {
        alert("Non ci sono nomi da rimuovere.");
    }
}