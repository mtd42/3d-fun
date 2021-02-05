var express = require('express');
var router = express.Router();
const THREE = require('three')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SolarSystem' });
});

module.exports = router;
