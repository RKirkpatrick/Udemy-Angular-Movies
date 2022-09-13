import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { userCredentials } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(userCredentials: userCredentials) {
    this.securityService.login(userCredentials).subscribe({
      next: (authenticationResponse) => {
        this.securityService.saveToken(authenticationResponse);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errors = parseWebAPIErrors(error);
      },
    });
  }
}
