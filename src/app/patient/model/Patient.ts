export class InsuranceBase{
  id: number;
  name: string;
  constructor() {}
}

export class InsurancePayer{
  id: number;
  name: string;
  constructor() {}
}

export class Patient {
    id: number;
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
    gender: string;
    insurenceBase: InsuranceBase = new InsuranceBase();
    insurencePayer: InsurancePayer = new InsurancePayer();
    insurenceEndDate: Date;
    adress: string;
    phoneNumber: string;
    zk: string;
    jmbg: string;
    lbo: string;
    constructor() {}
}

