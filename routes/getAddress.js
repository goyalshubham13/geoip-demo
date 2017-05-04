var geoip = require('geoip-lite');
geoip.startWatchingDataUpdate();

var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log ('insode get address' , req.ip);
  var ip = req.body.ipAddress;
  console.log (ip);
  var geo = geoip.lookup(ip);
  console.log ('geo', geo);
  res.send (geo);
});

module.exports = router;