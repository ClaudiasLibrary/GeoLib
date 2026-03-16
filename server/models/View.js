const db = require("../db");

class View {
  static async log(book_id, user_id = null) {
    const result = await db.query(
      "INSERT INTO views (book_id, user_id, viewed_at) VALUES ($1,$2,CURRENT_TIMESTAMP) RETURNING *",
      [book_id, user_id]
    );
    return result.rows[0];
  }

  static async count(book_id) {
    const result = await db.query("SELECT COUNT(*) FROM views WHERE book_id=$1", [book_id]);
    return parseInt(result.rows[0].count);
  }
}

module.exports = View;