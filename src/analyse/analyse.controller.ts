import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Patient } from 'src/patient/patient.model';
import { PatientService } from 'src/patient/patient.service';
import { Analyse } from './analyse.model';
import { AnalyseService } from './analyse.service';

@Controller('analyse')
export class AnalyseController {
  constructor(
    private readonly analyseService: AnalyseService,
    private readonly patientSevice: PatientService,
  ) {}
  @Get()
  getAllAnalyse() {
    return this.analyseService.getAllAnalyses();
  }

  @Get('/client/:client')
  getAnalysesByClient(@Param('client') client: number) {
    return this.analyseService.getAnalyseByClient(client);
  }

  @Get(':id')
  getOneAnalyse(@Param('id') id: number) {
    return this.analyseService.getOneAnalyse(id);
  }

  @Post()
  createAnalyse(
    @Body('dateAnalyse') dateAnalyse: Date,
    @Body('avance') avance: number,
    @Body('total') total: number,
    @Body('patient') patient: number,
  ) {
    this.patientSevice.getOnePatient(patient).then((resp) => {
      const patientObj = resp;
    });
    const analyse = new Analyse(
      null,
      new Date(dateAnalyse),
      avance,
      total,
      new Patient(patient, '', '', '', null, []),
    );
    return this.analyseService.createAnalyse(analyse);
  }

  @Put(':id')
  updatePatient(
    @Param('id') id: number,
    @Body('dateAnalyse') dateAnalyse: Date,
    @Body('avance') avance: number,
    @Body('total') total: number,
  ) {
    const analyse = new Analyse(id, new Date(dateAnalyse), avance, total, null);
    return this.analyseService.updateAnalyse(analyse);
  }
}
