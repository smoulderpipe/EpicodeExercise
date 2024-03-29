import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personale1';
  
  /*esempio OUTPUT*/
  greet(name: string) {
    alert('Ciao ' + name);
  }

  /*esempio INPUT*/
  utenteLoggato = true;

}
