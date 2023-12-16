import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  credentials = {
    usernameOrEmail: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  async onLogin() {
    try {
      const response = await this.authService.loginUser(this.credentials);
      const token = response.token;
      console.log('Inicio de sesión exitoso. Token:', token);
      localStorage.setItem('accessToken', token);

      if (token) {
        this.router.navigate(['/']);
      } else {
        console.error('No se inició sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
}
