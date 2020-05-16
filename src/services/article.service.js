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

  async create(body, id) {
    verifyEntity(body, {
      status: 400,
      message: "The body has not been sent",
    });

    const templateArticle = {
      name: body.name,
      slug: body.slug,
      content: body.content,
      author: id,
    };

    const article = await _articleRepository.create(templateArticle);

    return article;
  }

  async getUserArticles(author, pageSize, pageNum) {
    verifyEntity(author, {
      status: 400,
      message: "The author has not been sent",
    });

    const articles = await _articleRepository.getUserArticles(author, pageSize, pageNum);

    verifyEntity(articles, {
      status: 404,
      message: "Registry is not found",
    });

    return articles;
  }

  async addNewComment(idArticle, comment, idUser) {
    const article = await _articleRepository.get(idArticle);

    verifyEntity(article, {
      status: 404,
      message: "Article is not found",
    });

    comment.author = idUser;

    const newComment = await _commentService.create(comment);
    article.comments.push(newComment);

    const updateArticle = await _articleRepository.update(article._id, article);

    return updateArticle;
  }
}

module.exports = new ArticleService(ArticleRepository, CommentService);
