import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('posts', (table) => {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.string('body', 255).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('posts');
}

