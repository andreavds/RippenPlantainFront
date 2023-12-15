import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent {
  movie: any = {
    title: 'Kung Fu Panda',
    releaseYear: 2023,
    director: 'George Cluni',
    genre: 'Acción',
    description: 'Po el guerrero dragón es el más capo de todos',
    rating: '100%'
  };
}
