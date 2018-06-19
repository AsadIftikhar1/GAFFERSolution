var express=require('express');
var router=express.Router();
var Product = require('../models/product');
var models=require('../models');



//GEt add product to cart

router.get('/add/:product',function(req,res){
  
  var slug=req.params.product;

  models.Product.findOne({
    where:{slug:slug}
  })
  .then(function(p){
    if(typeof req.session.cart=="undefined"){
      req.session.cart=[];
      req.session.cart.push({
        title:slug,
        qty:1,
        price:parseFloat(p.price).toFixed(2),
        image:'/product_images/'+p.id+'/'+p.images

      })
      
    }else {
      var cart = req.session.cart;
      var newItem = true;

      for (var i = 0; i < cart.length; i++) {
          if (cart[i].title == slug) {
              cart[i].qty++;
              newItem = false;
              break;
          }
      }

      if (newItem) {
          cart.push({
              title: slug,
              qty: 1,
              price: parseFloat(p.price).toFixed(2),
              image: '/product_images/' + p.id + '/' + p.images
          });
      }
  }

//        console.log(req.session.cart);
  req.flash('success', 'Product added!');
  res.redirect('back');
});

});

//GEt CheckOut Page
router.get('/checkout',function(req,res){
  res.render('checkout',{
    title:'Checkout',
    cart:req.session.cart
  })
})


//Exports
module.exports=router;
