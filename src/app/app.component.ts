import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', component: 'HomeComponent', url: '/home', icon: 'mail' },
    { title: 'Movie', url: '/movie', icon: 'paper-plane' },
    { title: 'User', url: '/user', icon: 'heart' },
    { title: 'Logout', url: '/logout', icon: 'archive' },
  ];
  constructor(private menuController: MenuController) {}

  closeMenuAndNavigate(url: string) {
    this.menuController.close().then(() => {
      console.log('Cerrando menú y navegando a:', url);
    });
  }

}
