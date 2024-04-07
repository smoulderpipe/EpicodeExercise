import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {

  private baseUrl = 'http://localhost:3000/users';
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>(`${this.baseUrl}`).subscribe((data: User[]) => {
      this.users = data;
      console.log(data.map(user => user.username));
    });
  }

}