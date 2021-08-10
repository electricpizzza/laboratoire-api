import { Analyse } from 'src/analyse/analyse.model';

export class Patient {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public tel: string,
    public dateNaissance: Date,
    public analyses: Analyse[],
  ) {}
}
