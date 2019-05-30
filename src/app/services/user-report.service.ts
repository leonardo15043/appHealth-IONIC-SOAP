import { Injectable } from '@angular/core';
import { NgxSoapService, ISoapMethod, Client, ISoapMethodResponse, security } from 'ngx-soap';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserReportService {

  private wsdl = environment.service.url;
  userData: any;

  constructor(
    private soapService: NgxSoapService
  ) {

    this.soapService.createClient(this.wsdl)
    .then(users => {
      this.userData = users;

    })
    .catch(err => console.log( JSON.stringify(err) ));
  }

  listReport( id ) {

    const body: any = {
      id_user: id
    };

    return this.userData.call('listReport', body);

  }

  addReport( data , id) {

    const body: any = {
      id_user: id,
      subject: data.subject,
      observation: data.observation
    };

    return this.userData.call('addReport', body);

  }

}
