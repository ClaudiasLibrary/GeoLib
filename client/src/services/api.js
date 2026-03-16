const API_URL = "http://localhost:3000";

export async function getBooks() {
  const response = await fetch(`${API_URL}/books`);
  return response.json();
}
