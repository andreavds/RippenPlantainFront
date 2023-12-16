import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "star-rating",
  templateUrl: "star-rating.component.html"
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  rate(index: number) {
    // Increment the rating by 1 when a star is clicked
    this.rating = index;
    // Emit the updated rating to the parent component
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number): string {
    if (this.isAboveRating(index)) {
      return 'grey'; 
    }

    switch (this.rating) {
      case 1:
      case 2:
        return 'red'; 
      case 3:
        return 'yellow';
      case 4:
      case 5:
        return 'green'; 
      default:
        return 'grey'; 
    }
  }

  isAboveRating(index: number): boolean {
    return index >= this.rating;
  }
}
