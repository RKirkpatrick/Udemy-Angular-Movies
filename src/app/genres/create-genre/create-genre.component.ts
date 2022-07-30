import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private genreService: GenresService) {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO): void {
    this.genreService.create(genreCreationDTO).subscribe({
      error: (error) => (this.errors = parseWebAPIErrors(error)),
      complete: () => this.router.navigate(['/genres']),
    });
  }
}
