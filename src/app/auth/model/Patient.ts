export class Patient {
    id:number;
    firstname:string;
    lastname:string;
    dateOfBirth: Date;
    gender:string;
    insuranceBase:InsuranceBase;
    insurancePayer:InsurancePayer;
    insurenceEndDate:Date;
    adress:string;
    phoneNumber:string;
    zk:string;
    jmbg:string;
    lbo:string;
    constructor() {}
}

export class InsuranceBase{
    id:number;
    name:string;
    constructor(){}
}

export class InsurancePayer{
    id:number;
    name:string;
    constructor(){}
}