import { Component , ViewChild, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../services/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  datChart: any = {};
  users: Array<Object> = [];

  constructor(
    public userService: UserService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getPatientsMonth(70);
  }

  async getPatientsMonth( id ) {

    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 900
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.userService.getPatientsMonth( id ).subscribe(res => {
      this.datChart = JSON.parse(res.result.data.$value);
      this.doughnutChartMethod( this.datChart );
    }, err => {
      console.error(err);
    });

    this.userService.listUser(5).subscribe(res => {
      this.users = JSON.parse(res.result.data.$value);
    }, err => {
      console.error(err);
    });

  }

  doughnutChartMethod( data ) {

    console.log(data);

    let amountMonths: any = [];
    let Months: any = [];

    for (let i = 0; i < data.length; i++) {
      amountMonths.push(data[i]['cantidad']);
      Months.push(data[i]['mes']);
    }


    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: Months,
        datasets: [{
          label: '# of Votes',
          data: amountMonths,
          backgroundColor: [
            'rgb(255, 159, 64)',
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }, options: {
        legend: {
          position: 'left',
      }
      },
    });
  }


}

