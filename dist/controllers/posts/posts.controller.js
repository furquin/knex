"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
class PostsController {
    async index(req, res) {
    }
    async create(req, res) {
        res.send("POST /posts");
    }
}
exports.PostsController = PostsController;
