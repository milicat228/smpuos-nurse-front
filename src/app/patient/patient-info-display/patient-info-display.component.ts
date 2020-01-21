import { PatientRestService } from './../service/patient-rest.service';
import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/Patient';

@Component({
  selector: 'app-patient-info-display',
  templateUrl: './patient-info-display.component.html',
  styleUrls: ['./patient-info-display.component.css']
})
export class PatientInfoDisplayComponent implements OnInit {
  @Input() lbo = '';
  patient: Patient = new Patient();
  constructor(private patientService: PatientRestService) { }

  ngOnInit() {
    if (this.lbo !== '') {
      this.getPatient(this.lbo);
    }
  }

  getPatient(lbo: string) {
    this.patientService.patient(lbo).subscribe(
      patient => {
        this.patient = patient;
      }
    );
  }

}
