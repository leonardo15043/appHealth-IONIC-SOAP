import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertsModule } from '../alerts/alerts.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {}
  message: any;
  xmlResponse: string;

  constructor(
    public authService: AuthService,
    public alertsModule: AlertsModule
  ) { }

  ngOnInit() {
  }

  login() {

    this.authService.getLogin(this.user).subscribe(res => {

      this.message = JSON.parse(res.result.data.$value);
      this.xmlResponse = res.responseBody;

      if (this.message.status == 200) {
        localStorage.setItem('id_doctor', this.user.id);
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('password', this.user.password );
        this.user.password = '';
        this.alertsModule.confirmationAlert('', this.message.msg, '/home');
      } else {
        this.alertsModule.confirmationAlert('Error', this.message.msg, '');
      }

    }, err => {
      this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
    });

  }

}
