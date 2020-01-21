import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/auth/service/patient.service';
import { Patient } from 'src/app/auth/model/Patient';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private patientService : PatientService) { }
  patient: Patient = new Patient();
  ngOnInit() {
    this.getPatient("21600308163");
  }

  getPatient(lbo:string){
    this.patientService.patient(lbo).subscribe(
      patient => {
        this.patient = patient;
      }
    );
  }

}
