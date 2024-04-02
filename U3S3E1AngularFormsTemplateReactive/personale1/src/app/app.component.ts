import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personale1';
  @ViewChild('myForm') form?: NgForm;
  onSubmit() {
    console.log(this.form);
  }
}
