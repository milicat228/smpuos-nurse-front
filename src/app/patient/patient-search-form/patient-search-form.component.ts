import { Router } from '@angular/router';
import { PatientRestService } from './../service/patient-rest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-search-form',
  templateUrl: './patient-search-form.component.html',
  styleUrls: ['./patient-search-form.component.css']
})
export class PatientSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  message = '';
  loading = false;

  constructor(private formBuilder: FormBuilder, private patientService: PatientRestService, public router: Router) {
    this.searchForm = this.formBuilder.group({
      lbo: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  ngOnInit() {
  }

  search() {
    this.getPatient(this.searchForm.value.lbo);
  }

  getPatient(lbo: string) {
    this.patientService.patient(lbo).subscribe(
      res => {
        this.router.navigate(['patient', lbo]);
      },
      (err) => {
        console.log(err);
        if (err.status === 404) {
          this.message = 'Pacijent nije pronađen! Proverite da li ste tačno uneli lični broj osiguranika.';
        }
      }
   );
  }

}
