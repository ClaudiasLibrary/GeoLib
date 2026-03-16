const User = require("../models/User");

// GET /users
async function getUsers(req, res, next) {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (err) { next(err); }
}

module.exports = { getUsers };