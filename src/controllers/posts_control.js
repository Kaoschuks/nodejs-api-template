const posts_model = require("../models/dbmodel/posts_model");

// GET all POSTS
exports.get_all_posts = async (req, res) => {
  try {
    const posts = await posts_model.find() // get all
    if(posts.length == 0) res.json({message: "No posts found"});
    if(posts.length > 0)res.json(posts);
  }catch(ex) {
    res.status(500).json({ error: ex.message });
  }
};

// GET POSTS
exports.get_posts = async (req, res) => {
  try {
    const n = parseInt(req.params.n);
    const id = req.params.id;
    // const postInfo = await posts_model.find(id).limit(n);
    const postInfo = await posts_model.findById(id); // get by id
    // validate
    if (!postInfo) res.status(400).json({ error: `post id: ${id} not available` });
    if (postInfo) res.json({ get: true, postInfo });
  }catch(ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Save a Post
exports.save_post = async (req, res) => {
  try {
    const findpost = await posts_model.find(req.body); // get by id
    if (findpost) res.status(400).json({ error: `posts already exists` });
    if (!findpost) {
      const status = new posts_model(req.body);
      await status.save();
      res.json({ message: 'new post saved' });
    }
  }catch(ex) {
    res.status(500).json({ error: ex.message });
  }
};

// update post
exports.update_post = async (req, res) => {
  try {
    const id = req.params.id;
    const findpost = await posts_model.findById(id); // get by id
    if (!findpost) res.status(400).json({ error: `posts doesn't exists` });
    if (findpost) {
      const updateddata = req.body;
      // update
      findpost.set({
        title: updateddata.title ? updateddata.title : findpost.title,
        description: updateddata.description ? updateddata.description : findpost.description,
        category: updateddata.category ? updateddata.category : findpost.category,
        tags: updateddata.tags ? updateddata.tags : findpost.tags,
        image: updateddata.image ? updateddata.image : findpost.image,
        date: updateddata.date ? updateddata.date : findpost.date,
      });
      await findMovie.save();
      res.json({ message: 'posts updated' });
    }
  }catch(ex) {
    res.status(500).json({ error: ex.message });
  }
};

// delete a post
exports.delete_post = async (req, res) => {
  try {
    const id = req.params.id;
    const postsinfo = await posts_model.findByIdAndRemove(id);
    // validate
    if (!postsinfo) res.status(400).json({ error: `post id: ${id} not available` });
    if (!postInfo) res.json({ message: 'post deleted' });
  }catch(ex) {
    res.status(500).json({ error: ex.message });
  }
};