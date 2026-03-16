import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { fetchBooks } from "../services/api";
import "leaflet/dist/leaflet.css";

function MapPage() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks().then(data => setBooks(data));
  }, []);

  // filtro testuale
  const filteredBooks = books.filter(b => 
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase()) ||
    (b.category && b.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="page-container">
      <h2>Books Map</h2>
      <input 
        type="text" 
        placeholder="Search by title, author or category" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        style={{ marginBottom: "12px", padding: "8px", width: "100%" }}
      />
      <MapContainer center={[41.9, 12.45]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredBooks.map(book => (
          <Marker key={book.id} position={[book.latitude, book.longitude]}>
            <Popup>
              <strong>{book.title}</strong><br/>
              {book.author}<br/>
              {book.category || "No category"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapPage;