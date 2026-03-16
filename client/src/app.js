import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";
import MapPage from "./pages/MapPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetailWrapper />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper per passare bookId da URL a BookDetail
import { useParams } from "react-router-dom";
function BookDetailWrapper() {
  const { id } = useParams();
  return <BookDetail bookId={id} />;
}

export default App;