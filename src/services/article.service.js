const BaseService = require("./base.service");
const { ArticleRepository } = require("../repositories");

let _articleRepository;

class ArticleService extends BaseService {
  constructor(ArticleRepository) {
    super(ArticleRepository);
    _articleRepository = ArticleRepository;
  }

  async getUserArticles(author) {
    await _articleRepository.getUserArticles(author);
  }
}

module.exports = new ArticleService(ArticleRepository);
