const express = require("express");
const router = express.Router();
const Post = require("../Sandbox/Models/Post");

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch {
    res.json({ message: err });
  }
});

router.get("/specific", (req, res) => {
  res.send("Specific post");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
