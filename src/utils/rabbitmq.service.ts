import client, { Channel, Connection } from "amqplib";

export class RabbitMQService {
  private connection!: Connection;
  private channel!: Channel;
  private queue: string;

  async init(): Promise<void> {
    await this.createConnection();
    await this.createChannel();
    this.queue = process.env.RABBITMQ_QUEUE;
    this.channel.assertQueue(this.queue, { durable: false });
  }

  private async createConnection(): Promise<Connection> {
    const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";
    this.connection = await client.connect(url);
    return this.connection;
  }

  private async createChannel(): Promise<Channel> {
    this.channel = await this.connection.createChannel();
    return this.channel;
  }

  async publishInQueue(message: string): Promise<string> {
    try {
      this.queue = process.env.RABBITMQ_QUEUE;
      await this.createConnection();
      await this.createChannel();
      message = JSON.stringify(message);
      this.channel.sendToQueue(this.queue, Buffer.from(message));
      await this.closeConnection();
      return "Message sent to queue";
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async closeConnection(): Promise<void> {
    await this.channel.close();
    await this.connection.close();
  }

  async consume(queue:string): Promise<any> {
    try {
      await this.init();
      let result: JSON 
      await this.channel.consume(queue, (message) => {
        const content = message.content.toString();
        if (message) {
          JSON.parse(content);
          this.channel.ack(message);
          result = JSON.parse(content);          
        }
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
