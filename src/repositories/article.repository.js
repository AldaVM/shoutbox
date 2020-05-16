const BaseRepository = require("./base.repository");
const { ArticleModel } = require("../models");
const { timeReading } = require("../helpers");
let _articleModel = null;

class ArticleRepository extends BaseRepository {
  constructor(ArticleModel) {
    super(ArticleModel);
    _articleModel = ArticleModel;
  }

  async getUserArticles(author, pageSize, pageNum) {
    
    const skips = pageSize * (pageNum - 1);
    const records = await _articleModel
      .find({ author })
      .skip(skips)
      .limit(pageSize);
    const count = await _articleModel.countDocuments({ author });

    return {
      records,
      count,
    };
  }

  async create(entity) {
    const article = new this.model(entity);
    article.publish_time = article._id.getTimestamp();
    article.time_reading = timeReading(entity.content);

    return await article.save();
  }
}

module.exports = new ArticleRepository(ArticleModel);
