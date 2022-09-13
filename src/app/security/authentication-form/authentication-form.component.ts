import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCredentials } from '../security.model';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css'],
})
export class AuthenticationFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  action: string = 'Register';

  @Output()
  onSubmit = new EventEmitter<userCredentials>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  getEmailErrorMessage() {
    var field = this.form.get('email');
    if (field.hasError('required')) {
      return 'The email field is required';
    }

    if (field.hasError('email')) {
      return 'The email is invalid';
    }

    return '';
  }
}
