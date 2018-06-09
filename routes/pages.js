var express=require('express');
var router=express.Router();
var Page = require('../models/page');
var models=require('../models');



//Routes for user
router.get('/',function(req,res){
  var slug=req.params.slug;
  models.Page.findOne({
    where:{slug:'home'}
  })
  .then(function(page){
   
    res.render('index',{
    title:page.title,
   content:page.content
  })  
})
  .catch((err) => {
    console.log(err);
  })
});



//Routes for Get a Page
router.get('/:slug',function(req,res){

  var slug=req.params.slug;
  models.Page.findOne({
    where:{slug:slug}
  })
  .then(function(page){
    if(!page){
      res.redirect('/');
    }
    else{
    res.render('index',{
    title:page.title,
   content:page.content
  })  
  }
  })
  .catch((err) => {
    console.log(err);
  })
});
//Exports
module.exports=router;
