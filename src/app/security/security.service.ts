import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authenticationResponse, userCredentials } from './security.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private apiURL = environment.apiURL + '/accounts';
  private tokenKey: string = 'token';
  private expirationTokenKey: string = 'token-expiration';

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);

    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  getFieldFromJWT(field: string): string {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return '';
    }
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
  }

  getRole(): string {
    return 'admin';
  }

  register(
    userCredentials: userCredentials
  ): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + '/create',
      userCredentials
    );
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + '/login',
      userCredentials
    );
  }

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(
      this.expirationTokenKey,
      authenticationResponse.expiration.toString()
    );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
