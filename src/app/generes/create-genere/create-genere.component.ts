import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genere',
  templateUrl: './create-genere.component.html',
  styleUrls: ['./create-genere.component.css'],
})
export class CreateGenereComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveChanges(): void {
    //TODO save the genre

    this.router.navigate(['/genres']);
  }
}
