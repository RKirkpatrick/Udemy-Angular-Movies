import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  form: FormGroup;

  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' },
  ];

  movies = [
    {
      title: 'Spider-Man',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX190_CR0,0,190,281_.jpg',
    },
    {
      title: 'Moana',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX190_CR0,0,190,281_.jpg',
    },
    {
      title: 'Inception',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg',
    },
  ];

  originalMovies = this.movies;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    });

    this.form.valueChanges.subscribe((values) => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        // Case insensitive
        // (movies) =>
        //   movies.title.toLowerCase().indexOf(values.title.toLowerCase()) !== -1
        // Case sensitive
        (movies) => movies.title.indexOf(values.title) !== -1
      );
    }
  }

  clearForm() {
    this.form.reset();
  }
}
