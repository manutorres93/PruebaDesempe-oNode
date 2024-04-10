const express= require('express');
const router= express.Router();
const clientController = require('../controller/clientController');
const bookController = require('../controller/bookController');


router.get('/api/v1/clients', clientController.getAllClients);
router.get('/api/v1/clients/:id', clientController.getClientById);
router.post('/api/v1/clients', clientController.createClient);
router.put('/api/v1/clients/:id', clientController.updateClient);
router.delete('/api/v1/clients/:id', clientController.deleteClient);
router.get('/api/v1/clients/age/:age', clientController.getClientByAge);
router.get('/api/v1/clients/email/:email', clientController.getClientByEmail);
router.get('/api/v1/clients/gender/:gender', clientController.getClientByGender);


router.get('/api/v1/books', bookController.getAllBooks);
router.get('/api/v1/books/:id', bookController.getBookById);
router.post('/api/v1/books', bookController.createBook);
router.put('/api/v1/books/:id', bookController.updateBook);
router.delete('/api/v1/books/:id', bookController.deleteBook);
router.get('/api/v1/books/author/:author', bookController.getBooksByAuthor);
router.get('/api/v1/books/name/:name', bookController.getBookByName);
router.get('/api/v1/books/pages/:pages', bookController.getBookByPages);



module.exports = router;