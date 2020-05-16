class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.findById(id);
  }

  async getAll(pageSize, pageNum) {
    const skips = pageSize * (pageNum - 1);
    const records = await this.model.find().skip(skips).limit(pageSize);
    const count = await this.model.countDocuments({});

    return {
      records,
      count,
    };
  }

  async create(entity) {
    const registry = new this.model(entity);
    return await registry.save();
  }

  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
