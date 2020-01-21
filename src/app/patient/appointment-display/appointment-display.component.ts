import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-display',
  templateUrl: './appointment-display.component.html',
  styleUrls: ['./appointment-display.component.css']
})
export class AppointmentDisplayComponent implements OnInit {
  @Input() lbo = '';

  constructor() { }

  ngOnInit() {
  }

  confirmArrival() {
  }

}
