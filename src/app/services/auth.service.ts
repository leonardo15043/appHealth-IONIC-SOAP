import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxSoapService, ISoapMethod, Client, ISoapMethodResponse, security } from 'ngx-soap';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  getLogin( user ) {
    user.password = Md5.hashStr(user.password);
    return this.userData.call('doAuthenticate', user);
  }

}
