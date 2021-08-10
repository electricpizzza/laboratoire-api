import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientEntity } from './patient.entity';
import { Patient } from './patient.model';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity) private patientRepos: Repository<Patient>,
  ) {}
  async getAllPatient() {
    return await this.patientRepos.find();
  }

  async getOnePatient(id: number) {
    const patient = await this.patientRepos.findOne(id);
    if (!patient) throw new NotFoundException();
    return patient;
  }

  async createPatient(patient: Patient) {
    const newPatient = await this.patientRepos.insert(patient);
    return newPatient;
  }

  async updatePatient(patient: Patient) {
    const newPatient = await this.patientRepos.findOne({
      where: { id: patient.id },
    });
    if (!newPatient) throw new NotFoundException();

    newPatient.nom = patient.nom;
    newPatient.prenom = patient.prenom;
    newPatient.tel = patient.tel;
    newPatient.dateNaissance = patient.dateNaissance;

    return await this.patientRepos.update(patient.id, newPatient);
  }
}
