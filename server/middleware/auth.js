function auth(req, res, next) {
    // Per ora finta autenticazione
    req.user = { id: 1 }; 
    next();
  }
  
  module.exports = auth;