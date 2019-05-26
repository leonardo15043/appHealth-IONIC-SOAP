import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlertsModule {

  constructor(
    public alertController: AlertController,
    public router:Router
  ) {
  }

  async confirmationAlert( $title , $message, $redirect) {
    const alert = await this.alertController.create({
      header: $title,
      message: $message
    });

    alert.present();
    setTimeout(() => {
      alert.dismiss();
      if ( $redirect != '') {
        this.router.navigateByUrl($redirect);
      }
    }, 2000);

  }

}
