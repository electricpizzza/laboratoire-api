import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientEntity } from 'src/patient/patient.entity';
import { Patient } from 'src/patient/patient.model';
import { Repository } from 'typeorm';
import { AnalyseEntity } from './analyse.entity';
import { Analyse } from './analyse.model';

@Injectable()
export class AnalyseService {
  constructor(
    @InjectRepository(AnalyseEntity) private analiseRepos: Repository<Analyse>,
    @InjectRepository(PatientEntity) private patienRepos: Repository<Patient>,
  ) {}

  async getAllAnalyses() {
    return await this.analiseRepos.find();
  }

  async getAnalyseByClient(id: number) {
    const analyses = await this.analiseRepos.find({ where: { patient: id } });
    if (!analyses) throw new NotFoundException();
    return analyses;
  }

  async getOneAnalyse(id: number) {
    const analyse = await this.analiseRepos.findOne(id);
    if (!analyse) throw new NotFoundException();
    return analyse;
  }

  async createAnalyse(analyse: Analyse) {
    const patient = await this.patienRepos.findOne(analyse.patient.id);
    analyse.patient = patient;
    console.log(analyse);

    return await this.analiseRepos.insert(analyse);
  }

  async updateAnalyse(analyse: Analyse) {
    const newAnalyse = await this.analiseRepos.findOne({
      where: { id: analyse.id },
    });
    if (!newAnalyse) throw new NotFoundException();
    newAnalyse.dateAnalyse = analyse.dateAnalyse;
    newAnalyse.avance = analyse.avance;
    newAnalyse.total = analyse.total;
    return this.analiseRepos.update(analyse.id, newAnalyse);
  }
}
