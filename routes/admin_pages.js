var express=require('express');
var router=express.Router();
var expressValidator = require('express-validator');


/*
* GET PAGES INDEX
*/

 router.get('/',function(req,res){
   res.send('admin area');
 });
 router.get('/admin/dashboard',function(req,res){
   res.render('admin/dashboard');
 });


/*
** GET ADD PAGE
*/
 router.get('/add-page',function(req,res){
   var title="";
   var slug="";
   var content="";


   res.render('admin/add_page',{
      title:title,
      slug:slug,
      content:content

   });
 });


//POST ADD page
router.post('/add-page',function(req,res){

  req.checkBody('title','Title must have a body.').notEmpty();
  req.checkBody('content','Content must have a body.').notEmpty();

  var title=req.body.title;
  var slug=req.body.slug.replace(/ \s+/g, '-').toLowerCase();
  if(slug==" ")slug=title.replace(/ \s+/g, '-').toLowerCase();

  var content=req.body.content;


  var errors=req.validationErrors();

  if(errors){
    res.render('admin/add_page',{
      errors:errors,
      title:title,
      slug:slug,
      content:content
    });
  }
  else{
    console.log('success');
  }

});
//Exports
module.exports=router;
