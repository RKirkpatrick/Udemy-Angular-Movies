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
    return false;
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

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(
      this.expirationTokenKey,
      authenticationResponse.expiration.toString()
    );
  }
}
