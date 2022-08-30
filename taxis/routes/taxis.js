var express = require('express');
var router = express.Router();
const passport = require('passport');
const taxisCtrl = require("../controllers/taxis");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taxis' });
});

router.get("/", taxisCtrl.index);
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/taxis',
    failureRedirect : '/taxis'
  }
));
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/taxis');
  });
});

router.get("/new", taxisCtrl.new);
router.get("/:taxiId", taxisCtrl.details);

module.exports = router;



