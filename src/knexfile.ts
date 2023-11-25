import { Knex } from 'knex';

const config: Knex.Config = {
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

export default config;