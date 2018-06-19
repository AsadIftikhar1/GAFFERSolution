var express=require('express');
var router=express.Router();
var User = require('../models/user');
var models=require('../models');
var passport=require('passport');
var bcrypt=require('bcryptjs');


//Get Register
router.get('/register',function(req,res){
res.render('register',{
  title:'Register'
})
});

/*
* Register Post
*/

router.post('/register',function(req,res){

     var name=req.body.name;
     var email=req.body.email;
     var username=req.body.username;
     var password=req.body.password;
     var password2=req.body.password2;
      
     models.User.findOne({
       where:{username:username}
     }).then(function(copyuser){
       if(copyuser){
         console.log('User already exist');
          redirect('/users/login');
       }
       else{
        var user={
          name: name,
          email: email,
          username: username,
          password: password,
          admin: 0
        };
  
    //  res.json(user);
    bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(user.password,salt,function(err,hash){
        
        user.password=hash;

          models.User.create(user).then(function(user){
            res.json(user);
          })
        
        
     
          console.log('You are now registered');
          res.redirect('/admin/pages')
        
      
    })
  })
       }
     })
        
})

/*
* Get Login
*/
router.get('/login',function(req,res){
  if(res.locals.user) res.redirect('/');

  res.render('login',{
    title:'log in'
  })

})

/*
*Post Login
*/
router.post('/login',function(req,res,next){
 
  passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/admin/pages',
    failureFlash:true
  })(req,res,next);

})

//Exports
module.exports=router;
