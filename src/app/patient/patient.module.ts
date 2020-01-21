import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AppointmentDisplayComponent } from './appointment-display/appointment-display.component';
import { PatientInfoDisplayComponent } from './patient-info-display/patient-info-display.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientSearchFormComponent } from './patient-search-form/patient-search-form.component';

/*ZA FORME*/
import { ReactiveFormsModule} from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';



@NgModule({
  declarations: [AppointmentDisplayComponent, PatientInfoDisplayComponent, PatientProfileComponent, PatientSearchFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  exports: [
    PatientProfileComponent, PatientSearchFormComponent
  ],
  providers: [
    DatePipe
  ]
})
export class PatientModule { }
