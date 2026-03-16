const db = require("../db");

class Loan {
  static async getAll() {
    const result = await db.query("SELECT * FROM loan_requests");
    return result.rows;
  }

  static async create({ book_id, user_id }) {
    const result = await db.query(
      "INSERT INTO loan_requests (book_id, user_id, status) VALUES ($1,$2,'pending') RETURNING *",
      [book_id, user_id]
    );
    return result.rows[0];
  }

  static async count() {
    const result = await db.query("SELECT COUNT(*) FROM loan_requests");
    return parseInt(result.rows[0].count);
  }
}

module.exports = Loan;