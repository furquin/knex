import { Request, Response } from "express";
import { RabbitMQService } from "../../utils/rabbitmq.service";

const rabbitMQService = new RabbitMQService();

export class PostsController {
  async index(req: Request, res: Response) {
    const result = await rabbitMQService.consume('queue')
    res.send(result);
  }
  async create(req: Request, res: Response) {
    const result = await rabbitMQService.publishInQueue(req.body)
    res.send(result);
  }
}
