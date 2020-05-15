const { CommentService } = require("../services");

let _commentService = null;

class CommentController {
  constructor(CommentService) {
    _commentService = CommentService;
  }

  async get(req, res) {
    const { idComment } = req.params;
    const comment = await _commentService.get(idComment);

    res.json({
      status: 200,
      message: "One comment",
      comment,
    });
  }

  async create(req, res) {
    const { body } = req;

    const comment = await _commentService.create(body);

    res.status(201).json({
      status: 201,
      message: "New comment created",
      comment,
    });
  }

  async update(req, res) {
    const { idComment } = req.params;
    const { body } = req;

    const updatedComment = await _commentService.update(idComment, body);

    res.json({
      status: 200,
      message: "Comment updated",
      updatedComment,
    });
  }

  async delete(req, res) {
    const { idArticle } = req.params;

    const deleted = await _commentService.delete(idArticle);

    res.json({
      status: 200,
      message: "Comment deleted",
      deleted: deleted,
    });
  }
}

module.exports = new CommentController(CommentService);
