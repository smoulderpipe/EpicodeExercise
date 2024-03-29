import { Component, OnInit } from '@angular/core';
import { ServizioTestService } from 'src/app/servizio-test.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent {

  constructor(public servizioTest: ServizioTestService) {
  }
  
  ngOnInit(): void {
    console.log(this.servizioTest.persone)
  }

}
