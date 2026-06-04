# JYC Portal

A full-stack web application developed for the Jaypee Youth Club (JYC), JUIT Solan. The portal provides event management, event registrations, authentication, and an admin dashboard for managing club activities.

## 🚀 Features

### User Features
- User Registration & Login
- View Upcoming Events
- Event Registration
- Mobile Responsive Interface
- Persistent User Sessions

### Admin Features
- Create Events
- Edit Events
- Delete Events
- Manage Registrations
- View Registered Participants
- Event Management Dashboard

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Responsive Design

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: Vercel
- Backend: Railway
- Database: MongoDB Atlas

## 📂 Project Structure

text JYC-Portal │ ├── FRONTEND │   ├── index.html │   ├── assets │   ├── css │   └── js │ ├── BACKEND │   ├── server.js │   ├── routes │   ├── models │   ├── middleware │   ├── package.json │   └── .env │ └── README.md 

## ⚙️ Local Setup

### Clone Repository

bash git clone <repository-url> cd JYC-Portal 

### Backend Setup

bash cd BACKEND npm install 

Create a .env file:

env MONGO_URI=your_mongodb_connection_string 

Start the backend:

bash npm start 

### Frontend Setup

Open the FRONTEND folder and run using VS Code Live Server.

## 🌐 Deployment Architecture

text Frontend (Vercel)         │         ▼ Backend API (Railway)         │         ▼ MongoDB Atlas 

## 📱 Responsive Design

The portal is optimized for:
- Desktop
- Tablet
- Mobile Devices

## 🔐 Security

- Environment variables are stored using .env
- MongoDB credentials are not stored in source code
- Backend API handles authentication and data validation

## 👨‍💻 Author

Lovish Sharma

Jaypee University of Information Technology (JUIT)

## 📌 Project Status

✅ Production Deployed

✅ Frontend Hosted

✅ Backend Hosted

✅ MongoDB Connected

✅ Mobile Responsive

✅ Admin Dashboard Functional

✅ Event Registration System Function