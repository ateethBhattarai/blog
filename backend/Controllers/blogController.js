const blogModel = require("../Models/blogModel");

const createBlog = async (req, res) => {
  const { title, summary, description } = req.body;
  if (!title || !summary || !description) {
    res.status(400).send("All field required.");
    return;
  }
  const blog = await blogModel.create({ title, summary, description });
  res.json(blog);
};

const individualBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blogData = await blogModel.findById(id);
    if (!blogData) {
      res.status(404).send("blog not found.");
      return;
    }
    console.log(blogData);
    res.json(blogData);
  } catch (error) {
    res.status(404).send("blog not found.");
  }
};

const allBlog = async (req, res) => {
  const blogData = await blogModel.find();
  if (!blogData) {
    res.status(404).send("No blog created yet.");
  }
  res.json(blogData);
};

module.exports = { createBlog, individualBlog, allBlog };
