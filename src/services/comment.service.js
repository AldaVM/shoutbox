const BaseService = require("./base.service");
const { CommentRepository } = require("../repositories");

class CommentService extends BaseService {
  constructor(CommentRepository) {
    super(CommentRepository);
  }
}

module.exports = new CommentService(CommentRepository);
