const Cart = require('../models/cart');
const Book = require('../models/book');

//to get cart items
exports.getCart = async (req, res) => {
    try{
        const cart = await Cart.findOne({ userId: req.userId}).populate('items.bookId');
        res.json(cart || {items: []});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.addToCart = async (req, res) =>{
    const {bookId} = req.body;
    try{
        const book = await Book.findById({ bookId});
        if(!book) return res.status(404).json({message: 'Book not found'});

        let cart = await Cart.findOne({ userId: req.userId});
        if(!cart) {
            //check first if that user has a cart with items
            cart = new Cart({ userId: req.userId, items:[{bookId}] });
        }
        else {
            //check if that book is in cart -> increment quantity
            const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);
            if (itemIndex > -1){
                cart.items[itemIndex].quantity +=1;
            }
            else{
                cart.items.push({bookId});
            }
        }
        await cart.save();
        res.status(200).json(cart);

    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};


exports.removeFromCart = async (req, res)=>{
    const {bookId} = req.body;
    try{
        const cart = await Cart.findOne({userId: req.userId});
        if(!cart) return res.status(404).json({message: 'cart not found'});
        cart.items = cart.items.filter(item => item.bookId.toString()!== bookId);

        await cart.save();
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};