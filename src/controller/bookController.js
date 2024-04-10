const Book = require('../models/bookModel');


const bookControler= {

    
    
    
    
    /* Get all students */

    getAllBooks: async (req, res) => {
        try {
            

            const books = await Book.find(); 
           
            res.status(200).json(books);
        } catch (error) {
            console.error('Error al obtener el libro',error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* Get by id */

    getBookById: async (req, res) => {
        try {
            const id= req.params.id;
            const bookId = await Book.findById(id);
            res.json(bookId)
        } catch (error) {
            console.error('Error al obtener el libro',error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* Post */

    createBook: async (req, res) => {
        const bookData = req.body;

        try {
            const newBook = new Book(bookData);
            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error al crear el libro',error);
            res.status(500).json({message: 'Internal Server Error'});
            
        }
    },

    


    updateBook: async (req, res) => {
        try {
            const id = req.params.id;
            const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(book);
        } catch (error) {
            console.error('Error al crear el libro',error);
            res.status(500).json(error);
        }
    },

    /* Delete */

    deleteBook: async (req, res) => {
        try {
            
            const id = req.params.id;
            const bookDelete= await Book.findByIdAndDelete(id);
            
            res.json(bookDelete);            
        } catch (error) {
            console.error('Error al crear el libro',error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* get by name */

    getBookByName: async (req, res) => {
        
        try{
            const name= req.params.name; //se puede hacer destructurando, otra forma de hacerlo
            const bookName= await Book.findOne({name: name});
            res.json(bookName);
        } catch (error) {
            console.error('Error al obtener libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    /* get by author */

 

    getBooksByAuthor: async (req, res) => {
        try {
            const { author } = req.params;
            const booksByAuthor = await Book.find({ author: author });
            res.json(booksByAuthor);
        } catch (error) {
            console.error('Error al obtener los libros del autor', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getBookByPages: async (req, res) => {
        
        try{
            const pages= req.params.pages; //se puede hacer destructurando, otra forma de hacerlo
            const bookPages= await Book.find({pages:pages });
            res.json(bookPages);
        } catch (error) {
            console.error('Error al obtener el libro', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },






}

module.exports = bookControler; 