function BookCard({ title, author }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default BookCard;
