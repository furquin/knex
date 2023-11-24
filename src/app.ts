import express, { Express, Request, Response } from "express";
import knex from "knex";
import knexfile from "../knexfile";

const app: Express = express();
const db = knex(knexfile);

app.get("/", (req: Request, res: Response) => {
  db.insert({
    title: "Hello World",
    body: "This is a test post",
  })
    .into("posts")
    .then((post) => {
      console.log(post);
    })
    .catch((err) => {
      console.log(err, 'erro');
    });
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
