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
```
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

```

---

## 📌 Explanation

- **backend/** → All server-side logic, routes, controllers, database models, and seed script  
- **frontend/** → React UI components, pages, and frontend logic  
- **seed/** → Contains scripts to insert sample data into MongoDB  
- **.env.example** → Template for required environment variables  
- **README.md** → Documentation for the project 


## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/bookstore-app.git
cd bookstore-app
```

### 2️⃣ Backend Setup
```
cd backend
npm install
```
Copy `.env.example` → `.env` and update values (MongoDB URI, JWT Secret, etc.)

Start backend server:

`npm run dev`

### 4️⃣ Access the Application

- Backend runs on: http://localhost:5000

- Frontend runs on: http://localhost:3000

✅ You should now have both frontend & backend running locally!

## 🔮 Future Scope

Here are some features planned for the next phases of development:

- **Payment Integration**  
  Implement secure payment gateways (like Razorpay, Stripe, or PayPal) for buying and renting books.  
  This will allow users to directly purchase/rent books within the platform.

- **AI-Powered Book Recommendations**  
  Add a recommendation system using collaborative filtering or content-based filtering.  
  Example: "Users who rented this book also liked..."  

- **Mobile App Version**  
  Extend the project to a React Native or Flutter-based mobile app,  
  ensuring accessibility on both Android and iOS platforms.

- **Admin Dashboard**  
  Build a dedicated dashboard for admins to:  
  - Manage books (Add, Edit, Remove)  
  - Track rentals and purchases  
  - Monitor user activity  
  - Generate reports  

- **Enhanced Search & Filters**  
  Improve search functionality with filters (genre, language, author)  
  to provide users a smoother browsing experience.


## 👨‍💻 Author

**Shudhanshu Bajpai**  
B.Tech in Computer Science | Aspiring **Full-Stack Developer** | Tech Enthusiast  
  
- 💡 **Interests:** MERN Stack Development, AI/ML, Computer Vision, Problem Solving  
 



### 🌐 Connect With Me
- 🔗 [LinkedIn](www.linkedin.com/in/shudhanshu-bajpai-b410242a3)  
- 💻 [GitHub](https://github.com/ShudhanshuBajpai)  
- 📧 **Email:** *2k22.csiot.2212506@gmail.com*  
  
