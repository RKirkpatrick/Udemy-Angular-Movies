import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import {
  homeDTO,
  movieCreationDTO,
  movieDTO,
  moviePostGetDTO,
  moviePutGetDTO,
} from './movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = environment.apiURL + '/movies';

  constructor(private http: HttpClient) {}

  public getHomePageMovies(): Observable<homeDTO> {
    return this.http.get<homeDTO>(this.apiUrl);
  }

  public getById(id: number): Observable<movieDTO> {
    return this.http.get<movieDTO>(`${this.apiUrl}/${id}`);
  }

  public filter(values: any): Observable<any> {
    const params = new HttpParams({ fromObject: values });
    return this.http.get<movieDTO[]>(`${this.apiUrl}/filter`, {
      params,
      observe: 'response',
    });
  }

  public postGet(): Observable<moviePostGetDTO> {
    return this.http.get<moviePostGetDTO>(`${this.apiUrl}/postget`);
  }

  public putGet(id: number): Observable<moviePutGetDTO> {
    return this.http.get<moviePutGetDTO>(`${this.apiUrl}/putget/${id}`);
  }

  public edit(id: number, movieCreationDTO: movieCreationDTO) {
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }

  public create(movieCreationDTO: movieCreationDTO): Observable<number> {
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.post<number>(this.apiUrl, formData);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  private BuildFormData(movie: movieCreationDTO): FormData {
    const formData = new FormData();

    formData.append('title', movie.title);
    formData.append('summary', movie.summary);
    formData.append('trailer', movie.trailer);
    formData.append('inTheaters', String(movie.inTheaters));
    if (movie.releaseDate) {
      formData.append('releaseDate', formatDateFormData(movie.releaseDate));
    }

    if (movie.poster) {
      formData.append('poster', movie.poster);
    }

    formData.append('genresIds', JSON.stringify(movie.genresIds));
    formData.append('movieTheatersIds', JSON.stringify(movie.movieTheatersIds));
    formData.append('actors', JSON.stringify(movie.actors));

    return formData;
  }
}
