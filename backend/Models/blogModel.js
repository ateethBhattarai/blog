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
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;
