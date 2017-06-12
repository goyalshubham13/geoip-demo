var express = require('express');
var router = express.Router();
const requestIp = require('request-ip');
var get_ip = require('ipware')().get_ip;

/* GET home page. */
router.get('/', function(req, res, next) {
  /*var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];
     console.log (req.ip);*/
  var ip_info = get_ip(req);
  console.log(ip_info);
  res.render('index', { title: 'Geo IP', ip:ip_info.clientIp });
});

module.exports = router;
