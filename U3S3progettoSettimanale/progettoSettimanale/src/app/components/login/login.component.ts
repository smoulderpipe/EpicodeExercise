import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  @Output() loginSuccess = new EventEmitter<void>();

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        () => {
          console.log('Login effettuato con successo!');
          this.loginSuccess.emit();
          // Redirect o azioni da eseguire dopo il login
          window.location.href = "/profile";
        },
        error => {
          console.error('Login fallito:', error);
          // Gestire l'errore di login
        }
      );
    } else {
      console.error('Form di login non valido!');
    }
  }
}