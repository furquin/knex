"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("../controllers/posts/posts.controller");
const posts = (0, express_1.Router)();
const postsController = new posts_controller_1.PostsController();
posts.route("/posts")
    .get(postsController.index)
    .post(postsController.create);
exports.default = posts;
