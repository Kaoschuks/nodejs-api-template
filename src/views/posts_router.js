const express = require("express"),
  postRouter = express.Router();

const postController = require("../controllers/posts_control");

// GET POSTS
postRouter.get("/", postController.get_all_posts);
postRouter.get("/:id", postController.get_posts);
postRouter.post("/", postController.save_post);
postRouter.put("/:id", postController.update_post);
postRouter.delete("/:id", postController.delete_post);

module.exports = postRouter;
