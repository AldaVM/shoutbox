const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre de artículo es requerido"],
  },
  slug: {
    type: String,
    required: [true, "El slug es requerido"],
  },
  content: {
    type: String,
    required: [true, "El artículo debe tener un contenido"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
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
      ref: "commnet",
    },
  ],
});

ArticleSchema.pre("find", function (next) {
  this.populate("comments");
  next();
});

module.exports = model("article", ArticleSchema);
