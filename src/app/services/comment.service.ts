import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://ripen-plantain-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getMovieComments(movieId: string): Observable<Comment[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    });

    return this.http.post<Comment[]>(`${this.apiUrl}/getMovieComments`, { movieId }, { headers }).pipe(
        map(comments => 
          comments.reverse())
        );
      }

  commentMovie(apiId: string, content: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    });

    const requestBody = {
      movieId: apiId,
      content
    };

    return this.http.post(`${this.apiUrl}/commentMovie`, requestBody, { headers });
  }

  commentComment(commentId: string, content: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    });

    const requestBody = {
      parentComment: commentId,
      content
    };

    return this.http.post(`${this.apiUrl}/commentComment`, requestBody, { headers });
  }

  getCommentReplies(commentId: string): Observable<Comment[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    });

    return this.http.post<Comment[]>(`${this.apiUrl}/getCommentComments`, { commentId }, { headers });
  }
}
