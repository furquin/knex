import dotenv from "dotenv";
import express, { Express } from "express";
import Routes from "./routes";
import { RabbitMQService } from "./utils/rabbitmq.service";
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(Routes);
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

const rabbitmq = new RabbitMQService();
rabbitmq.init();