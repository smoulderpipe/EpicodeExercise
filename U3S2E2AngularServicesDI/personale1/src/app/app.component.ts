import { Component, OnInit } from '@angular/core';
import { ServizioTestService } from 'src/app/servizio-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personale1';

  constructor(private servizioTest: ServizioTestService) {
  }
  ngOnInit(): void {
    console.log("ciao " + this.servizioTest.persone[1].nome);
  }
}
