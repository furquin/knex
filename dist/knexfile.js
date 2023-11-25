"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    client: 'sqlite3',
    connection: {
        filename: "./db/db.sqlite",
    },
    pool: { min: 0, max: 7 },
    useNullAsDefault: true,
    migrations: {
        tableName: 'knex_migrations',
        directory: './db/migrations',
    },
};
exports.default = config;
