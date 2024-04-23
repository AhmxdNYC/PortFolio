// Install Knex with: npm install knex --save
// Install pg (PostgreSQL client) with: npm install pg --save
// Install dotenv with: npm install dotenv --save
require("dotenv").config()

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST || "127.0.0.1",
      port: process.env.PG_PORT || 5432,
      user: process.env.PG_USER || "postgres",
      password: process.env.PG_PASSWORD || "ahmad",
      database: process.env.PG_DATABASE || "portfolio",
    },
  },
  test: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST || "127.0.0.1",
      port: process.env.PG_PORT || 5432,
      user: process.env.PG_USER || "postgres",
      password: process.env.PG_PASSWORD || "ahmad",
      database: process.env.PG_DATABASE || "portfolio",
    },
  },
}
