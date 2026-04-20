# API Testing Guide

## Base URL
```
http://localhost:4001
```

## 1. User Authentication

### Signup
```bash
POST /api/user/signup
Content-Type: application/json

{
  "fullname": "Tanmai Sutrave",
  "email": "tanmai@example.com",
  "password": "password123"
}
```

### Login
```bash
POST /api/user/login
Content-Type: application/json

{
  "email": "tanmai@example.com",
  "password": "password123"
}
```

Response includes JWT token:
```json
{
  "message": "Login successful",
  "user": { ... },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## 2. Books

### Get All Books
```bash
GET /api/book
```

### Get Free Books Only
```bash
GET /api/book/free
```

### Get Book by ID
```bash
GET /api/book/:id
```

### Create New Book
```bash
POST /api/book
Content-Type: application/json

{
  "name": "New Book",
  "title": "Description of the book",
  "price": 299,
  "category": "Paid",
  "image": "https://example.com/image.jpg"
}
```

## 3. Contact Form

### Submit Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "I have a question about your books"
}
```

### Get All Contacts (Admin)
```bash
GET /api/contact
```

## Testing with cURL

### Signup Example
```bash
curl -X POST http://localhost:4001/api/user/signup \
  -H "Content-Type: application/json" \
  -d '{"fullname":"Test User","email":"test@example.com","password":"test123"}'
```

### Login Example
```bash
curl -X POST http://localhost:4001/api/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Get Books Example
```bash
curl http://localhost:4001/api/book
```

## Testing with Postman

1. Import the endpoints above
2. For authenticated routes, add header:
   ```
   Authorization: Bearer YOUR_JWT_TOKEN
   ```
