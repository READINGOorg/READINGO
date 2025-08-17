const router = require("express").Router();
const Book = require("../models/Book");
const auth = require("../middleware/authMiddleware");

// 📚 Create a new book (admin only)
router.post("/", auth, async (req, res) => {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Access denied" });

    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 📚 Get all books with pagination & search
router.get("/", async (req, res) => {
    try {
        const { page = 1, limit = 10, search = "" } = req.query;
        const query = search ? { title: { $regex: search, $options: "i" } } : {};

        const books = await Book.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Book.countDocuments(query);

        res.json({ total, page, books });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
