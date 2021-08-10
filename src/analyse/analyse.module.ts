import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientEntity } from 'src/patient/patient.entity';
import { PatientService } from 'src/patient/patient.service';
import { AnalyseController } from './analyse.controller';
import { AnalyseEntity } from './analyse.entity';
import { AnalyseService } from './analyse.service';

@Module({
  controllers: [AnalyseController],
  providers: [AnalyseService, PatientService],
  imports: [TypeOrmModule.forFeature([AnalyseEntity, PatientEntity])],
})
export class AnalyseModule {}
