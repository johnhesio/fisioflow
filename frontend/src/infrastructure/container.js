import { LocalStorageRepository } from '../adapters/repositories/LocalStorageRepository';
import { PhysioService } from '../core/usecases/PhysioService';

const patientRepo = new LocalStorageRepository('physio_patients');
const visitRepo = new LocalStorageRepository('physio_visits');

export const service = new PhysioService(patientRepo, visitRepo);