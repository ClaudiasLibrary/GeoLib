const db = require("../db");

class User {
  static async getAll() {
    const result = await db.query("SELECT id, username, email, created_at FROM users");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query("SELECT id, username, email, created_at FROM users WHERE id=$1", [id]);
    return result.rows[0];
  }

  static async create({ username, email, password_hash }) {
    const result = await db.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1,$2,$3) RETURNING id, username, email",
      [username, email, password_hash]
    );
    return result.rows[0];
  }

  static async count() {
    const result = await db.query("SELECT COUNT(*) FROM users");
    return parseInt(result.rows[0].count);
  }
}

module.exports = User;