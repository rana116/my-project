const express = require('express');
const verifyToken = require('../middelware/verifyToken');
const {getAllBooks, getBookById, updateBook, deleteBook, addBook} = require('../controllers/bookController');
const router = express.Router();

//for anyone to get books, or a single one
router.get('/', getAllBooks);
router.get('/:id', getBookById);

//admin only
router.post('/', verifyToken, addBook);
router.put('/:id', verifyToken, updateBook);
router.delete('/:id', verifyToken, deleteBook);


module.exports = router;