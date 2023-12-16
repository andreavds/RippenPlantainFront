import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://ripen-plantain-production.up.railway.app';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getRequestHeaders(): HttpHeaders {
    const token = this.authService.getAuthToken();

    if (!token) {
      throw new Error('Token de acceso no encontrado');
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  getUserDataById(userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    });
    return this.http.post<any>(`${this.apiUrl}/getUserData`, { userId }, { headers });
  }


  modifyUser(userData: any): Observable<any> {
    const headers = this.getRequestHeaders();

    return this.http.put<any>(`${this.apiUrl}/modifyuser`, userData, { headers });
  }

  modifyUserPassword(newPassword: string): Observable<any> {
    const headers = this.getRequestHeaders();

    const requestBody = { newPassword };

    return this.http.put<any>(`${this.apiUrl}/modifyuserpassword`, requestBody, { headers });
  }

  deleteUser(): Observable<any> {
    const headers = this.getRequestHeaders();

    return this.http.delete<any>(`${this.apiUrl}/deleteuser`, { headers });
  }
}
