"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQService = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
class RabbitMQService {
    connection;
    channel;
    queue = process.env.RABBITMQ_QUEUE || "default";
    constructor() {
        this.init();
    }
    async init() {
        await this.createConnection();
        await this.createChannel();
        this.channel.assertQueue(this.queue, { durable: false });
    }
    async createConnection() {
        const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";
        this.connection = await amqplib_1.default.connect(url);
    }
    async createChannel() {
        this.channel = await this.connection.createChannel();
    }
    async publishInQueue(message) {
        message = JSON.stringify(message);
        this.channel.sendToQueue(this.queue, Buffer.from(message));
    }
}
exports.RabbitMQService = RabbitMQService;
