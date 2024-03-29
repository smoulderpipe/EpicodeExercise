import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioTestService {
  persone = [
    {
      nome: "luca",
      cognome: "rossi",
      isOnline: true,
      color: "blueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblue"
    },
    {
      nome: "marco",
      cognome: "verdi",
      isOnline: false,
      color: "red"
    },
    {
      nome: "anna",
      cognome: "neri",
      isOnline: false,
      color: "yellow"
    },
    {
      nome: "leonardo",
      cognome: "qwerty",
      isOnline: true,
      color: "green"
    },
    {
      nome: "pannocchia",
      cognome: "babbo",
      isOnline: false,
      color: "purple"
    }
  ]
}
