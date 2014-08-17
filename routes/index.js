var express = require('express');
var router = express.Router();

console.log("Request reached to the website");

/* GET home page. */
router.get('/', function(req, res) {
  console.log("Into the main");
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  console.log("Request for login");
  res.render('login', { title: 'Login' });
});

module.exports = router;
