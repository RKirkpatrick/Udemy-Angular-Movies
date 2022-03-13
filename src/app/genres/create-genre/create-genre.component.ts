import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genere',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        { validators: [Validators.required, Validators.minLength(3)] },
      ],
    });
  }

  saveChanges(): void {
    //TODO save the genre

    this.router.navigate(['/genres']);
  }

  getErrorMessageFieldName() {
    const field = this.form.get('name');

    if (field.hasError('required')) {
      return 'The name field is required';
    }

    if (field.hasError('minlength')) {
      return 'The minimum length is 3';
    }

    return '';
  }
}