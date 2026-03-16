-- Database: library_app
-- Crea le tabelle principali

-- Utenti
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Libri
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    category VARCHAR(100),
    cover_url VARCHAR(255),
    thumbnail_url VARCHAR(255),
    latitude NUMERIC(9,6),    -- coordinate geografiche
    longitude NUMERIC(9,6),
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Richieste di prestito (simulate)
CREATE TABLE loan_requests (
    id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(id),
    user_id INT REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'pending',
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE views (
    id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(id),
    user_id INT REFERENCES users(id),
    viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);