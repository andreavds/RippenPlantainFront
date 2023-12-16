import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm: string = '';
  searchResults: Movie[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchTerm.trim() !== '') {
      this.movieService.fuzzySearchMovies(this.searchTerm.trim()).subscribe((data: Movie[]) => {
        this.searchResults = data;
      });
    }
  }
}
