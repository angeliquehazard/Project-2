var express = require('express');
var router = express.Router();
const taxisCtrl = require("../controllers/taxis");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taxis' });
});

router.get("/", taxisCtrl.index);
router.get("/new", taxisCtrl.newTrip);
router.get("/:taxiId", taxisCtrl.detail);
router.post(":id/review", taxisCtrl.createReview);
router.put("/:taxiId/review/:reviewId". taxisCtrl.editReview);
router.delete("/:taxiId/review/:reviewId", taxisCtrl.deleteReview);

module.exports = router;
