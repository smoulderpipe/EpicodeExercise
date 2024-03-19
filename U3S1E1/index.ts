// interfaccia Smartphone
interface Smartphone {
    // proprietà interfaccia
    credito: number
    numeroChiamate: number

    // dichiarazione dei metodi
    ricarica(ammontare:number): void
    chiamata(minutiDurata: number): void
    get numero404(): number
    get getNumeroChiamate(): number
    azzeraChiamate(): void


}
class User implements Smartphone {
    name: string
    lastName: string
    credito: number = 0
    numeroChiamate: number = 0
    constructor(name: string, lastName: string) {
        this.name = name
        this.lastName = lastName
    }
    ricarica(ammontare: number): void {
        this.credito += ammontare
    }
    chiamata(minutiDurata: number): void {
        //inizio extra
        if(this.credito - (minutiDurata * 0.20) < 0) {
            console.log("Impossibile effettuare la chiamata")
            return 
        }
        //fine extra
        this.credito -= (minutiDurata * 0.20)
        this.numeroChiamate+= 1
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    get numero404() {
        return this.credito
    }
    get getNumeroChiamate() {
        return this.numeroChiamate
    }
}

const me = new User("lidia", "kovac")
me.ricarica(10)
me.chiamata(1)
me.chiamata(1)
me.chiamata(2)
me.chiamata(6)
console.log(me.numero404)
console.log(me.getNumeroChiamate)
me.azzeraChiamate()




// const saldoElement = document.getElementById("saldo") as HTMLSpanElement;
// const chiamateElement = document.getElementById("chiamate") as HTMLSpanElement;
// const ricaricaForm = document.getElementById("ricarica-form") as HTMLFormElement;
// const chiamataForm = document.getElementById("chiamata-form") as HTMLFormElement;
// const azzeraChiamateButton = document.getElementById("azzera-chiamate") as HTMLButtonElement;

// let saldo = 20; // Saldo iniziale
// let chiamate = 0; // Numero di chiamate iniziale

// ricaricaForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputElement = document.querySelector('#ricarica-importo') as HTMLInputElement;
//   const importoRicarica = Number(inputElement.value);
//   saldo += importoRicarica;
//   aggiornaSaldo();
// });

// chiamataForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputElement = document.querySelector('#chiamata-durata') as HTMLInputElement;
// const durataChiamata = Number(inputElement.value);
//   const costoChiamata = durataChiamata * 0.2;
//   if (saldo >= costoChiamata) {
//     saldo -= costoChiamata;
//     chiamate += durataChiamata;
//     aggiornaSaldo();
//     aggiornaChiamate();
//   } else {
//     alert("Saldo insufficiente per effettuare la chiamata!");
//   }
// });

// azzeraChiamateButton.addEventListener("click", () => {
//   chiamate = 0;
//   aggiornaChiamate();
// });

// function aggiornaSaldo() {
//   saldoElement.textContent = saldo.toFixed(2);
// }

// function aggiornaChiamate() {
//   chiamateElement.textContent = chiamate.toString();
// }




/*----------*/



//     interface Smartphone {
//     credito: number;
//     numeroChiamate: number;
// }

// class User implements Smartphone {
//     nome: string;
//     cognome: string;
//     credito: number;
//     numeroChiamate: number;

//     constructor(nome: string, cognome: string, creditoIniziale: number = 0, numeroChiamate: number = 0) {
//         this.nome = nome;
//         this.cognome = cognome;
//         this.credito = creditoIniziale;
//         this.numeroChiamate = numeroChiamate;
//     }

//     ricarica(ammontare: number) {
//         this.credito += ammontare;
//     }

//     chiamata(minuti: number) {
//         const costoChiamata = minuti * 20; // 20 centesimi a minuto
//         if (costoChiamata <= this.credito) {
//             this.credito -= costoChiamata;
//             this.numeroChiamate += minuti;
//             console.log(`Chiamata di ${minuti} minuti effettuata.`);
//         } else {
//             console.log("Credito insufficiente per effettuare la chiamata.");
//         }
//     }

//     chiamata404(): number {
//         return this.credito;
//     }

//     getNumeroChiamate(): number {
//         return this.numeroChiamate;
//     }

//     azzeraChiamate() {
//         this.numeroChiamate = 0;
//     }

//     verificaSaldo() {
//         console.log(`Saldo residuo di ${this.nome} ${this.cognome}: ${this.credito} centesimi.`);
//     }

//     verificaNumeroChiamate() {
//         console.log(`Numero di minuti di chiamate effettuati da ${this.nome} ${this.cognome}: ${this.numeroChiamate} minuti.`);
//     }
// }

// // Esempio di utilizzo:
// const utente1 = new User("Mario", "Rossi", 1000); // Credito iniziale di 1000 centesimi (10 euro)
// utente1.chiamata(5); // Effettua una chiamata di 5 minuti
// utente1.verificaSaldo(); // Stampa il saldo residuo
// utente1.verificaNumeroChiamate(); // Stampa il numero di chiamate effettuate
// utente1.azzeraChiamate(); // Azzera il numero di chiamate effettuate
