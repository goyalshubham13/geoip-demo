var express = require('express');
var router = express.Router();
const requestIp = require('request-ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Geo IP', ip:requestIp.getClientIp(req) });
});

module.exports = router;
