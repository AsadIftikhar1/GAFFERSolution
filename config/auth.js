exports.isUser=function(req,res,next){
    if(req.isAuthenticated()){
     next();
    }
    else{
        req.flash('danger','Please Login');
        res.redirect('http://localhost:4200/login');
    }
}