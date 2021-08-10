import { Patient } from 'src/patient/patient.model';

export class Analyse {
  constructor(
    public id: number,
    public dateAnalyse: Date,
    public avance: number,
    public total: number,
    public patient: Patient,
  ) {}
}
