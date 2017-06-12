var express = require('express');
var router = express.Router();
const requestIp = require('request-ip');


/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];
     console.log (req.ip);
  res.render('index', { title: 'Geo IP', ip:ip });
});

module.exports = router;
