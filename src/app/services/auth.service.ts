import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private apiUrl = 'https://ripen-plantain-production.up.railway.app';
  
    constructor(private http: HttpClient) {}
  
    getAuthToken(): string | null {
      return localStorage.getItem('accessToken');
    }

    async loginUser(credentials: { usernameOrEmail: string, password: string }): Promise<any> {
      try {
        let requestBody: any = {
          password: credentials.password
        };
  
        if (credentials.usernameOrEmail.includes('@')) {
          requestBody.email = credentials.usernameOrEmail;
        } else {
          requestBody.username = credentials.usernameOrEmail;
        }
  
        return await this.http.post(`${this.apiUrl}/signin`, requestBody).toPromise();
      } catch (error) {
        if (error instanceof HttpErrorResponse) {
          console.error('Error al iniciar sesión:', error.error);
        } else {
          console.error('Error al iniciar sesión:', error);
        }
        throw error;
      }
    }
  
    logout(): void {
      localStorage.removeItem('accessToken');
    }
  }
  