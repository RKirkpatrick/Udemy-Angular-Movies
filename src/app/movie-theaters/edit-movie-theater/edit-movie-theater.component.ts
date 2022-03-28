import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css'],
})
export class EditMovieTheaterComponent implements OnInit {
  model: movieTheatersDTO = {
    name: 'Regal Evergreen Parkway & RPX',
    latitude: 45.53917,
    longitude: -122.87165,
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {}
}
