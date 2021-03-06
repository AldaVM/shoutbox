const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre de artículo es requerido"],
  },
  description: {
    type: String,
  },
  content: {
    type: String,
    required: [true, "El artículo debe tener un contenido"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true,
  },
  time_reading: {
    type: Number,
    required: true,
  },
  publish_time: {
    type: Number,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
      autopopulate: true,
    },
  ],
});

ArticleSchema.plugin(require("mongoose-autopopulate"));
module.exports = model("article", ArticleSchema);
