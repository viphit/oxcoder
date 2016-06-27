/**
 * Created by love on 16-6-17.
 */
var express = require('express');
var qiniu = require("qiniu");
var router = express.Router();
var bucket = 'oxcoder';
var domain = 'o8uspr2vl.bkt.clouddn.com';
/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    param = parseRequestParam(req);
    token = uptoken(bucket);
    var ret = {code:0,message:'',result:{token:token,domain:domain}};
    res.send(ret);
});
router.post('/',function(req, res, next){
    param = parseRequestParam(req);
    if(typeof(param['key'])=='undefined'){
        var ret = {code:-3,message:'not set key',result:false};
    }else{
        token = uptoken(bucket,param['key']);
        var ret = {code:0,message:'',result:{token:token,domain:domain}};
    }
    res.send(ret);
});
module.exports = router;

function uptoken(bucket) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket);
    return putPolicy.token();
}
function parseRequestParam(req) {
    if(req.method=="GET"){
        key = req.query.key;
        console.log("key is "+key);
        return {key:''}
    }else{
        console.log("method is POST");
        key = req.body.key;
        console.log("key is "+key);
        return {key:key}
    }
}