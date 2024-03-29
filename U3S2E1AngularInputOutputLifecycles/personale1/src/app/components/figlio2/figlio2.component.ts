import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrls: ['./figlio2.component.scss']
})
export class Figlio2Component {

  @Input('loggato') loginFlag!: boolean;

}
