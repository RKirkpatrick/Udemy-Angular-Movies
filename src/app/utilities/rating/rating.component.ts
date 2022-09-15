import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();
  previousRate = 0;
  maxRatingArr = [];

  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }
  handleMouseLeave() {
    this.selectedRate = this.previousRate !== 0 ? this.previousRate : 0;
  }

  rate(index: number) {
    if (this.securityService.isAuthenticated()) {
      this.selectedRate = index + 1;
      this.previousRate = this.selectedRate;
      this.onRating.emit(this.selectedRate);
    } else {
      Swal.fire('Error', 'You need to login before voting', 'error');
    }
  }
}
