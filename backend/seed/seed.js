const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("../models/Book");
const connectDB = require("../config/db");

dotenv.config();

const seedBooks = async () => {
  await connectDB();

  try {
    await Book.deleteMany(); // Clear old data

    const books = [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 10, isFree: false },
      { title: "1984", author: "George Orwell", genre: "Dystopian", price: 12, isFree: false },
      { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", price: 8, isFree: true },
      { title: "Moby Dick", author: "Herman Melville", genre: "Adventure", price: 15, isFree: false },
      { title: "Hamlet", author: "William Shakespeare", genre: "Drama", price: 5, isFree: true },
    ];

    await Book.insertMany(books);
    console.log("✅ Books seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding books:", err);
    process.exit(1);
  }
};

seedBooks();
