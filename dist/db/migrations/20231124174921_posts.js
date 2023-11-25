"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('posts', (table) => {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.string('body', 255).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('posts');
}
exports.down = down;
