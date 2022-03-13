import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviesInTheaters;
  moviesFutureReleases;

  constructor() {}

  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 14.99,
        poster:
          'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      },
      {
        title: 'Moana',
        releaseDate: new Date('2011-11-14'),
        price: 10.99,
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      },
    ];

    this.moviesFutureReleases = [
      {
        title: 'Avengers',
        releaseDate: new Date('2022-7-14'),
        price: 24.99,
        poster:
          'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      },
      {
        title: 'Toy Story',
        releaseDate: new Date('2022-11-14'),
        price: 12.99,
        poster:
          'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX190_CR0,1,190,281_.jpg',
      },
    ];
  }

  handleRating(rate: number) {
    alert(`The user selected ${rate}`);
  }
}
