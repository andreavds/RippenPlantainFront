import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerData = {
    username: '',
    email: '',
    password: '',
    fullname: ''
  };

  constructor(private http: HttpClient) {}

  onRegister() {
    this.http.post('https://ripen-plantain-production.up.railway.app/signup', this.registerData)
      .subscribe(
        (response: any) => {
          console.log('Registro exitoso:', response);
        },
        (error) => {
          console.error('Error en el registro:', error);
        }
      );
  }
}
