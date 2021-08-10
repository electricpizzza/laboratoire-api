import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientEntity } from './patient.entity';

@Module({
  providers: [PatientService],
  controllers: [PatientController],
  imports: [TypeOrmModule.forFeature([PatientEntity])],
})
export class PatientModule {}
