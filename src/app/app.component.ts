import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      // this.movies = [];
      this.movies = [
        {
          title: 'Spider-Man',
          releaseDate: new Date(),
          price: 14.99,
        },
        {
          title: 'Moana',
          releaseDate: new Date('2016-11-14'),
          price: 10.99,
        },
      ];
    }, 0);
  }

  title = 'Udemy-Angular-Movies';
  movies;

  duplicateNumber(n: number) {
    return n * 2;
  }
}
