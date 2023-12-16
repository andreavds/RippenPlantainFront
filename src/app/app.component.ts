import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', component: 'HomeComponent', url: '/home', icon: 'mail' },
    { title: 'Search', component: 'SearchComponent', url: '/search', icon: 'paper-plane' },
    { title: 'User', url: '/user', icon: 'heart' },
    { title: 'Logout', url: '/logout', icon: 'archive' },
  ];
  constructor(private menuController: MenuController,
    private authService: AuthService) {}

  closeMenuAndNavigate(url: string) {
    this.menuController.close().then(() => {
      console.log('Cerrando menú y navegando a:', url);
    });
  }

  closeMenuAndLogout() {
    this.menuController.close().then(() => {
      console.log('Cerrando menú y cerrando sesión');
      this.authService.logout();
    });
  }
}