import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { AnalyseModule } from './analyse/analyse.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PatientModule,
    AnalyseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'labo-db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
