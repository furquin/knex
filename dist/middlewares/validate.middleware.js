"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const validation_1 = require("./validation");
const validationMiddleware = (validationSchema) => async (req, res, next) => {
    const result = await (0, validation_1.validationPipe)(validationSchema, { ...req.body, ...req.params });
    if (!isEmpty(result))
        return res.status(400).json({ success: false, ...result });
    next();
};
exports.validationMiddleware = validationMiddleware;
const isEmpty = (obj) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
};
