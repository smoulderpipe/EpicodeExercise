import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './models/user';
import { Validators } from '@angular/forms';
import { passwordMatchValidator } from './validators/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'esercizio';


  constructor() {
  }

  ngOnInit(): void {
  }

}