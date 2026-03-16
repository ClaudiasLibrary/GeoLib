const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",          
  host: "localhost",
  database: "library_app",   // il database creato con schema.sql
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};