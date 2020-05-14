const BaseRepository = require("./base.repository");
const { ArticleModel } = require("../models");
const { timeReading } = require("../helpers");
let _articleModel = null;

class ArticleRepository extends BaseRepository {
  constructor(ArticleModel) {
    super(ArticleModel);
    _articleModel = ArticleModel;
  }

  async getUserArticles(author) {
    return await _articleModel.find({ author });
  }

  async create(entity) {
    const article = new this.model(entity);
    article.publish_time = article._id.getTimestamp();
    article.time_reading = timeReading(entity.content);

    return await article.save();
  }
}

module.exports = new ArticleRepository(ArticleModel);
