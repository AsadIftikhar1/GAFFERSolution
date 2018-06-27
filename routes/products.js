var express=require('express');
var router=express.Router();
var fs=require('fs-extra');
var models=require('../models');
var Category= require('../models/category');
var Product= require('../models/product');



//TO SHOW ALL of the PRODUCT
router.get('/',function(req,res){
  var slug=req.params.slug;
  models.Product.findAll({
   
  })
  .then(function(products){
   
    res.render('all_products',{
    title:'All products',
    products:products
  })  
})
  .catch((err) => {
    console.log(err);
  })
});


//Routes for PRoducts By Category
router.get('/:category',function(req,res){
  
  var categorySlug=req.params.category;

  models.Category.findOne({
   where:{title:categorySlug}
  })
  .then(function(c){
   models.Product.findAll({
     where:{category:categorySlug}
  })
   .then(function(products){
    // res.render('cat_products',{
    // title:c.title,
    // products:products
  // })  
  res.json(products);
})
  })
  .catch((err) => {
    console.log(err);
  })

});

//GET Products DEtails
router.get('/:category/:product',function(req,res){
  
  var galleryImages=null;

  models.Product.findOne({
    where:{slug:req.params.product}
  })
  .then(function(product){
    var galleryDir='public/product_images/' + product.id + '/gallery';
    fs.readdir(galleryDir,function(files){
      galleryImages=files;

      res.render('product',{
        title:product.title,
        p:product,
        galleryImages:galleryImages,
    

      })
    })
  })

});


//Exports
module.exports=router;
