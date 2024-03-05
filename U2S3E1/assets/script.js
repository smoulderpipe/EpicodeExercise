//esercizio 1

class Utente {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    confrontaEta(altroUtente) {
        if (this.age > altroUtente.age) {
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
        } else if (this.age < altroUtente.age) {
            return `${altroUtente.firstName} è più vecchio di ${this.firstName}`;
        } else {
            return `${this.firstName} e ${altroUtente.firstName} hanno la stessa età`;
        }
    }
}

const p1 = new Utente('Mario', 'Rossi', 40, 'Roma');
const p2 = new Utente('Anna', 'Verdi', 30, 'Milano');
const p3 = new Utente('Giovanna', 'Bianchi', 30, 'Napoli');

console.log(p1.confrontaEta(p2));
console.log(p2.confrontaEta(p3));

//extra aggiunto da me:

class Lavoro extends Utente {
    constructor(_firstName, _lastName, _age, _location, _lavoro) {
        super(_firstName, _lastName, _age, _location);
        this.lavoro = _lavoro;
    }
}

const p4 = new Lavoro('Giuseppe', 'Verdi', 45, 'Bologna', 'Sviluppatore');
console.log(p4);



//esercizio 2

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    stessoPadrone(altroPet) {
        if (this.ownerName === altroPet.ownerName) {
            console.log('Stesso proprietario');
            return true;
          } else {
            console.log('Proprietario diverso');
            return false;
          }
    }
}

// const gatto = {
//     anni: 4,
//     colore: rosso
// }



const pet1 = new Pet('Bobby', 'Fausto', 'dog', 'pinscher');
const pet2 = new Pet('Teddy', 'Fausto', 'cat', 'stray');
pet1.stessoPadrone(pet2);

// console.log(newPet.stessoPadrone(pet2));

const petList = document.getElementById('petList');


function addToList(e) {
    console.log(e);
    e.preventDefault();
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);

    const li = document.createElement('li');
    li.innerText = `${petName} (proprietario: ${ownerName}): ${species} ${breed ? `(${breed})` : ''}`;
    petList.appendChild(li);

    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
}

document.getElementById("addToListBtn").addEventListener("click", addToList);
