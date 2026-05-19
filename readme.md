<div align="center">

# 🛍️ MERN Ecommerce

### A Full-Stack Shopping Platform Built with the MERN Stack

[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-21+-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-state-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![MUI](https://img.shields.io/badge/Material_UI-5-007FFF?style=flat-square&logo=mui&logoColor=white)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-99.5%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**[🚀 Live Demo](https://ecommerce-using-mern-nu.vercel.app)** · **[🐛 Report Bug](https://github.com/EllyCarlos/ecommerce_mern_app/issues)** · **[✨ Request Feature](https://github.com/EllyCarlos/ecommerce_mern_app/issues)**

</div>

---

## 📖 Overview

**MERN Ecommerce** is a feature-complete, full-stack online shopping platform built on the **MERN stack** (MongoDB, Express.js, React, Node.js). It delivers a polished shopping experience for customers and a powerful control panel for admins — covering everything from product management and order tracking to wishlists, reviews, and secure authentication.

State is managed globally with **Redux Toolkit**, the UI is built with **Material UI**, and authentication is secured with **JWT + OTP verification**.

---

## ✨ Features

### 🧑‍💻 Customer

| Feature | Details |
|---|---|
| 🔐 **Authentication** | Sign up, log in, OTP verification, password reset, logout |
| 🛒 **Shopping Cart** | Add/remove items, adjust quantities, view subtotals |
| ❤️ **Wishlist** | Save products, add personal notes, remove items |
| ⭐ **Product Reviews** | Write, edit, and delete reviews with live rating updates |
| 📦 **Order Management** | Place orders and view full order history |
| 👤 **Profile** | Manage email, username, and multiple saved addresses |

### 🛠️ Admin

| Feature | Details |
|---|---|
| 📦 **Product Management** | Add, edit, delete, and soft-delete products; manage stock and attributes |
| 📋 **Order Management** | View all orders, update statuses and details |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Redux Toolkit, React-Redux, Material UI (MUI) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Auth** | JWT, OTP via email (Nodemailer), bcrypt |
| **State Management** | Redux Toolkit + RTK Query |
| **Styling** | Material UI + responsive design |

---

## 📁 Project Structure

```
ecommerce_mern_app/
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── features/          # Redux slices (cart, auth, products, etc.)
│   │   ├── pages/             # Route-level page components
│   │   └── app/               # Redux store setup
│   └── .env                   # Frontend environment variables
│
├── backend/                   # Express REST API
│   ├── controllers/           # Route handler logic
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API route definitions
│   ├── middleware/            # Auth, error handling
│   ├── seed/                  # Database seeding scripts
│   └── .env                   # Backend environment variables
│
├── CODE_OF_CONDUCT.md
├── LICENSE
└── README.md
```

---

## ⚙️ Local Setup

### Prerequisites

- **Node.js** v21.1.0 or later
- **MongoDB** running locally (or a cloud URI from [MongoDB Atlas](https://www.mongodb.com/atlas))
- **nodemon** installed globally: `npm install -g nodemon`

---

### 1. Clone the Repository

```bash
git clone https://github.com/EllyCarlos/ecommerce_mern_app.git
cd ecommerce_mern_app
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
# ─── Database ────────────────────────────────────────────────────────────────
MONGO_URI="mongodb://localhost:27017/your-database-name"

# ─── CORS ────────────────────────────────────────────────────────────────────
ORIGIN="http://localhost:3000"

# ─── Email (for OTP & password reset) ────────────────────────────────────────
EMAIL="your-email@example.com"
PASSWORD="your-email-app-password"

# ─── JWT & Session ───────────────────────────────────────────────────────────
SECRET_KEY="your-strong-secret-key"
LOGIN_TOKEN_EXPIRATION="30d"
OTP_EXPIRATION_TIME="120000"
PASSWORD_RESET_TOKEN_EXPIRATION="2m"
COOKIE_EXPIRATION_DAYS="30"

# ─── Environment ─────────────────────────────────────────────────────────────
PRODUCTION="false"
```

Start the backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:8000`.

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
# ─── API URL ──────────────────────────────────────────────────────────────────
REACT_APP_BASE_URL="http://localhost:8000"
```

Start the React development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

> 💡 **Tip:** Use split terminals to run both servers simultaneously without conflicts.

---

### 4. Seed the Database (Optional but Recommended)

Populate the database with sample users, products, reviews, and carts to test the app right away — no manual data entry needed.

```bash
cd backend
npm run seed
```

This runs `seed/seed.js` and fills your database with demo data.

---

## 🌐 Running the App

| Service | URL |
|---|---|
| Frontend | `http://localhost:3000` |
| Backend API | `http://localhost:8000` |

---

## 🚀 Deployment

### Frontend → Vercel

1. Import your repo on [Vercel](https://vercel.com) and set the **Root Directory** to `frontend`.
2. Add the environment variable: `REACT_APP_BASE_URL=<your-render-backend-url>`
3. Deploy.

### Backend → Render

1. Create a new **Web Service** on [Render](https://render.com), connect the repo, and set **Root Directory** to `backend`.
2. Set **Build Command:** `npm install` and **Start Command:** `npm start`
3. Add all backend environment variables. Set `ORIGIN` to your Vercel frontend URL and `PRODUCTION="true"`.
4. Use a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster for the `MONGO_URI` in production.

---

## 🤝 Contributing

Contributions are welcome! Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

1. **Fork** the repository
2. **Branch:** `git checkout -b feature/your-feature`
3. **Commit:** `git commit -m "feat: describe your change"`
4. **Push:** `git push origin feature/your-feature`
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by [EllyCarlos](https://github.com/EllyCarlos)

</div>
