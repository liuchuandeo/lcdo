var express = require('express');
var router = express.Router();
var config = require('../config/env')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: config.title});
});

module.exports = router;
