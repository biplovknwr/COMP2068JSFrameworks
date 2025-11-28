var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Luffy page */
router.get('/luffy', function(req, res, next) {
  res.render('luffy');
});

/* Zoro page */
router.get('/zoro', function(req, res, next) {
  res.render('zoro');
});

/* Nami page */
router.get('/nami', function(req, res, next) {
  res.render('nami');
});

/* Sanji page */
router.get('/sanji', function(req, res, next) {
  res.render('sanji');
});

module.exports = router;
