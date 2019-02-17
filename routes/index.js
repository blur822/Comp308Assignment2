let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/aboutme', function(req, res, next) {
  res.render('about/aboutme', { title: 'About' });
});

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/Services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
