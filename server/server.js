const express = require("express");
const cors = require("cors");

// Routes
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const statsRoutes = require("./routes/statsRoutes");

// Middleware
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware generali
app.use(cors());
app.use(express.json());

// Rotte
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stats", statsRoutes);

// Middleware gestione errori
app.use(errorHandler);

// Avvio server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));