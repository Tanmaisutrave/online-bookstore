import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js';
import contactRoute from './routes/contact.route.js';
import { errorHandler } from './middleware/errorHandler.middleware.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection (FIXED)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
  process.exit(1); // Stop app if DB fails
});

// Health check route
app.get('/', (req, res) => {
  res.json({ 
    message: 'BookStore API is running!',
    version: '1.0.0',
    endpoints: {
      books: '/api/book',
      users: '/api/user',
      contact: '/api/contact'
    }
  });
});

// Routes
app.use('/api/book', bookRoute);
app.use('/api/user', userRoute);
app.use('/api/contact', contactRoute);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Production server started`);
});