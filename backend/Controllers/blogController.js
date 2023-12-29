const blogModel = require("../Models/blogModel");

const createBlog = async (req, res) => {
  const { title, summary, description, author } = req.body;
  if (!title || !summary || !description || !author) {
    res.status(400).send("All field required.");
    return;
  }
  const blog = await blogModel.create({ title, summary, description, author });
  res.json(blog);
};

const individualBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blogData = await blogModel
      .findOne({ _id: id })
      .populate({ path: "author", select: "-password" });
    if (!blogData) {
      res.status(404).send("blog not found.");
      return;
    }
    res.json(blogData);
  } catch (error) {
    res.status(404).send("blog not found.");
  }
};

const allBlog = async (req, res) => {
  const blogData = await blogModel
    .find()
    .sort("-createdAt")
    .populate({ path: "author", select: "-password" });

  if (!blogData) {
    res.status(404).send("No blog created yet.");
    return;
  }

  res.json(blogData);
};

const editBlog = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const haveBlog = await blogModel.findById(id);
    if (!haveBlog) {
      res.json({ message: "No blog Found!!" });
      return;
    }

    const updatedBlog = await blogModel.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { new: true }
    );

    res.json(updatedBlog);
  } catch (error) {
    res.json({ error });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blogData = await blogModel.findByIdAndDelete(id);
    if (!blogData) {
      res.status(404).send("No blog found.");
      return;
    }
    res.status(200).send("Blog deleted successfully.");
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog.", error });
  }
};

module.exports = { createBlog, individualBlog, allBlog, editBlog, deleteBlog };
