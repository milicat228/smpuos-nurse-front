import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatientRestService {
  url = environment.baseUrl;
  patientUrl = '/patient';
  appointmentUrl = '/appointment';

  constructor(private http: HttpClient) { }

  patient(lbo): Observable<any>{
    return this.http.get(this.url + this.patientUrl + '/' + lbo);
  }

  appointments(patientId): Observable<any> {
    return this.http.get(this.url + this.patientUrl + '/' + patientId + this.appointmentUrl);
  }

  confirmAppointment(patientId, appointmentId): Observable<any> {
    const url = this.url + this.patientUrl + '/' + patientId + this.appointmentUrl + '/' + appointmentId;
    return this.http.put(url, null, environment.httpOptions);
  }
}
