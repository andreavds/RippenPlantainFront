import { Component } from '@angular/core';
import { Movie } from '../models/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movies: Movie[] = [
  
    {
      title: 'Kung Fu Panda',
      releaseYear: 2024,
      director: 'George Cluni',
      genre: 'Acción',
      description: 'Po el guerrero dragón es el más capo de todos',
      rating: 83
    },
    {
      title: 'La la land',
      releaseYear: 2022,
      director: 'Steven Spielberg',
      genre: 'Musical',
      description: 'Se enamoran y cantan',
      rating: 62
    },
    {
      title: 'Haikyuu!! The battle at the garbage dump',
      releaseYear: 2024,
      director: 'Haruichi Furudate',
      genre: 'Deportes',
      description: 'te amo hinata',
      rating: 100
    }
    ];
}
