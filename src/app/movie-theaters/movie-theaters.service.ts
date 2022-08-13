import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from './movie-theater.model';

@Injectable({
  providedIn: 'root',
})
export class MovieTheatersService {
  private apiUrl = environment.apiURL + '/movie-theaters';

  constructor(private http: HttpClient) {}

  public get(): Observable<movieTheatersDTO[]> {
    return this.http.get<movieTheatersDTO[]>(this.apiUrl);
  }

  public create(movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiUrl, movieTheaterDTO);
  }
}
