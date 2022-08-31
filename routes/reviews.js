var express = require('express');
var router = express.Router();

const reviewsCtrl = require("../controllers/reviews");

router.get("/:id/review", reviewsCtrl.newReview);
router.post(":/id", reviewsCtrl.createReview);

module.exports = router;