const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

// say that a client GET requests the path /users/nimit
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var user = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: user, showForm: true, userName: req.params.name } );
});

router.get('/tweets/:id', function(req, res) {
  var id = +req.params.id;
  var tweetById = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: tweetById } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var content = req.body.content;
  tweetBank.add(name, content);
  res.redirect('/');
});


module.exports = router;
