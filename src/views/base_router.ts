import { FastifyPluginAsync, FastifyInstance, FastifyPluginOptions } from "fastify";
import { posts } from "../controllers/base_control";
import fp from 'fastify-plugin';


const PostRoute: FastifyPluginAsync = async (router: FastifyInstance | any, options: FastifyPluginOptions) => {

  router.decorate("secure", async (request: any, reply: any) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  });

  router.get("/posts", { onRequest: [router.secure] }, posts.get_all);
  // // postRouter.get("/", postController.get_all_posts);
  // // postRouter.get("/:id", postController.get_posts);
  // // postRouter.post("/", postController.save_post);
  // // postRouter.put("/:id", postController.update_post);
  // // postRouter.delete("/:id", postController.delete_post);
};

export default fp(PostRoute);