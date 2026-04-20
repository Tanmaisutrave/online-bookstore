import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/book.model.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore';

const IMAGE = "https://static.vecteezy.com/system/resources/previews/000/427/700/original/books-stack-realistic-vector.jpg";

const books = [
  { name: "Story Book", title: "A beautiful collection of short moral stories.", price: 0, category: "Free", image: IMAGE },
  { name: "Science Book", title: "Understand the fundamentals of physics and chemistry.", price: 199, category: "Paid", image: IMAGE },
  { name: "Mathematics Book", title: "Complete guide to algebra, calculus and geometry.", price: 149, category: "Paid", image: IMAGE },
  { name: "History Book", title: "Explore ancient and modern world history.", price: 0, category: "Free", image: IMAGE },
  { name: "Programming Book", title: "Learn programming from beginner to advanced level.", price: 299, category: "Paid", image: IMAGE },
  { name: "English Grammar", title: "Improve your English grammar and vocabulary.", price: 99, category: "Paid", image: IMAGE },
  { name: "Motivational Book", title: "Boost your confidence and personal growth.", price: 0, category: "Free", image: IMAGE },
  { name: "Computer Networks", title: "Learn networking concepts and protocols easily.", price: 249, category: "Paid", image: IMAGE },
  { name: "Data Structures", title: "Master arrays, linked lists, stacks and queues.", price: 199, category: "Paid", image: IMAGE },
  { name: "Artificial Intelligence", title: "Introduction to AI concepts and machine learning basics.", price: 349, category: "Paid", image: IMAGE },
  { name: "General Knowledge", title: "Improve your awareness with updated general knowledge topics.", price: 0, category: "Free", image: IMAGE },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing books
    await Book.deleteMany({});
    console.log('🗑️  Cleared existing books');

    // Insert new books
    await Book.insertMany(books);
    console.log('✅ Books seeded successfully');

    mongoose.connection.close();
    console.log('👋 Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
