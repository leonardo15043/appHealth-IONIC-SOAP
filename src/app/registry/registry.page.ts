import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertsModule } from '../alerts/alerts.module';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  user: any = {};

  constructor(
    public userService: UserService,
    public alertsModule: AlertsModule,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    this.userService.addUser(this.user).subscribe(res => {
      this.alertsModule.confirmationAlert('', 'Usuario creado correctamente', '/home');
      this.authService.getLogin( this.user );
    }, err => {
      this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
    });
  }





}
