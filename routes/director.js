var express = require('express');
var router = express.Router();
var Director=require('../models/Director');
router.get('/', function(req, res, next) {
    res.json({name:'tewsdd'});
  });
  router.post('/', function(req, res, next) {
    //res.json(req.body);
    const director=new Director(req.body);
    const promise=director.save();

    promise.then(function(directorData){
        res.json(directorData);
    }).catch(function(){
        next({message:'Kayit sırasında hata oluştu.',code:'404'});
    });
    
  });
  module.exports=router;