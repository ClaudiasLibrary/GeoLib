const Book = require("../models/Book");
const User = require("../models/User");
const Loan = require("../models/Loan");

// GET /stats
async function getStats(req, res, next) {
  try {
    const totalBooks = await Book.count();
    const totalUsers = await User.count();
    const totalLoans = await Loan.count();
    res.json({ totalBooks, totalUsers, totalLoans });
  } catch (err) { next(err); }
}

module.exports = { getStats };