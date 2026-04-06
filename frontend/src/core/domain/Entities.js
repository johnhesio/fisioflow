export class Patient {
  constructor({ id, name, phone, email, birthDate, complaint }) {
    this.id = id || crypto.randomUUID();
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.birthDate = birthDate;
    this.complaint = complaint;
  }
}

export class Visit {
  constructor({ id, patientId, patientName, date, time, address, status = 'pendente', notes = '', exercises = [] }) {
    this.id = id || crypto.randomUUID();
    this.patientId = patientId;
    this.patientName = patientName;
    this.date = date;
    this.time = time;
    this.address = address;
    this.status = status;
    this.notes = notes;
    this.exercises = exercises;
  }
}