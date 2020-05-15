const { ArticleService } = require("../services");

let _articleService = null;

class ArticleController {
  constructor(ArticleService) {
    _articleService = ArticleService;
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;

    const articles = await _articleService.getAll(+pageSize, +pageNum);

    res.json({
      status: 200,
      message: "List articles",
      articles,
    });
  }

  async get(req, res) {
    const { idArticle } = req.params;
    const article = await _articleService.get(idArticle);

    res.json({
      status: 200,
      message: "One article",
      article,
    });
  }

  async getUserArticles(req, res) {
    const { idAuthor } = req.params;

    const articles = await _articleService.getUserArticles(idAuthor);

    res.json({
      status: 200,
      message: "Get articles by author",
      articles,
    });
  }

  async create(req, res) {
    const { body } = req;

    const article = await _articleService.create(body);

    res.status(201).json({
      status: 201,
      message: "New article created",
      article,
    });
  }

  async update(req, res) {
    const { idArticle } = req.params;
    const { body } = req;

    const updatedArticle = await _articleService.update(idArticle, body);

    res.json({
      status: 200,
      message: "Article updated",
      updatedArticle,
    });
  }

  async delete(req, res) {
    const { idArticle } = req.params;

    const deleted = await _articleService.delete(idArticle);

    res.json({
      status: 200,
      message: "Article deleted",
      deleted: deleted,
    });
  }
}

module.exports = new ArticleController(ArticleService);
