import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      passwordConf: new FormControl(null, [Validators.required, Validators.minLength(8), passwordMatchValidator]),
      gender: new FormControl<string | null>(null),
      profilePic: new FormControl(null),
      bio: new FormControl(null),
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValues = this.reactiveForm.value;
    const user: User = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      password: formValues.password,
      passwordConf: formValues.passwordConf,
      gender: formValues.gender,
      profilePic: formValues.profilePic,
      bio: formValues.bio,
      username: formValues.username,
    };
    if (this.reactiveForm.valid) {
      const user: User = this.reactiveForm.value;
      alert('Grazie per esserti registrato!')
      console.log('Nuovo utente registrato:', user);
      window.location.href = "/login";
    } else {
      console.error('Form is invalid!')
    }
  }
}