import { Patient } from './patient.model';

describe('Patient', () => {
  it('should be defined', () => {
    expect(new Patient()).toBeDefined();
  });
});
