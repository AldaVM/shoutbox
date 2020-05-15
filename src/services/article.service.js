const BaseService = require("./base.service");
const { verifyEntity } = require("../helpers");
const { ArticleRepository } = require("../repositories");
const CommentService = require("./comment.service");

let _articleRepository = null;
let _commentService = null;

class ArticleService extends BaseService {
  constructor(ArticleRepository, CommentService) {
    super(ArticleRepository);
    _articleRepository = ArticleRepository;
    _commentService = CommentService;
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

  async addNewComment(idArticle, comment) {
    const article = await _articleRepository.get(idArticle);

    verifyEntity(article, {
      status: 404,
      message: "Article is not found",
    });

    const newComment = await _commentService.create(comment);

    article.comments.push(newComment);

    return article;
  }
}

module.exports = new ArticleService(ArticleRepository, CommentService);
