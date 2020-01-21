import { Appointments } from './../model/Appointment';
import { PatientRestService } from './../service/patient-rest.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-display',
  templateUrl: './appointment-display.component.html',
  styleUrls: ['./appointment-display.component.css']
})
export class AppointmentDisplayComponent implements OnInit {
  @Input() lbo = '';
  appointments: Appointments = new Appointments();

  constructor(private patientService: PatientRestService) { }

  ngOnInit() {
    if (this.lbo !== '') {
      this.patientService.appointments(this.lbo).subscribe(
        appointments => {
          this.appointments = appointments;
        }
      );
    }
  }

  confirmArrival(appointment) {
    appointment.patientArrived = true;
    appointment.status = 'IN_PAST';
    this.patientService.confirmAppointment(this.lbo, appointment.id).subscribe(
      confirmation => {
        if (!confirmation) {
          alert('Fallback se desio na backu.');
        }
      }
    );
  }

}
