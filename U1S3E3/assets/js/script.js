/*
PROGETTAZIONE MACRO:
*/

/*
1) Definisco le variabili per collegare JS al DOM (ovvero: input, button, ul)
2) Scrivo una funzione che serva per creare i task (ovvero: li, button "completa", button "elimina")
3) Scrivo una funzione che serva per fare in modo che quando clicco su "aggiungi" venga chiamata la funzione precedentemente creata.
*/

/*
PROGETTAZIONE MICRO
*/

/*DEFINIZIONE DI VARIABILI PER COLLEGARE JS AL DOM
definisco una variabile che abbia come valore il campo input presente in html
definisco una variabile che abbia come valore il button "aggiungi" presente in html
definisco una variabile che abbia come valore il campo lista presente in html
*/
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

/*PREPARAZIONE FUNZIONE CHE CREA I TASK*/
// creo la funzione e le passo il parametro "taskText", che definirò nella funzione stessa

function addTask(taskText) {
    
// creo un nuovo elemento <li> che sarà il "taskElement"
// il parametro "taskText" che passo alla funzione deve avere il valore del testo contenuto dentro il nuovo <li>
// Aggiungo la classe "task" al nuovo elemento "li"

const taskElement = document.createElement("li");
taskElement.textContent = taskText;
taskElement.classList.add("task");

// Creo un elemento "button" per completare il task
// Imposto il testo del pulsante: "Completa"
// Aggiungo la classe "completeTaskButton" al pulsante
// Aggiungo un evento click al pulsante "Completa"
// Quando clicco su "completa", sul <li> creato deve essere applicata la classe "completed"

const completeTaskButton = document.createElement("button");
  completeTaskButton.textContent = "Completa";
  completeTaskButton.classList.add("completeTaskButton");
  completeTaskButton.addEventListener("click", () => {
    taskElement.classList.add("completed");
  });

// Creo un elemento "button" per eliminare il task
// Imposto il testo del pulsante: "Elimina"
// Aggiungo la classe "deleteTaskButton" al pulsante
// Aggiungo un evento click al pulsante "Elimina"
// Quando clicco sul pulsante "Elimina", il <li> creato deve essere eliminato

const deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "Elimina";
  deleteTaskButton.classList.add("deleteTaskButton");
  deleteTaskButton.addEventListener("click", () => {
    taskElement.parentNode.removeChild(taskElement);
  });

// Appendo il pulsante "Completa" al taskElement
// Appendo il pulsante "Elimina" al taskElement
// Appendo il taskElement al Tasklist

taskElement.appendChild(completeTaskButton);
  taskElement.appendChild(deleteTaskButton);
  taskList.appendChild(taskElement);
}

/*PREPARAZIONE FUNZIONE CHE CREA FA PARTIRE LA PRIMA FUNZIONE QUANDO SI FA CLICK SU AGGIUNGI*/

// Gestisco il click sul pulsante "Aggiungi"
// Prevengo il comportamento di default del form
// Recupero il valore testo inserito dall'utente
// Se il testo non è vuoto, la funzione deve aggiungere un nuovo task...
// ...e pulire il campo di testo

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });