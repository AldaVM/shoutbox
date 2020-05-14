const BaseRepository = require("./base.repository");
const { ArticleModel } = require("../models");

let _articleModel = null;

class ArticleRepository extends BaseRepository {
  constructor(ArticleModel) {
    super(ArticleModel);
    _articleModel = ArticleModel;
  }

  async getUserArticles(author) {
    return await _articleModel.find({ author });
  }
}

module.exports = new ArticleRepository(ArticleModel);
