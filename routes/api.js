var express = require('express');
var router = express.Router();
var _ = require('underscore');

var books = [
  {
    id: 1,
    title: 'Learning JavaScript',
    author: 'Mark Lutz',
    isbn: '1449355730',
     price: {
      isb: '1491950358',
    pri: '$22'
  }
  },
  {
    id: 2,
    title: 'Building Microservices',
    author: 'Sam Newman',
    isbn: '1491950358',
    price: {
      isb: '1491950358',
    pri: '$33'
  }
  },
  {
    id: 3,
    title: 'ZBrush Characters and Creatures',
    author: 'Kurt Papstein',
    isbn: '1909414131',
     price: {
      isb: '1491950358',
    pri: '$44'
  }
  },
  {
  	id:4,
  	title: 'Amazon Web Services in Action',
  	author: 'Andreas Wittig and Michael Wittig',
    isbn: '1617292885',
     price: {
      isb: '1491950358',
    pri: '$55'
  }
  },
  {
  	id:5,
  	title: 'HTML and CSS: Design and Build Websites',
  	author: 'Jon Duckett',
    isbn: '1118008189',
     price: {
      isb: '1491950358',
    pri: '$66'
  }
  }
 ];

function lookupBook(book_id) {
  return _.find(books, function(c) {
    return c.id == parseInt(book_id);
  });
}

router.get('/books', function(req, res, next) {

  res.json(books);

});


router.route('/books/:book_id')
	.all(function(req, res, next){
		book_id = req.params.book_id;
		book = lookupBook(book_id);
		next();
	})
	.get(function(req,res,next){
		res.json('read', {book: book});
	})
 

module.exports = router;
