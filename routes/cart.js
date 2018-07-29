var express=require('express');
var router=express.Router();
var Product = require('../models/product');
var expressValidator = require('express-validator');            
var models=require('../models');
const paypal=require('paypal-rest-sdk');
var bodyParser=require('body-parser');
const stripe=require('stripe')('sk_test_INJvZWiP2ctnB2tzWvUwB1jo');




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

      //  res.json(req.session.cart);
  // req.flash('success', 'Product added!');
  res.redirect('back');
});

});


/*
 * GET checkout page
 */
router.get('/checkout', function (req, res) {

  if (req.session.cart && req.session.cart.length == 0) {
      delete req.session.cart;
      res.redirect('/cart/checkout');
  } else {
      res.render('checkout', {
          title: 'Checkout',
          cart: req.session.cart
      });
  }

});

/*
* GET update product
*/
router.get('/update/:product', function (req, res) {

  var slug = req.params.product;
  var cart = req.session.cart;
  var action = req.query.action;

  for (var i = 0; i < cart.length; i++) {
      if (cart[i].title == slug) {
          switch (action) {
              case "add":
                  cart[i].qty++;
                  break;
              case "remove":
                  cart[i].qty--;
                  if (cart[i].qty < 1)
                      cart.splice(i, 1);
                  break;
              case "clear":
                  cart.splice(i, 1);
                  if (cart.length == 0)
                      delete req.session.cart;
                  break;
              default:
                  console.log('update problem');
                  break;
          }
          break;
      }
  }

  // req.flash('success', 'Cart updated!');
  res.redirect('/cart/checkout');

});

/*
 * GET All Products Clear
 */
router.get('/clear', function (req, res) {
   delete req.session.cart;
  res.redirect('/cart/checkout');

});

paypal.configure({
    'mode':'sandbox',
    'client_id':'AQ6-iukrxSP8vM0XuXHQUxT4v0Cz3sC51O3Ozt-tTvtll3qil1-YrcGUm0oofRNMCsIeqshJ_456of-I',
    'client_secret':'ENmK2eH-rvKztpj0E54-xk-7YKP37UoKQUT8reSkbHsOlh759qbMO80gqGqO3O3orbZ-6-x2_i1nYTiL'
  })

//PayPal Route
router.post('/checkout/pay',function(req,res){
    var title=req.body.title;
    var price=req.body.price;
    var qty=req.body.qty;

  var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "/success",
            "cancel_url": "/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": title,
                    "sku": "001",
                    "price":parseFloat(price).toFixed(2) ,
                    "currency": "USD",
                    "quantity":qty 
                }]
            },
            "amount": {
                "currency": "USD",
                "total": parseFloat(price).toFixed(2)
            },
            "description": "This is the payment description."
        }]
    };

    function handleError(error) {
        console.log(error);
    }
    
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
		console.log(error);
		handleError(error);
	} else {
            // console.log("Create Payment Response");
            // console.log(JSON.stringify(payment));
            // res.send('test');
            for(let i=0;i<payment.links.length; i++){
                if(payment.links[i].rel === 'approval_url'){
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
})

  //STRIPE PAYMENT
  router.post('/checkout/stripe',(req,res)=>{
  var amount=req.body.price;
  var description=req.body.title;
  var qty=req.body.qty;

//   console.log(req.body);
  stripe.customers.create({
    email:req.body.stripeEmail,
    source:req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
      amount,
      description,
      currency:'USD',
      customer:customer.id

  }))
.then(charge=>res.render('success'));
  })


//Exports
module.exports=router;
