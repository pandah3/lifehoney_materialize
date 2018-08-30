var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // rendering index.hbs & title in head of layout.hbs (for tab title)
  res.render('index', { title: 'LIFE HONEY' });
});

module.exports = router;
