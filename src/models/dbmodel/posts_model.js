const mongoose = require("mongoose");

// SCHEMA
const postsGenereSchema = new mongoose.Schema({
  id: { type: Number },
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

// MODEL
const Post = mongoose.model("posts", postsGenereSchema);

module.exports = Post; // To posts_control.js
