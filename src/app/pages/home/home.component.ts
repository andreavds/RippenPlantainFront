import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  displayedMovies: Movie[] = [];
  showAllMovies = false;
  batchSize = 4;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('accessToken');

    if (token) {
      this.getMovies();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getMovies() {
    this.movieService.getFeed().subscribe((data: Movie[]) => {
      this.movies = data;
      this.updateDisplayedMovies();
    });
  }

  updateDisplayedMovies() {
    if (this.showAllMovies) {
      this.displayedMovies = [...this.movies];
    } else {
      this.displayedMovies = this.movies.slice(0, this.batchSize);
    }
  }

  loadMoreMovies() {
    this.batchSize += 4;
    this.updateDisplayedMovies();
  }

  navigateToMovie(apiId: string) {
    this.router.navigate(['/movie', apiId]);
  }
}
