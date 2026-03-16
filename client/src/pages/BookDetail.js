import React, { useEffect, useState } from "react";
import { fetchBookDetail } from "../services/api";

function BookDetail({ bookId }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetail(bookId).then(data => setBook(data));
  }, [bookId]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <h2>{book.title}</h2>
      {book.coverUrl ? (
        <img src={`http://localhost:5000${book.coverUrl}`} alt={book.title} style={{ width: "200px", height: "auto", borderRadius: "6px" }} />
      ) : (
        <div style={{ width: "200px", height: "300px", background: "#eee", borderRadius: "6px" }}>No Image</div>
      )}
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      {book.category && <p><strong>Category:</strong> {book.category}</p>}
      <p style={{ marginTop: "16px" }}>{book.description || "No description available."}</p>
      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>Request Loan (Simulation)</button>
    </div>
  );
}

export default BookDetail;