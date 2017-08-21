import { Component, OnInit } from '@angular/core';
import {PatientParams, HomeoRepoService} from "../../services/homeo-repo.service";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  firstName: string;
  lastName: string;
  dob: Date;
  address: string;
  mobileNum: number;
  maritalStatus: string;

  maritalStatusCat = [
    {value: 'single', viewValue: 'Single'},
    {value: 'married', viewValue: 'Married'}
  ];
  constructor(public homeoRepoService: HomeoRepoService) { }

  ngOnInit() {
  }

  addPatientHandler($event) {
    console.log(this);
    let patientParams = new PatientParams();
    patientParams.firstName = this.firstName;
    patientParams.lastName = this.lastName;
    patientParams.dob = this.dob;
    patientParams.maritalStatus = this.maritalStatus;
    patientParams.address = this.address;
    patientParams.mobileNum = this.mobileNum;
    this.homeoRepoService.addPatient(patientParams).subscribe((res) => {
        console.log('res', res);
        this.clearAll();
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      });
  }

  clearAll() {
    this.firstName = '';
    this.lastName = '';
    this.dob = null;
    this.maritalStatus = '';
    this.address = '';
    this.mobileNum = null;
  }

}
