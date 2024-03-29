import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent {

  /*esempio OUTPUT*/

  @Output() greetEvent = new EventEmitter();
  name = 'Paola';

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }

}
