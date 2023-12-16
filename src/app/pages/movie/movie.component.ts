import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined;
  apiId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovieIdFromRoute();
    this.getMovieDetails();
  }

  getMovieIdFromRoute() {
    this.apiId = this.route.snapshot.paramMap.get('apiId');
    console.log('API ID:', this.apiId);
  }

  getMovieDetails() {
    if (this.apiId) {
      this.movieService.getMovieDetailsByApiId(this.apiId).subscribe((data: Movie) => {
        this.movie = data;
      });
    }
  }
}
