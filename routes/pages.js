var express=require('express');
var router=express.Router();

//Routes
//Routes for user
router.get('/',function(req,res){
  res.render('index');
  title:'Home'
});
//Exports
module.exports=router;
