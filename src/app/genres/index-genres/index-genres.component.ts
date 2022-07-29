import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-generes',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css'],
})
export class IndexGenresComponent implements OnInit {
  constructor(private genresService: GenresService) {}

  ngOnInit(): void {
    this.genresService.getAll().subscribe((genres) => {
      console.log(genres);
    });
  }
}
