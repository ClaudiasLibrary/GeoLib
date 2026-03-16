-- Popola utenti di test
INSERT INTO users (username, email, password_hash) VALUES
('studente1', 'studente1@example.com', 'hash_dummy'),
('studente2', 'studente2@example.com', 'hash_dummy'),
('bibliotecario', 'bibliotecario@example.com', 'hash_dummy');

-- Popola libri di test
INSERT INTO books (title, author, year, category, cover_url, thumbnail_url, latitude, longitude, created_by) VALUES
('Il Nome della Rosa', 'Umberto Eco', 1980, 'Letteratura italiana', '/uploads/il_nome_della_rosa.jpg', '/uploads/thumb_il_nome_della_rosa.jpg', 41.902782, 12.496366, 1),
('La Divina Commedia', 'Dante Alighieri', 1321, 'Classici', '/uploads/divina_commedia.jpg', '/uploads/thumb_divina_commedia.jpg', 41.902783, 12.496367, 1),
('Storia della Filosofia', 'Bertrand Russell', 1945, 'Filosofia', '/uploads/storia_filosofia.jpg', '/uploads/thumb_storia_filosofia.jpg', 45.464203, 9.189982, 2),
('Breve Storia del Tempo', 'Stephen Hawking', 1988, 'Scienza', '/uploads/breve_storia_tempo.jpg', '/uploads/thumb_breve_storia_tempo.jpg', 45.465422, 9.185924, 2),
('Psicologia Generale', 'John B. Watson', 1924, 'Psicologia', '/uploads/psicologia_generale.jpg', '/uploads/thumb_psicologia_generale.jpg', 41.890251, 12.492373, 3),
('Il Gioco delle Perle di Vetro', 'Hermann Hesse', 1943, 'Letteratura straniera', '/uploads/gioco_perle_vetro.jpg', '/uploads/thumb_gioco_perle_vetro.jpg', 45.465500, 9.190000, 3);

-- Popola richieste prestito simulate
INSERT INTO loan_requests (book_id, user_id, status) VALUES
(1, 2, 'approved'),
(3, 1, 'pending'),
(4, 3, 'pending'),
(2, 3, 'rejected'),
(5, 1, 'approved');