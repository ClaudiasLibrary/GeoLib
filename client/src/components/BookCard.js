import React from "react";
import "../styles/components.css";

function BookCard({ title, author, year, thumbnailUrl }) {
  return (
    <div className="book-card">
      {thumbnailUrl ? (
        <img src={`http://localhost:5000${thumbnailUrl}`} alt={title} className="book-thumbnail" />
      ) : (
        <div className="book-placeholder">No Image</div>
      )}
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author} ({year})</p>
      </div>
    </div>
  );
}

export default BookCard;