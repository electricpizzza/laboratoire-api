import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientSevice: PatientService) {}
  @Get()
  getAllPatients() {
    return this.patientSevice.getAllPatient();
  }

  @Get(':id')
  getOnePatient(@Param('id') id: number) {
    return this.patientSevice.getOnePatient(id);
  }

  @Post()
  createPatient(
    @Body('nom') nom: string,
    @Body('prenom') prenom: string,
    @Body('tel') tel: string,
    @Body('dateNaissance') dateNaissance: Date,
  ) {
    const patient = new Patient(
      null,
      nom,
      prenom,
      tel,
      new Date(dateNaissance),
      [],
    );
    return this.patientSevice.createPatient(patient);
  }

  @Put(':id')
  updatePatient(
    @Param('id') id: number,
    @Body('nom') nom: string,
    @Body('prenom') prenom: string,
    @Body('tel') tel: string,
    @Body('dateNaissance') dateNaissance: Date,
  ) {
    const patient = new Patient(
      id,
      nom,
      prenom,
      tel,
      new Date(dateNaissance),
      [],
    );
    return this.patientSevice.updatePatient(patient);
  }
}
