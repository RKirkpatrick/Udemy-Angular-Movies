import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 14.99,
      },
      {
        title: 'Moana',
        releaseDate: new Date('2011-11-14'),
        price: 10.99,
      },
    ];

    this.moviesFutureReleases = [
      {
        title: 'Avengers',
        releaseDate: new Date('2022-7-14'),
        price: 24.99,
      },
      {
        title: 'Toy Stroy',
        releaseDate: new Date('2022-11-14'),
        price: 12.99,
      },
    ];
  }

  title = 'Udemy-Angular-Movies';
  moviesInTheaters;
  moviesFutureReleases;

  duplicateNumber(n: number) {
    return n * 2;
  }
}
