// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
res.send('Show Book' + req.params.id)

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

  res.send('Add Book' + req.params.id)

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id/edit', async (req, res, next) => {
try{
  res.render('books/index/edit', {title: 'Books',books: books })
} catch {
    res.redirect('/books')
  }; 
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
  res.send('Update Book' + req.params.id)

});

// GET - process the delete by user id
router.delete('/:id', (req, res, next) => {

  res.send('Delete Book' + req.params.id)
});


module.exports = router;
