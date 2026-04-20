import express from 'express';
import { getBooks, getBookById, getFreeBooks, createBook } from '../controllers/book.controller.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/free', getFreeBooks);
router.get('/:id', getBookById);
router.post('/', createBook);

export default router;
