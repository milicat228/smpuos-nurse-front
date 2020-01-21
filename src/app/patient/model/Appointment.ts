export class Appointments {
  patientBlocked: number;
  appointments: Appointment[] = [];
  constructor() {
  }
}

export class Appointment {
  id: number;
  date: Date;
  duration: number;
  doctorName: String;
  patientArrivedOnTime: Boolean;
  status: String;
  constructor() {
  }
}
