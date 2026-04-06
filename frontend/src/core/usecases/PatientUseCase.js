export class PatientUseCase {
  constructor(patientRepository) {
    this.repository = patientRepository;
  }

  async getAllPatients() {
    return await this.repository.findAll();
  }

  async createPatient(patientData) {
    return await this.repository.save(patientData);
  }

  async findPatientById(id) {
    return await this.repository.findById(id);
  }
}