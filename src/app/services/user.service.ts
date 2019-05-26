import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxSoapService, ISoapMethod, Client, ISoapMethodResponse, security } from 'ngx-soap';
import { Md5 } from 'ts-md5/dist/md5';



@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  addUser( data ) {

    const body = {
      name: data.name,
      lastname: data.lastname,
      identification: data.identification,
      birthdate: data.birthdate,
      gender: data.gender,
      email: data.email,
      address: data.address,
      city: data.city,
      user_type:1,
      password: Md5.hashStr(data.password),
    };

    return this.userData.call('addUser', body);

  }
}
