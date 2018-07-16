const express = require('express');
const router = express.Router();

//Model import
const Movie=require('../models/Movie');
/* GET movies listing. */
router.get('/', function(req, res, next) {
  const promise=Movie.find({});
  promise.then(function(movie){
    res.json(movie);
  }).catch(function(err){
    res.json(err);
  });
});
router.get('/top10', function(req, res, next) {
  const promise=Movie.find({}).limit(10).sort({imdb_score:-1});
  promise.then(function(movie){
    if(!movie)
      next({message:'The movie was not found.',code:404});
    res.json(movie);
  }).catch(function(err){
      next({message:'The movie was not found.',code:404});
    res.json(err);
  });
});
router.get('/:movie_id', function(req, res, next) {
  const promise=Movie.findById(req.params.movie_id);
  promise.then(function(movie){
    if(!movie)
      next({message:'The movie was not found.',code:404});
    res.json(movie);
  }).catch(function(err){
      next({message:'The movie was not found.',code:404});
    res.json(err);
  });
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
router.delete('/:movie_id', function(req, res, next) {
  const promise=Movie.findByIdAndRemove(req.params.movie_id);
    promise.then(function(movie){
      if(!movie)
        next({message:'The movie was not found.',code:404});
      res.json(movie);
    }).catch(function(err){
        next({message:'The movie was not found.',code:404});
      res.json(err);
    });
  });
  router.get('/between/:start_year/:end_year', function(req, res, next) {
    const promise=Movie.find({
      year:{'$gte':parseInt(req.params.start_year),'$lte':parseInt(req.params.end_year)}
    });
    promise.then(function(movie){
      res.json(movie);
    }).catch(function(err){
      res.json(err);
    });
  });
module.exports = router;
