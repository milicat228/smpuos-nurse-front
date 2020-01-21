import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url = environment.baseUrl;
  patientUrl = '/patient/';

  constructor(private http: HttpClient) { }

  patient(lbo): Observable<any>{
    return this.http.get(this.url + this.patientUrl+lbo);
  }
}
