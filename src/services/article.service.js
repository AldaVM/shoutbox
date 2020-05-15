const BaseService = require("./base.service");
const { verifyEntity } = require("../helpers");
const { ArticleRepository } = require("../repositories");

let _articleRepository;

class ArticleService extends BaseService {
  constructor(ArticleRepository) {
    super(ArticleRepository);
    _articleRepository = ArticleRepository;
  }

  async getUserArticles(author) {
    verifyEntity(author, {
      status: 400,
      message: "The author has not been sent",
    });

    const articles = await _articleRepository.getUserArticles(author);

    verifyEntity(articles.length, {
      status: 404,
      message: "Registry is not found",
    });

    return articles;
  }
}

module.exports = new ArticleService(ArticleRepository);
