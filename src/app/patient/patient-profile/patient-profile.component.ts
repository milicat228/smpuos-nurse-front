import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  lbo = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.lbo = this.route.snapshot.paramMap.get('lbo');
  }

}
