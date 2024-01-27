const mongoose = require("mongoose");
const PostMessage = require("../models/posts");
const getPost = async (req, res) => {
  try {
    const post = await PostMessage.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;
  const newpost = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });
  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with ${id}`);
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "post deleted" });
};

const updatePost = async (req, res) => {
  const updated = await PostMessage.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      message: req.body.message,
      creator: req.body.creator,
      tags: req.body.tags,
      selectedFile: req.body.selectedFile,
    },
    { new: true }
  );
  res.status(200).json(updated);
};

const postRoute = {
  getPost,
  createPost,
  deletePost,
  updatePost,
};

module.exports = postRoute;
