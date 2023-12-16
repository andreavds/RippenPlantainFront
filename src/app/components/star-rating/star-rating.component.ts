import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChanged = new EventEmitter<number>();

  rate(value: number) {
    this.rating = value;
    this.ratingChanged.emit(value);
  }
}
