var express = require('express');
var qiniu = require("qiniu");
var router = express.Router();
var bucket = 'Bucket_Name';
var key = 'my-nodejs-logo.png';

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  req.u
  token = uptoken(bucket,key);
  var ret = {code:0,message:'',result:{token:token}};
  res.send(ret);
});

module.exports = router;

function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}
