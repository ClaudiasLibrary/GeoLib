const API_BASE_URL = "http://localhost:5000/api";
export async function fetchBooks() {
  try {
    const response = await fetch(`${API_BASE_URL}/books`);
    if (!response.ok) throw new Error("Failed to fetch books");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

export async function addBook(bookData, isFormData = false) {
  try {
    const response = await fetch(`${API_BASE_URL}/books`, {
      method: "POST",
      body: bookData,
      headers: isFormData ? {} : { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Failed to add book");
    return await response.json();
  } catch (error) {
    console.error("Error adding book:", error);
    return null;
  }
}

export async function fetchBookDetail(bookId) {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${bookId}`);
    if (!response.ok) throw new Error("Failed to fetch book detail");
    return await response.json();
  } catch (error) {
    console.error("Error fetching book detail:", error);
    return null;
  }
}

export async function fetchStats() {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`);
    if (!response.ok) throw new Error("Failed to fetch stats");
    return await response.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return { totalBooks: 0, totalUsers: 0, totalLoans: 0 };
  }
}