const express = require('express');
const router = express.Router();

//Model import
const Movie=require('../models/Movie');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});
router.post('/', function(req, res, next) {
  //const data=req.body;
  const {title,imdb_score,category,country,year}=req.body;
console.log(title,imdb_score,category,country,year);

  const movied=new Movie(req.body);
  console.log(movied);
  const dataReq=req.body;
  const movie=new Movie({
    title:dataReq.title,
    imdb_score:dataReq.imdb_score,
    category:dataReq.category,
    country:dataReq.country,
    year:dataReq.year
    }
  );
  // movie.save(function(err,data){
  //     if(err)
  //       res.json(err);
  //     else
  //       res.json(data);
  // });
  const promise=movie.save();
  promise.then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});
module.exports = router;
