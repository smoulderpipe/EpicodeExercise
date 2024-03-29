import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercizio';
  posts!: Post[];
  related!: Post[];

  constructor() {
    this.getPosts().then((posts) => {
        this.posts = posts;
    });
  }

  async getPosts() {
    let response = await fetch('../../assets/db.json');
    let data = await response.json();
    return data;
}
}
