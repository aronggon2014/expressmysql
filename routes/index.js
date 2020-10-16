var express = require('express');
var router = express.Router();

const controller = require("../controtellers/homeComtroller")

/* GET home page. */
router.get('/',  controller.index);

module.exports = router;
