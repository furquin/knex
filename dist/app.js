"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rabbitmq_service_1 = require("./rabbitmq.service");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const rabbitmq = new rabbitmq_service_1.RabbitMQService();
rabbitmq.init();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
