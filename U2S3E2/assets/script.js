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

const timer = document.getElementById("timer");

let startTime;
// Controlla se il tempo è già stato memorizzato in sessionStorage
if (sessionStorage.getItem("sessionStartTime")) {
    startTime = parseInt(sessionStorage.getItem("sessionStartTime"));
} else {
// Imposta l'inizio del tempo alla sessione corrente
    startTime = Date.now();
    sessionStorage.setItem("sessionStartTime", startTime);
}


// Funzione per aggiornare il timer ogni secondo
function updateTimer() {
    const tempoTrascorso = Math.floor((Date.now() - startTime) / 1000);
    timer.textContent = `${tempoTrascorso} secondi`;

// Aggiorna il timer ogni secondo
    setTimeout(updateTimer, 1000);
}

// Avvia l'aggiornamento del timer
updateTimer();