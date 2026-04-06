export class PhysioService {
  constructor(patientRepo, visitRepo) {
    this.patientRepo = patientRepo;
    this.visitRepo = visitRepo;
  }

  // Pacientes
  async getPatients() { return await this.patientRepo.findAll(); }
  async createPatient(data) { return await this.patientRepo.save(data); }

  // Visitas
  async getVisits() { return await this.visitRepo.findAll(); }
  async createVisit(data) { return await this.visitRepo.save(data); }
  async updateVisitStatus(id, status, details) { 
    return await this.visitRepo.update(id, { status, ...details }); 
  }
}