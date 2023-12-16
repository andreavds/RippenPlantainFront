// search.component.ts
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
  filterType: string = 'release_date';
  searchResults: Movie[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchTerm.trim() !== '') {
      this.movieService.searchMoviesWithFilter(this.searchTerm.trim(), this.filterType).subscribe(
        (data: Movie[]) => {
          this.searchResults = data;
        },
        (error) => {
          console.error('Error fetching movies:', error);
        }
      );
    }
  }
}
