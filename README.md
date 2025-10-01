# MERN-Authentication-Authorization-System
This project is a simple yet complete MERN stack application that demonstrates how to implement user registration, login, authentication, and authorization using modern best practices.

🔑 Features

User Registration – new users can sign up with secure credentials.
User Login – authenticated sessions with JWT (JSON Web Tokens).
Protected Routes – only logged-in users can access specific pages.
Authorization – restrict certain actions or pages based on user roles (e.g., admin vs. regular user).
Persistent Sessions – tokens stored in local storage with automatic validation on reload.
Error Handling – clean error messages for invalid credentials or unauthorized access.

🛠️ Tech Stack

Frontend: React, React Router, Axios, TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT + bcrypt for password hashing

⚡ How it Works

Register – user submits details → stored securely in MongoDB with hashed password.
Login – credentials are validated → server issues JWT token.
Authorization – token sent in request headers → backend verifies and grants access.
Protected Routes – frontend React Router + backend middleware ensures only authorized users see certain pages.
