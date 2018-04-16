var express=require('express');
var router=express.Router();
var expressValidator = require('express-validator');
var bodyParser=require('body-parser');
var mysql=require('mysql');


//Get Page model
var Page=require('../models/page');
console.log(Page);

/*
* GET PAGES INDEX
*/

 router.get('/',function(req,res){
   Page.find({}).sort({sorting: 1}).exec(function(err,pages){
    res.render('admin/pages',{
      pages:pages
    });
   });
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
  var slug=req.body.slug.replace(/\s+/g, '-').toLowerCase();
  if(slug==" ")slug=title.replace(/\s+/g, '-').toLowerCase();

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
      Page.findOne({slug:slug},function(err,page){
        if(page){
          req.flash('danger','Page slug Already Exist,');
          res.render('admin/add_page',{

            title:title,
            slug:slug,
            content:content
          });
        }
        else{
            var page=new Page({
              title:title,
              slug:slug,
              content:content,
              sorting:100
            });
            page.save(function(err){
              if(err) return console.log(err);

              req.flash('success','Page Added Successfully!!');
              res.redirect('/admin/pages');
            });
        }
      });

  }

});
//Exports
module.exports=router;
