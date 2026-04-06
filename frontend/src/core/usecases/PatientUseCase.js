export class PatientUseCase {
  constructor(patientRepository) {
    this.repository = patientRepository;
  }

  async listAll() {
    return await this.repository.findAll();
  }

  async register(patientData) {
    if (!patientData.name || !patientData.phone) {
      throw new Error("Nome e telefone são obrigatórios");
    }
    return await this.repository.save(patientData);
  }
}