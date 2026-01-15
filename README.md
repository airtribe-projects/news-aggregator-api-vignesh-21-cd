# 📰 News Aggregator API

A RESTful API built using **Node.js** and **Express.js** that allows users to:
- Register and log in securely using JWT authentication
- Manage personalized news preferences
- Fetch the latest news articles based on preferences using an external News API (GNews)

This project was built as part of the **Backend Engineering Launchpad Assignment**.

---

## 🚀 Features

- User Signup & Login with JWT authentication
- Secure protected routes using middleware
- User preference management (categories, sources, countries)
- Personalized news fetching
- Proper error handling and input validation
- Fully tested using `tap` and `supertest`

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **dotenv**
- **GNews API**
- **tap** & **supertest** (for testing)

---

---

## 🔐 Authentication

This API uses **JWT-based authentication**.

- After login, a token is returned.
- This token must be sent in the `Authorization` header for protected routes.

**Header format:**

---

## 📌 API Endpoints

### 🔑 Auth Routes
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/users/signup` | Register a new user |
| POST | `/users/login` | Login and receive JWT token |

---

### ⚙ Preferences Routes (Protected)
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/users/preferences` | Get user preferences |
| PUT | `/users/preferences` | Update user preferences |

---

### 📰 News Route (Protected)
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/news` | Fetch personalized news articles |

---

## 🌍 External API Used

**GNews API**

- Used to fetch top headlines
- Free tier: 100 requests/day
- API documentation: https://gnews.io/

---

## ⚙ Environment Variables

Create a `.env` file in the project root with the following variables:


⚠️ **Do not commit `.env` to GitHub**

---

## ▶️ Running the Project

### Install dependencies
```bash
npm install
Start the server
npm start


Server will run at:

http://localhost:3000

