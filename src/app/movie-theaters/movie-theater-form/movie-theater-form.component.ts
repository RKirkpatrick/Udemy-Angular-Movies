import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  coordinatesMap,
  coordinatesMapWithMessage,
} from 'src/app/utilities/map/coordinate';
import { movieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css'],
})
export class MovieTheaterFormComponent implements OnInit {
  form: FormGroup;
  initialCoordinates: coordinatesMapWithMessage[] = [];

  @Input()
  model: movieTheatersCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      longitude: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      latitude: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.initialCoordinates.push({
        latitude: this.model.latitude,
        longitude: this.model.longitude,
        message: '',
      });
    }
  }

  onSelectedLocation(coordinates: coordinatesMap) {
    this.form.patchValue(coordinates);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
