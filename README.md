# 📚 Readingo – Your Digital Library

A modern **MERN stack book platform** that allows users to explore, rent, or buy books across multiple genres and languages.  

This project was built to combine **reading convenience with modern web technologies.**  
The goal is to provide a seamless experience for book lovers—whether they want to quickly search a title, dive into different genres, or maintain their own personal digital library.  

---

## 💡 Motivation Behind This Project
- To practice and implement **full-stack development (MERN)** concepts  
- To design a **scalable and user-friendly platform** for learning and showcasing practical development skills  
- To create a foundation that can later evolve into a **real-world product** with advanced features like payment integration and AI recommendations  

---

## 📸 Screenshots / Demo

### 🔐 Authentication  
Login & Register Pages  

### 📚 Book Listings  
Browse books with search & filters  

### 📖 Book Details  
View book information, price, and rent/buy options  

---

## ✨ Features

### 🔐 User Authentication
- Secure register & login with **JWT & bcrypt.js**  
- Role-based access control (**admin, user**)  
- Session handling with tokens  

### 📚 Book Management
- Seeded sample books with **title, author, genre, price**  
- Book listing with **pagination & search filters**  
- Placeholder for book detail page *(buy/rent options coming soon)*  

### 🌐 Frontend (React.js)
- Simple, **responsive UI** for login & register  
- **Book listing component** to fetch data from backend  
- API integration with **Axios** for smooth client–server communication  

### 🗄️ Backend (Node.js + Express.js)
- **REST API architecture**  
- User routes → `/auth/register`, `/auth/login`  
- Book routes → `/books?search=&page=`  
- Middleware for **authentication**  

### 🛢️ Database (MongoDB + Mongoose)
- **User schema** → name, email, password hash, role  
- **Book schema** → title, author, genre, price  
- Optimized queries with **pagination**  

### 🚀 Scalability & Security
- Built to support **5,000+ users/month**  
- Secure password hashing with **bcrypt.js**  
- **JWT-based** session security  


## 🛠 Tech Stack

### 🎨 Frontend
- **React.js** → For building a responsive and modular user interface  
- **Axios** → For making HTTP requests to the backend APIs  
- *(Optional: Context API / Redux)* → To manage global state like user authentication or cart (future scalability)  

### ⚙️ Backend
- **Node.js** → JavaScript runtime for handling server-side logic  
- **Express.js** → Lightweight web framework to define RESTful routes (`/auth`, `/books`)  

### 🗄️ Database
- **MongoDB** → NoSQL database for storing user and book data  
- **Mongoose** → ODM (Object Data Modeling) library to define schemas (`User`, `Book`) and interact with MongoDB easily  

### 🔐 Authentication & Security
- **JWT (JSON Web Token)** → Secure user session management  
- **bcrypt.js** → Password hashing for secure authentication  

### 🛠 Utilities & Tools
- **Nodemon** → Auto-restart backend server during development  
- **dotenv** → Manage environment variables securely  
- **CORS** → Allow frontend–backend communication  



## 📂 Project Structure

bookstore-app/
├── backend/                  # Server-side code
│   ├── controllers/          # Business logic for routes
│   │   ├── authController.js
│   │   └── bookController.js
│   ├── models/               # MongoDB models (Mongoose)
│   │   ├── User.js
│   │   └── Book.js
│   ├── routes/               # Express routes
│   │   ├── authRoutes.js
│   │   └── bookRoutes.js
│   ├── seed/                 # Data seeding
│   │   └── seedBooks.js
│   ├── server.js             # Entry point for backend
│   ├── package.json
│   └── .env.example          # Environment variable template
│
├── frontend/                 # Client-side code (React)
│   ├── public/               # Static files
│   │   └── index.html
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   └── BookList.js
│   │   ├── pages/            # Page-level components
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js            # Root component
│   │   ├── api.js            # Axios API calls
│   │   └── index.js          # React entry point
│   ├── package.json
│
├── README.md                 # Project documentation
└── package.json              # Root-level (optional if using workspaces)



---

## 📌 Explanation

- **backend/** → All server-side logic, routes, controllers, database models, and seed script  
- **frontend/** → React UI components, pages, and frontend logic  
- **seed/** → Contains scripts to insert sample data into MongoDB  
- **.env.example** → Template for required environment variables  
- **README.md** → Documentation for the project 