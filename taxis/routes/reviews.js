var express = require('express');
var router = express.Router();

const reviewsCtrl = require("../controllers/reviews");

router.get("/:id/review", reviewsCtrl.new);
router.post(":/id", reviewsCtrl.create);

module.exports = router;