var express = require('express');
var router = express.Router();
const taxisCtrl = require("../controllers/taxis");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taxis' });
});

router.get('/', flightsCtrl.index);
router.get("/new", flightsCtrl.new)
router.post("/new", flightsCtrl.create);
router.get("/:id", flightsCtrl.show);
router.delete("/:id", flightsCtrl.deleteFlight);

module.exports = router;
module.exports = router;
