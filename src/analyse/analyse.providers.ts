import { Connection } from 'typeorm';
import { AnalyseEntity } from './analyse.entity';

export const analyseProvider = [
  {
    provide: 'ANALYSE_REPOSITORY',
    userFactory: (connection: Connection) =>
      connection.getRepository(AnalyseEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
