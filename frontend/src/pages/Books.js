import React, { useEffect, useState } from "react";
import API from "../services/api";

const Books = ({ user }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get("/books");
        setBooks(res.data.books);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <b>{book.title}</b> by {book.author} ({book.genre}) -{" "}
              {book.isFree ? "Free" : `$${book.price}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
