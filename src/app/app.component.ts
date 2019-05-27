import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    }, {
      title: 'Agregar Paciente',
      url: '/add-patient/new',
      icon: 'person-add'
    }, {
      title: 'Lista de Pacientes',
      url: '/list-patient',
      icon: 'contacts'
    }
  ];

  username:any;
  email:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.username = localStorage.getItem('name');
      this.email = localStorage.getItem('email');

      this.splashScreen.hide();
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
