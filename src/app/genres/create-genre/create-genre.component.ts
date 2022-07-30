import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router, private genreService: GenresService) {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO): void {
    this.genreService.create(genreCreationDTO).subscribe({
      error: console.error,
      complete: () => this.router.navigate(['/genres']),
    });
  }
}
