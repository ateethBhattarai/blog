const express = require("express");
const {
  createBlog,
  individualBlog,
  allBlog,
  deleteBlog,
} = require("../Controllers/blogController");
const router = express.Router();

router.post("/create", createBlog);
router.get("/allBlog", allBlog);
router.get("/:id", individualBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
