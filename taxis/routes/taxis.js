var express = require('express');
var router = express.Router();
const taxisCtrl = require("../controllers/taxis");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taxis' });
});

router.get("/", taxisCtrl.index);
router.get("/new", taxisCtrl.new);
router.get("/:taxiId", taxisCtrl.details);

module.exports = router;
