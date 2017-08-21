import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import {Http} from '@angular/http';

let baseUrl = '';

@Injectable()
export class HomeoRepoService {

  constructor(public _http: Http) { }

  addPatient(paramsOption: PatientParams) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(`${baseUrl}/api/patient/create`, JSON.stringify(paramsOption), { headers: headers});
  }

}

export class PatientParams {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public dob?: Date,
    public maritalStatus?: string,
    public address?: string,
    public mobileNum?: number
  ) {

  }
}
