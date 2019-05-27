import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertsModule } from '../alerts/alerts.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  user: any = {};
  id: any;

  constructor(
    public userService: UserService,
    public alertsModule: AlertsModule,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];

      if ( this.id != 'new') {
        this.getUser( this.id );
      }

    });
  }

  ngOnInit() {
  }

  save() {

    if ( this.id == 'new') {

      this.user.user_type = 2;

      this.userService.addUser(this.user).subscribe(res => {
        this.alertsModule.confirmationAlert('', 'Paciente creado correctamente', '');
      }, err => {
        this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
      });

    } else {

      this.userService.editUser(this.user, this.id ).subscribe(res => {
        console.log(res);
        this.alertsModule.confirmationAlert('', 'Paciente editado correctamente', '/list-patient');
      }, err => {
        this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
      });

    }

  }

  getUser( id ) {

    this.userService.getUser( id ).subscribe(res => {
      this.user = JSON.parse(res.result.data.$value)[0];
      console.log(this.user);
    }, err => {
      this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
    });

  }

}
