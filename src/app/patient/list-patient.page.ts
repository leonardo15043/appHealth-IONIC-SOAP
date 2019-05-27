import { Component , OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertsModule } from '../alerts/alerts.module';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.page.html',
  styleUrls: ['./list-patient.page.scss'],
})
export class ListPatientPage  {

  users: Array<Object> = [];

  constructor(
    public userService: UserService,
    public alertsModule: AlertsModule,
    public loadingController: LoadingController
  ) {

  }
  ionViewWillEnter() {
    this.users = [];
    this.DataLoading();
  }

    async DataLoading() {

      const loading = await this.loadingController.create({
        message: 'Cargando...',
        duration: 100
      });

      await loading.present();

      const { role, data } = await loading.onDidDismiss();

      this.userService.listUser().subscribe(res => {
        this.users = JSON.parse(res.result.data.$value);

      }, err => {
        this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
      });

    }

}
