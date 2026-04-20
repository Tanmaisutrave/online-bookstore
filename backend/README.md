# BookStore Backend API

Backend server for the BookStore application built with Node.js, Express, and MongoDB.

## Features

- User authentication (signup/login) with JWT
- Book management (CRUD operations)
- Contact form handling
- MongoDB database integration
- Password hashing with bcrypt
- Input validation

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```
PORT=4001
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_secret_key
NODE_ENV=development
```

## Running the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Seeding Database

To populate the database with initial book data:
```bash
node seed.js
```

## API Endpoints

### User Routes (`/api/user`)
- `POST /api/user/signup` - Register new user
- `POST /api/user/login` - Login user

### Book Routes (`/api/book`)
- `GET /api/book` - Get all books
- `GET /api/book/free` - Get free books
- `GET /api/book/:id` - Get book by ID
- `POST /api/book` - Create new book

### Contact Routes (`/api/contact`)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

## Project Structure

```
backend/
├── controllers/       # Request handlers
├── models/           # Database models
├── routes/           # API routes
├── index.js          # Entry point
├── seed.js           # Database seeder
└── package.json      # Dependencies
```

## Author

Tanmai Sutrave
