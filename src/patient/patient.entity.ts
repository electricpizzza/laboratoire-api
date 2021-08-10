import { AnalyseEntity } from 'src/analyse/analyse.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class PatientEntity {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column('text') nom: string;
  @Column('text') prenom: string;
  @Column('text') tel: string;
  @Column('date') dateNaissance: Date;
  @OneToMany(() => AnalyseEntity, (analyse) => analyse.patient)
  analyses: AnalyseEntity[];
}
