import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { moviePostGetDTO } from './movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = environment.apiURL + '/movies';

  constructor(private http: HttpClient) {}

  public postGet(): Observable<moviePostGetDTO> {
    return this.http.get<moviePostGetDTO>(`${this.apiUrl}/postget`);
  }
}
