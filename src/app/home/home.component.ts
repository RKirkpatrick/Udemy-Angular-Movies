import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviesInTheaters;
  moviesFutureReleases;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getHomePageMovies().subscribe((homeDTO) => {
      this.moviesFutureReleases = homeDTO.upcomingReleases;
      this.moviesInTheaters = homeDTO.inTheaters;
    });
  }
}
