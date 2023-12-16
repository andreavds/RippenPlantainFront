import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://ripen-plantain-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getFeed(): Observable<Movie[]> {
    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any[]>(`${this.apiUrl}/getFeed`, {}, { headers }).pipe(
      map((data: any[]) => {
        return data.map((item: any) => ({
          title: item.title,
          posterImage: item.posterImage,
          _id: item._id,
          userMean: item.userMean,
          criticMean: item.criticMean,
          apiId: item.apiId
        })) as Movie[];
      })
    );
  }

  getMovieDetailsByApiId(apiId: string): Observable<Movie> {
    const requestBody = {
      movieId: apiId
    };

    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(`${this.apiUrl}/getMovie`, requestBody, { headers }).pipe(
      map((data: any) => {
        return {
          title: data.title,
          posterImage: data.posterImage,
          description: data.description,
          genre: data.genre,
          userMean: data.userMean,
          criticMean: data.criticMean,
        } as Movie;
      })
    );
  }

  fuzzySearchMovies(title: string): Observable<Movie[]> {
    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestBody = { title };
    return this.http.post<Movie[]>(`${this.apiUrl}/fuzzySearchMovies`, requestBody, { headers });
  }

  rateMovie(apiId: string, userRating: number): Observable<any> {
    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const requestBody = { movieId: apiId, userRating };
    return this.http.put<any>(`${this.apiUrl}/ratemovie`, requestBody, { headers });
  }
}