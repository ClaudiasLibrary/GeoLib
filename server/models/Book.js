const db = require("../db");

class Book {
  static async getAll() {
    const result = await db.query("SELECT * FROM books");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM books WHERE id=$1", [id]);
    return result.rows[0];
  }

  static async create(data) {
    const { title, author, year, category, cover_url, thumbnail_url, latitude, longitude, created_by } = data;
    const result = await db.query(
      `INSERT INTO books (title, author, year, category, cover_url, thumbnail_url, latitude, longitude, created_by)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [title, author, year, category, cover_url, thumbnail_url, latitude, longitude, created_by]
    );
    return result.rows[0];
  }

  static async count() {
    const result = await db.query("SELECT COUNT(*) FROM books");
    return parseInt(result.rows[0].count);
  }
}

module.exports = Book;