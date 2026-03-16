import React, { useState } from "react";
import { addBook } from "../services/api";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [cover, setCover] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("year", year);
    formData.append("category", category);
    if (cover) formData.append("cover", cover);

    const result = await addBook(formData, true); // true = invio multipart/form-data
    if (result) {
      alert("Book added successfully!");
      setTitle(""); setAuthor(""); setYear(""); setCategory(""); setCover(null);
    } else {
      alert("Failed to add book.");
    }
  };

  return (
    <div className="page-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required/>
        <input type="text" placeholder="Author" value={author} onChange={e=>setAuthor(e.target.value)} required/>
        <input type="number" placeholder="Year" value={year} onChange={e=>setYear(e.target.value)} required/>
        <input type="text" placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)} />
        <input type="file" onChange={e=>setCover(e.target.files[0])} accept="image/*"/>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;