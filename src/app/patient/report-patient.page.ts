import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddReportPatientPage } from './add-report-patient.page';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserReportService } from '../services/user-report.service';
import { AlertsModule } from '../alerts/alerts.module';

@Component({
  selector: 'app-report-patient',
  templateUrl: './report-patient.page.html',
  styleUrls: ['./report-patient.page.scss'],
})
export class ReportPatientPage  {

  id: any;
  report: Array<Object> = [];

  constructor(
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public userReportService: UserReportService,
    public alertsModule: AlertsModule
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.getReport( this.id );
    });
  }

  async addReport() {

    const modal = await this.modalController.create({
      component: AddReportPatientPage,
      id: 'modal_report',
      componentProps: {
        'id_user': this.id
      }
    });

    modal.onDidDismiss()  .then((data) => {
      this.getReport( this.id );
    });

    return await modal.present();

  }

  async getReport( id_user ) {

    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 100
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.userReportService.listReport( id_user ).subscribe(res => {

      if(res.result.data.$value){
        this.report = JSON.parse(res.result.data.$value);
      }

    }, err => {
      this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
    });

  }


}