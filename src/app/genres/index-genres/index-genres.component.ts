import { Component, OnInit } from '@angular/core';
import { genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-generes',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css'],
})
export class IndexGenresComponent implements OnInit {
  genres: genreDTO[];
  columnsToDisplay = ['name', 'actions'];

  constructor(private genresService: GenresService) {}

  ngOnInit(): void {
    this.genresService.getAll().subscribe((genres) => {
      this.genres = genres;
    });
  }
}
