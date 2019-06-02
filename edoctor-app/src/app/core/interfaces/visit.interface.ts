export interface IVisit {
    pk: number;
    start_date: string; 
    end_date: string;
    patient: number;
    doctor: number;
    patient_details: any;
    doctor_details: any;
    time: string;
}
