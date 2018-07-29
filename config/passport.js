var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var models=require('../models'); 
var bcrypt = require('bcryptjs');
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport) {

    passport.use('local',new LocalStrategy(function (username, password, done) {

         models.User.findOne({
             where:{
                 username: username
                }
         })
         .then(function(user) {
            
            if (!user) {
                return done(null, false, {
                    message: 'No user found!'
                });
            }

            bcrypt.compare(password, user.password, function (err, isMatch) {
                if (err)
                    console.log(err);

                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Wrong password.'});
                }
            });
         });
    }));

    
 passport.serializeUser(function(user, done) {
    done(null, user.id);
});


    // used to deserialize the user
    passport.deserializeUser(function(id, done) {

            models.User.findOne({
                
                where:{ id:id }
            })
            .then(function(err,user) {

                done(err,user);
                });
        });
     }