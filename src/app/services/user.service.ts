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

    const body: any = {
      name: data.name,
      lastname: data.lastname,
      identification: data.identification,
      birthdate: data.birthdate,
      gender: data.gender,
      email: data.email,
      address: data.address,
      city: data.city,
      user_type: data.user_type,
      password: '',
      cel: data.cel,
      rh: data.rh
    };

    if (data.password) {
      body.password = Md5.hashStr(data.password);
    }

    if (data.rh) {
      body.rh = data.rh;
    }

    return this.userData.call('addUser', body);

  }

  editUser( data, id_user) {

    const body: any = {
      id: id_user,
      name: data.name,
      lastname: data.lastname,
      identification: data.identification,
      birthdate: data.birthdate,
      gender: data.gender,
      email: data.email,
      address: data.address,
      city: data.city,
      user_type: data.user_type,
      password: '',
      cel: data.cel,
      rh: data.rh
    };

    if (data.rh) {
      body.rh = data.rh;
    }

    return this.userData.call('editUser', body);

  }

  listUser() {

    return this.userData.call('listUser', Array());

  }

  getUser( id_user ) {

    const body: any = {
      id: id_user
    };

    return this.userData.call('getUser', body);
  }

  getPatientsMonth( id ) {

    const body: any = {
      id_doctor: id
    };

    return this.userData.call('patientsMonth', body);

  }

}
