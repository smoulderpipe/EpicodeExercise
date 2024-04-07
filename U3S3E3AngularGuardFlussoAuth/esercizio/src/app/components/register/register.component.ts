import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { passwordMatchValidator } from 'src/app/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  reactiveForm!: FormGroup;

  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      gender: new FormControl<string | null>(null),
      profilePic: new FormControl(null),
      bio: new FormControl(null),
      username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      passwordConf: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        passwordMatchValidator('password')
      ])
    });

    this.reactiveForm.get('password')?.valueChanges.subscribe(passwordValue => {
      this.reactiveForm.get('passwordConf')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.reactiveForm && this.reactiveForm.valid) {
      const user: User = this.reactiveForm.value;

      this.http.post(this.baseUrl, user)
        .subscribe(response => {
          console.log('Utente creato con successo:', response);
          alert('Grazie per esserti registrato!');
          window.location.href = "/login";
        }, error => {
          console.error('Errore nella creazione dell utente:', error);
          alert('Si è verificato un errore, riprovare più tardi');
        });
    } else {
      console.error('Il form non è valido!');
    }
  }
}