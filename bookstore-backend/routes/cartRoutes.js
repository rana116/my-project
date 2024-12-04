const express = require('express');
const verifyToken = require('../middelware/verifyToken');
const {getCart, addToCart, removeFromCart} = require('../controllers/cartController');
const router = express.Router();

//get user's cart after cheching access
router.get('/', verifyToken, getCart);

router.post('/add', verifyToken, addToCart);

router.post('/remove', verifyToken, removeFromCart);
module.exports = router;