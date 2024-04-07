import { Component, OnInit, EventEmitter, Input} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>; // Aggiungi '!' per dichiararlo come opzionale

  @Input() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkLoginStatus();
  }

  // Aggiungi un metodo per controllare lo stato di login dopo il login
  checkLoginStatus() {
    this.isLoggedIn$ = this.authService.isLoggedIn(); // Assegna l'Observable a isLoggedIn$
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log("logout effettuato con successo")
  }
}