const express = require("express");
const {
  createBlog,
  individualBlog,
  allBlog,
} = require("../Controllers/blogController");
const router = express.Router();

router.post("/create", createBlog);
router.get("/allBlog", allBlog);
router.get("/:id", individualBlog);

module.exports = router;
