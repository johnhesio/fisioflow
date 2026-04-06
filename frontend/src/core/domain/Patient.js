export class Patient {
  constructor({ id, name, phone, email, birthDate, complaint }) {
    this.id = id || crypto.randomUUID();
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.birthDate = birthDate;
    this.complaint = complaint;
    this.history = []; // Lista de atendimentos concluídos
  }
}