import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private apiUrl = environment.apiURL + '/ratings';

  constructor(private http: HttpClient) {}

  public rate(movieId: number, rating: number) {
    return this.http.post(this.apiUrl, { movieId, rating });
  }
}
