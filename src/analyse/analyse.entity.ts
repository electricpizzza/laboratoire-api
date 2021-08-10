import { PatientEntity } from 'src/patient/patient.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class AnalyseEntity {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column('date') dateAnalyse: Date;
  @Column('real') avance: number;
  @Column('real') total: number;
  @ManyToOne(() => PatientEntity, (patient) => patient.analyses)
  patient: PatientEntity;
}
