import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Importa tu AuthService

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://ripen-plantain-production.up.railway.app'; 

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getRequestHeaders(): HttpHeaders {
    const token = this.authService.getAuthToken();

    if (!token) {
      // Manejo de casos en los que el token no está disponible
      // Puedes lanzar un error, redirigir al usuario, etc.
      // Aquí lanzaremos un error por simplicidad
      throw new Error('Token de acceso no encontrado');
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getUserData(): Observable<any> {
    const headers = this.getRequestHeaders();

    return this.http.post<any>(`${this.apiUrl}/getUserData`, null, { headers });
  }

  modifyUser(userData: any): Observable<any> {
    const headers = this.getRequestHeaders();

    return this.http.put<any>(`${this.apiUrl}/modifyUser`, userData, { headers });
  }

  modifyUserPassword(newPassword: string): Observable<any> {
    const headers = this.getRequestHeaders();

    const requestBody = { newPassword };

    return this.http.put<any>(`${this.apiUrl}/modifyUserPassword`, requestBody, { headers });
  }

  // Resto de tus métodos...
}
