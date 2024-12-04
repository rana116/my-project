const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

//search for book
exports.getBookById = async (req, res) =>{
    try{
        const book = await Book.findById(req.params.id);
        if(!book) return res.status(404).json({message: 'book not found'});
        res.json(book);
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
};

//add a new book
exports.addBook = async (req, res) => {
    if(req.role !== 'admin') return res.sendStatus(403);
    const newBook = new Book(req.body);

    try{
        const savedBooks = await newBook.save();
        res.status(201).json(savedBooks);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

//upadte a book
exports.updateBook = async (req, res) =>{
    if (req.role !== 'admin') return res.sendStatus(403);
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
         if(!updatedBook) return res.status(404).json({message: 'Book not found'});
        res.json(updatedBook);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

exports.deleteBook = async(req, res)=>{
    if(req.role !== 'admin') return res.sendStatus(403);
    try{
        const deletedBoook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBoook) return res.status(404).json({message: 'Book not found'});
        res.json({message: 'Book deleted successfully'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};
