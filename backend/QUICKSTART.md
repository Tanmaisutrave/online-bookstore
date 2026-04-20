# 🚀 Quick Start Guide

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
The `.env` file is already created with default values:
```
PORT=4001
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=bookstore_secret_key_2024_change_in_production
NODE_ENV=development
```

**Important:** Change `JWT_SECRET` in production!

### 3. Start MongoDB
Make sure MongoDB is running on your system:

**Windows:**
```bash
mongod
```

**Mac/Linux:**
```bash
sudo systemctl start mongod
```

**Or use MongoDB Atlas** (cloud):
Update `MONGODB_URI` in `.env` with your Atlas connection string.

### 4. Seed the Database
Populate the database with initial book data:
```bash
npm run seed
```

You should see:
```
✅ Connected to MongoDB
🗑️  Cleared existing books
✅ Books seeded successfully
👋 Database connection closed
```

### 5. Start the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

You should see:
```
🚀 Server is running on port 4001
📚 API Documentation: http://localhost:4001
✅ Connected to MongoDB
```

### 6. Test the API

Open your browser and visit:
```
http://localhost:4001
```

You should see:
```json
{
  "message": "BookStore API is running!",
  "version": "1.0.0",
  "endpoints": {
    "books": "/api/book",
    "users": "/api/user",
    "contact": "/api/contact"
  }
}
```

## Quick API Tests

### Get all books:
```bash
curl http://localhost:4001/api/book
```

### Create a user:
```bash
curl -X POST http://localhost:4001/api/user/signup \
  -H "Content-Type: application/json" \
  -d '{"fullname":"Test User","email":"test@example.com","password":"test123"}'
```

### Login:
```bash
curl -X POST http://localhost:4001/api/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check if the port 27017 is available
- Verify MONGODB_URI in `.env`

### Port Already in Use
- Change PORT in `.env` to another port (e.g., 4002)
- Or kill the process using port 4001

### Module Not Found
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## Next Steps

1. Check `API_TESTING.md` for detailed API documentation
2. Read `README.md` for project overview
3. Start integrating with your frontend!

## Support

For issues or questions, contact: tanmaysutrave@gmail.com
