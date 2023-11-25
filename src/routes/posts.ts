import { Router } from "express";
import { PostsController } from "../controllers/posts/posts.controller";
import { CreatePostDto } from "../controllers/posts/dto/create-post.dto";
import { validationMiddleware } from "../middlewares/validate.middleware";

const posts = Router();
const postsController = new PostsController();

posts
  .route("/posts")
  .all((req, res, next) => {
    validationMiddleware(CreatePostDto)(req, res, next);
  })
  .get(postsController.index)
  .post(postsController.create);

export default posts;
