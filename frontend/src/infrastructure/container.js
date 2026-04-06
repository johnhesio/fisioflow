import { LocalStorageRepository } from '../adapters/repositories/LocalStorageRepository';
import { PatientUseCase } from '../core/usecases/PatientUseCase';
// Por enquanto, se não tiver o VisitUseCase, vamos focar no Patient
// import { VisitUseCase } from '../core/usecases/VisitUseCase'; 

const patientRepo = new LocalStorageRepository('physio_patients');
const visitRepo = new LocalStorageRepository('physio_visits');

export const patientService = new PatientUseCase(patientRepo);

// Exportamos um objeto 'service' genérico para o Dashboard não quebrar
export const service = {
  getVisits: async () => JSON.parse(localStorage.getItem('physio_visits') || '[]'),
  getPatients: async () => JSON.parse(localStorage.getItem('physio_patients') || '[]')
};