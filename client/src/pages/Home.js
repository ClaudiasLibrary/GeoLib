import React from "react";
import BookCard from "../components/BookCard";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to GeoLib</h1>
      <p>Discover and manage private book collections nearby.</p>

      <div className="book-list">
        <BookCard title="Example Book" author="Jane Doe" year="2020" />
        <BookCard title="Another Book" author="John Smith" year="2018" />
      </div>
    </div>
  );
}

export default Home;