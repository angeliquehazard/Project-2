var express = require('express');
var router = express.Router();

const detailsCtrl = require("../controllers/details");

router.post("/:id/new", detailsCtrl.create);

module.exports = router;
