            var express = require('express');
            var router = express.Router();
            var expressValidator = require('express-validator');
            var bodyParser=require('body-parser');
            var models=require('../models');


              // Get Categories model
            var Category = require('../models/category');

                    /*
                    * Get All the Categories on the home page
                    */

                    router.get('/',function(req,res){

                        models.Category.findAll({
                            order: [
                                ['id', 'ASC']
                            ],
                        }).then(function(categories){
                            res.render('admin/categories',{
                                categories:categories
                            });
                        }).catch(function(err){
                            console.log(err);
                        });
                    });
            
                        /*
                        * GET add Category whenever the add-category method is called from Button
                        */
            router.get('/add-category', function (req, res) {

                var title = "";
         
                res.render('admin/add_category', {
                    title: title,
                    
                });

            });

            /*
            * POST add Category
            */
            router.post('/add-category', function (req, res) {

                req.checkBody('title', 'Title must have a value.').notEmpty();

                var title = req.body.title;
                var slug = title.replace(/\s+/g, '-').toLowerCase();
              
                var errors = req.validationErrors();

                if (errors) {
                    res.render('admin/add_category', {
                        errors: errors,
                        title: title,
                    });
                } else {
                models.Category.findOne({
                    where :{slug:slug}
                    })
                            models.Category.create({
                                title: title,
                                slug: slug
                            })
                            
                                .then((category)=>{
                        
                                req.flash('success', 'Category added!');
                                res.redirect('/admin/categories');
                            })
                            .catch((err) => {
                            console.log(err);
                            })
                        }
                    });
            //                 /*
            //                 *
            //                 *    POST REORDER PAGES AGAIN COPY THE GET METHOD 
            //                 */
                    
                    
            //         router.get('/reorder-pages',function(req,res){

            //             var ids=req.body.id['id[]'];
            //             var count=0;

                        
            //             for(var i=0; i<ids.length; i++)
            //             {
            //                 var id=ids[i];
            //                 count++;
            //             (function(count){
            //                 models.page.find({
            //                     where:{
            //                         id:req.params.id
            //                     }
            //                 })
            //                     .then(function(page){
            //                         page.sorting=count;
            //                     })
            //                     .catch(function(err){
            //                         console.log(err);
            //                     })
            //                 })(count);
            //                 }
            //             });
                    

                        /*
                        * GET Editing Category
                        */

                        router.get('/edit-category/:id', function (req, res) {

                        
                            models.Category.findOne({
                                where: {
                                    id:req.params.id
                                }         
                            })
                            .then(function(category){
                                id=category.id,
                                title=category.title,
                                slug=category.slug
                            })
                            .then(function(){
                                res.render('admin/edit_category');
                            })
                                .catch(function(err){
                                console.log(err);
                                
                        })
                    });

                    /*
                    * POST Edit Page
                    */
                    
                    router.post('/edit-category/:id', function (req, res) {

                    req.checkBody('title', 'Title must have a value.').notEmpty();
                   
                    var title = req.body.title;
                    
                    var slug = title.replace(/\s+/g, '-').toLowerCase();
                    
                    var Id = req.body.id;
                    
                    var condition={
                        where:
                        {id:Id}
                    };
                    var values={
                        title:req.body.title,
                       
                    };
                    options={multi:true};
                    var errors = req.validationErrors();

                    if (errors) {
                        res.render('admin/edit_category', {
                            errors: errors,
                            title: title,
                            id:id
                        });
                    } else {
                    
                        models.Category.update(values,{...condition,...options})  //ES6 sprade operator       

                            .then((cat) => {
                                req.flash('success', 'Category Updated!');
                                res.redirect('/admin/categories/edit-category/' +id);
                            })
                            .catch(function(err){
                                console.log(err);
                            })
                        }
                        });
                
                            /*
                            * Get Delete Category model 
                            */

                    router.get('/delete-category/:id',function(req,res){

                    
                        models.Category.destroy({
                            where:{id:req.params.id}
                        })
                        .then(function(page){
                            req.flash('success','Category Deleted');
                            res.redirect('/admin/categories/');
                        });
                        
                    });
                
            // Exports
            module.exports = router;
