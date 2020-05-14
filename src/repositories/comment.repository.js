const BaseRepository = require("./base.repository");
const { CommentModel } = require("../models");

class CommentRepository extends BaseRepository {
  constructor(CommentModel) {
    super(CommentModel);
  }
}

module.exports = new CommentRepository(CommentModel);
