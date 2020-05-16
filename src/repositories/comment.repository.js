const BaseRepository = require("./base.repository");
const { CommentModel } = require("../models");

let _commnetModel = null;
class CommentRepository extends BaseRepository {
  constructor(CommentModel) {
    super(CommentModel);
    _commnetModel = CommentModel;
  }

  async create(entity) {
    const comment = new _commnetModel(entity);
    comment.publish_time = comment._id.getTimestamp();

    return await comment.save();
  }
}

module.exports = new CommentRepository(CommentModel);
