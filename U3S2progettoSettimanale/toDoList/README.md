## ToDoList App

### Descrizione:

Questa applicazione consente di gestire un elenco di ToDo (cose da fare) e di organizzarli per utente e stato di completamento. Le sue funzionalità principali includono:

    Visualizzazione di tutti i ToDo
    Filtro dei ToDo completati e non completati
    Visualizzazione dei ToDo per ciascun utente
    Completamento e ripristino di ToDo
    Ricerca dei ToDo per nome dell'autore

### Struttura:

L'applicazione è sviluppata in Angular ed è suddivisa nei seguenti componenti principali:

    AppComponent: Il componente principale che ospita il layout generale dell'applicazione.
    ToDoListComponent: Visualizza l'elenco completo dei ToDo filtrati per stato di completamento.
    CompletedTodosComponent: Visualizza solo i ToDo completati.
    UncompletedTodosComponent: Visualizza solo i ToDo non completati.
    UserComponent: Visualizza i ToDo organizzati per ciascun utente.

### Funzionamento:

    L'applicazione recupera i dati dei ToDo e degli utenti da un servizio (TodoService).
    I dati vengono filtrati e visualizzati nei componenti in base alla route corrente.
    I ToDo possono essere completati e ripristinati cliccando su di essi.
    È possibile cercare i ToDo per nome dell'autore tramite un campo di ricerca nel componente UserComponent.

### Componenti:

    TodoService: Recupera e aggiorna i dati dei ToDo e degli utenti.
    AppRoutingModule: Gestisce la navigazione tra i vari componenti dell'applicazione.

### File:

    index.html: Punto di ingresso dell'applicazione.
    app.component.ts: Componente principale che ospita il layout generale dell'applicazione.
    app.component.html: Template HTML del componente principale.
    app.module.ts: Modulo principale dell'applicazione che include i componenti e i moduli necessari.
    app-routing.module.ts: Modulo che gestisce il routing dell'applicazione.
    to-do-list.component.ts: Componente che visualizza l'elenco completo dei ToDo.
    to-do-list.component.html: Template HTML del componente ToDoListComponent.
    completed-todos.component.ts: Componente che visualizza i ToDo completati.
    completed-todos.component.html: Template HTML del componente CompletedTodosComponent.
    uncompleted-todos.component.ts: Componente che visualizza i ToDo non completati.
    uncompleted-todos.component.html: Template HTML del componente UncompletedTodosComponent.
    user.component.ts: Componente che visualizza i ToDo organizzati per utente.
    user.component.html: Template HTML del componente UserComponent.
    models/to-do.ts: Interfaccia che definisce la struttura di un ToDo.
    models/user.ts: Interfaccia che definisce la struttura di un utente.
    data.ts: File contenente i dati di esempio per i ToDo e gli utenti.

### Installazione:

    Clonare il repository del progetto.
    Installare le dipendenze: npm install
    Avviare l'applicazione: ng serve

### Sviluppatore:
[Il tuo nome o pseudonimo]

------

# ToDoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
