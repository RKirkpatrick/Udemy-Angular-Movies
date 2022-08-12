import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { movieTheatersCreationDTO } from './movie-theater.model';

@Injectable({
  providedIn: 'root',
})
export class MovieTheatersService {
  private apiUrl = environment.apiURL + '/movie-theaters';

  constructor(private http: HttpClient) {}

  public create(movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiUrl, movieTheaterDTO);
  }
}
