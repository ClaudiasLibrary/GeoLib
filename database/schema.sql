CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  password_hash TEXT,
  description TEXT,
  location GEOGRAPHY(POINT)
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255),
  author VARCHAR(255),
  year INTEGER,
  category VARCHAR(100),
  cover_image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE views (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE loans (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  requester_id INTEGER REFERENCES users(id),
  status VARCHAR(20)
);
