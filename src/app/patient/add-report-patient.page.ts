import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertsModule } from '../alerts/alerts.module';
import { UserReportService } from '../services/user-report.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-add-report-patient',
  templateUrl: './add-report-patient.page.html',
  styleUrls: ['./add-report-patient.page.scss'],
})
export class AddReportPatientPage  {

  report: any = {};

  @Input() id_user:any;

  constructor(
    public modalCtrl: ModalController,
    public alertsModule: AlertsModule,
    public userReportService: UserReportService
  ) { }

  close() {
    this.modalCtrl.dismiss();
  }

  save() {
      console.log(this.report);
      this.userReportService.addReport(this.report,this.id_user).subscribe(res => {
       // this.alertsModule.confirmationAlert('', 'Reporte creado correctamente', '');
        this.modalCtrl.dismiss();
      }, err => {
        this.alertsModule.confirmationAlert('Error', 'Ocurrio un error , intente mas tarde', '');
      });
  }

}
