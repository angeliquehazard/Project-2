var express = require('express');
var router = express.Router();

const detailsCtrl = require("../controllers/details");
const taxisCtrl = require("../controllers/taxis");

// router.post("/:id/new", taxisCtrl.create);
router.post(":id/review", detailsCtrl.createReview);
// router.put("/:taxiId/review/:reviewId", detailsCtrl.editReview);
router.delete("/:taxiId/review/:reviewId", detailsCtrl.deleteReview);

module.exports = router;
