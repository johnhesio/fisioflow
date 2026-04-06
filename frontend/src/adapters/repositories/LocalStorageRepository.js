export class LocalStorageRepository {
  constructor(key) {
    this.key = key;
  }

  async findAll() {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  async save(item) {
    const items = await this.findAll();
    items.push(item);
    localStorage.setItem(this.key, JSON.stringify(items));
    return item;
  }

  async update(id, updates) {
    let items = await this.findAll();
    items = items.map(item => item.id === id ? { ...item, ...updates } : item);
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}