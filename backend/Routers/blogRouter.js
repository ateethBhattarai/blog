const express = require("express");
const {
  createBlog,
  individualBlog,
  allBlog,
  deleteBlog,
  editBlog,
} = require("../Controllers/blogController");
const router = express.Router();

router.post("/create", createBlog);
router.get("/allBlog", allBlog);
router.get("/:id", individualBlog);
router.put("/edit/:id", editBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
