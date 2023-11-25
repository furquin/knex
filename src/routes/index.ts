import { Router } from "express";
import posts from "./posts";

const routes = Router();

routes.use(posts);

export default routes;
