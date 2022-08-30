var express = require('express');
var router = express.Router();

const detailsCtrl = require("../controllers/details");

router.post("/:id/new", detailsCtrl.create);
router.post(":id/review", taxisCtrl.createReview);
router.put("/:taxiId/review/:reviewId". taxisCtrl.editReview);
router.delete("/:taxiId/review/:reviewId", taxisCtrl.deleteReview);

module.exports = router;
