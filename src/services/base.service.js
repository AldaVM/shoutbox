const { verifyEntity } = require("../helpers");

class BaseService {
  constructor(respository) {
    this.respository = respository;
  }

  async get(id) {
    verifyEntity(id, { status: 400, message: "The id has not been sent" });

    const currentEntry = await this.respository.get(id);

    return currentEntry;
  }

  async getAll() {
    return await this.respository.getAll();
  }

  async create(entity) {
    verifyEntity(entity, {
      status: 400,
      message: "The entity has not been sent",
    });

    return await this.respository.create(entity);
  }

  async update(id, entity) {
    verifyEntity(id, { status: 400, message: "The id has not been sent" });
    verifyEntity(entity, {
      status: 400,
      message: "The entity has not been sent",
    });

    return await this.respository.update(id, entity);
  }

  async delete(id) {
    verifyEntity(id, { status: 400, message: "The id has not been sent" });

    await this.respository.delete(id);
    return true;
  }
}

module.exports = BaseService;
