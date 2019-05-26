import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertsModule } from '../alerts/alerts.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  user: any = {};

  constructor(
    public userService: UserService,
    public alertsModule: AlertsModule,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    this.user.user_type = 2;

    this.userService.addUser(this.user).subscribe(res => {
      this.alertsModule.confirmationAlert('', 'Paciente creado correctamente', '');
    }, err => {
      this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
    });
  }

}
