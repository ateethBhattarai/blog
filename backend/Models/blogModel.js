const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required."],
    },
    summary: {
      type: String,
      required: [true, "summary required."],
    },
    description: {
      type: String,
      required: [true, "description required."],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "author name should be provided for every post."],
      ref: "User",
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;
