            var express = require('express');
            var router = express.Router();
            var expressValidator = require('express-validator');
            var bodyParser=require('body-parser');
            var models=require('../models');
            var mkdirp=require('mkdirp');
            var fs=require('fs-extra');
            var resizeImg=require('resize-img');


              // Get Product model
            var Product = require('../models/product');

                // Get Product model
                var Category = require('../models/category');

                    /*
                    * Get products indexes at the Home Page
                    */

                    router.get('/',function(req,res){
                        
                        var count;

                        models.Product.count(function(c){
                            count=c;
                        })
                        //models.product.find
                        models.Product.findAll({
                            order: [
                                ['price', 'ASC']
                            ],
                        }) 
                        .then(function(products){
                            // res.json(products);
                            res.render('admin/products',{
                                products:products,
                                count:count
                            });
                            // res.json(products);
                        });
                    });
            
                        /*
                        * GET add product
                        */
            router.get('/add-product', function (req, res) {

                var title = "";
                var desc = "";
                var price = "";
                
                models.Category.findAll({
                    attributes:['id','title','slug']
                }).then((categories) =>{
                    // res.json(categories);
                    //  console.log(categories);
                    res.render('admin/add_product', {
                        title: title,
                        desc: desc,
                        categories: categories,
                        price: price
                    });
              
                });
         });

                    /*
                    * POST add Product 
                    */
                    router.post('/add-product', function (req, res) {
        
                        //If the image file is not Defined and not meet the 
                        //Requirement of Express Validator MiddleWare Then make it
                        //Undefined otherwise the defined type of Image String

                        var imageFile=typeof req.files.image !=="undefined" ?
                        req.files.image.name :" ";

                        req.checkBody('title', 'Title must have a value.').notEmpty();
                        req.checkBody('desc', 'Description must have a value.').notEmpty();
                        req.checkBody('price', 'Price must have a value.').isDecimal();
                        req.checkBody('image', 'you must Upload an Image.').isImage(imageFile);
                        
                        var title = req.body.title;
                        var slug = title.replace(/\s+/g, '-').toLowerCase();
                        var desc=req.body.desc;
                        var price=req.body.price;
                        var category=req.body.category;
                            

                        var errors = req.validationErrors();
        
                        if (errors) {
                            models.Category.findAll({
                                attributes:['id','title','slug']
                            }).then((categories) => {
                                res.render('admin/add_product', {
                                    errors:errors, 
                                    title: title,
                                    desc: desc,
                                    categories: categories,
                                    price: price
                                });
                            });
                        } 
                        else {
                        models.Product.findOne({
                            where :{slug:slug}
                            })
                
                                var price2=parseFloat(price).toFixed(2);
                                    
                                    models.Product.create({
                                        title: title,
                                        slug: slug,
                                        desc:desc,
                                        price:[price2],
                                        category:category,
                                        images:imageFile
                                    })
                                    
                                        .then((product)=>{
                                
                                 mkdirp('/public/product_images/product_images/'+product.id,function(err){
                                     return console.log(err);
                                 });          
                                 mkdirp('/public/product_images/product_images/'+product.id+'/gallery',function(err){
                                    return console.log(err);
                                });
                                mkdirp('/public/product_images/'+product.id+'/gallery/thumbs',function(err){
                                    return console.log(err);
                                });
                                if (imageFile != "") {
                                    var productImage = req.files.image;
                                    var path = '/public/product_images/product_images/' + product.id + '/' + imageFile;
            
                                    productImage.mv(path, function (err) {
                                        return console.log(err);
                                    });
                                }
                                
                                        req.flash('success', 'Product added!');
                                        res.redirect('/admin/products');
                                    })
                                    .catch((err) => {
                                    console.log(err);
                                    })
                                }
                            });

                         /*
                        * GET add Product
                        */
            router.get('/edit-product/:id', function (req, res) {

                var errors;
                var Id=req.params.id;
                if(req.session.errors) errors=req.session.errors;
                req.session.errors=null;

                models.Category.findAll({
                    attributes:['id','title','slug']
                }).then((categories) => {
                    models.Product.findOne({
                        where:{id:Id}
                    }).then((p) =>{
                        var galleryDir='public/product_images/'+p.id+'/gallery';
                        var galleryImages=null;
                        
                        fs.readdir(galleryDir,function(err,files){
                            if(err){
                                console.log(err);
                            }
                            else{
                                galleryImages=files;
                                res.render('admin/edit_product', {
                                    errors:p.errors, 
                                    title: p.title,
                                    desc: p.desc,
                                    categories:categories,
                                    category:p.category.replace(/\s+/g, '-').toLowerCase(),
                                    price:p.price,
                                    images:p.images,
                                    galleryImages:galleryImages,
                                    id:p.id
                                });
                            }
                        })
                    })
                });

            });

                    /*
                    * POST Edit Product
                    */
                    
                   router.post('/edit-product/:id', function (req, res) 
                   {
                    var imageFile=typeof req.files.image !=="undefined" ?   req.files.image.name :" "; 

                    req.checkBody('title', 'Title must have a value.').notEmpty();
                    req.checkBody('desc', 'Description must have a value.').notEmpty();
                    req.checkBody('price', 'Price must have a value.').isDecimal();
                    req.checkBody('images', 'you must Upload an Image.').isImage(imageFile);
                    
                    var title = req.body.title;
                    var slug = title.replace(/\s+/g, '-').toLowerCase();
                    var desc=req.body.desc;
                    var price=req.body.price;
                    var category=req.body.category;
                    var images=req.body.image;
                    var id=req.params.id;
                                
                    var values={
                    title :title,
                    slug :slug,
                    desc:desc,
                    price:price,
                    category:category,
                    images:imageFile,
                    id:id,
                    };

                    options={multi:true};                    
                    var errors = req.validationErrors();
                    
                    var condition={
                        where:
                        {id:req.params.id}
                    };
                    
                        models.Product.update(values,{...condition,...options})  
                        .then((p)=> {
                          
                            if (imageFile != " ")
                            {
                               images = imageFile;
                            }
          
                            if(imageFile!=" ")
                            {
                                if(images!=" ")
                                {
                                    fs.remove('public/product_images/' +id +'/' +images,function(err){
                                        if(err)
                                        {
                                            console.log(err);
                                        }
                                    })
                                }           
                            }
                           
                            var productImage = req.files.images;
                            var path = 'public/product_images/' + id + '/' + imageFile;
      
                            productImage.mv(path, function (err)  {
                                return console.log(err);
                            });
                        })   
                        req.flash('success', 'Product edited!');
                        res.redirect('/admin/products');
          });
                           /*
                            *  POST PRODUCT GALLERY
                            */

                           router.post('/product-gallery/:id',function(req,res){

                            var productImage=req.files.file;
                            var id=req.params.id;
                            var path='public/product_images/' +id+ '/gallery/' + req.files.file.name;
                            var thumbsPath = 'public/product_images/' + id + '/gallery/thumbs/' + req.files.file.name;

                    
                            productImage.mv(path, function (err) {
                                if (err)
                                    console.log(err);

                                    resizeImg(fs.readFileSync(path), {width: 100, height: 100}).then(function (buf) {
                                        fs.writeFileSync(thumbsPath, buf);
                                    });
                            });

                            res.sendStatus(200);

                        });

                             /*
                            * Get Delete Image
                            */

                    router.get('/delete-image/:images',function(req,res){


                        var originalImage='public/product_images/' +req.query.id+ '/gallery/' + req.params.images;
                        var thumbsImage='public/product_images/' +req.query.id+ '/gallery/thumbs' + req.params.images;
                        
                        fs.remove(originalImage,function(err){
                            if(err) console.log(err);
                            else{
                                fs.remove(thumbsImage,function(err){
                                    if(err) console.log(err);
                                    else{
                                        req.flash('success','Image Deleted');
                                        res.redirect('/admin/products/edit-product/'+req.query.id);
                                    }
                                });
                            }
                        });
                        // models.Page.destroy({
                        //     where:{id:req.params.id}
                        // })
                        // .then(function(page){
                        //     req.flash('success','Page Deleted');
                        //     res.redirect('/admin/pages/');
                        // });
                        
                    });

                    /*
                    *       Get Delete Product
                    *
                    */
                   router.get('/delete-product/:id',function(req,res){

                    var Id=req.params.id;
                    var path='/public/product_images/'+Id;
                    fs.remove(path,function(err){
                        if(err)  console.log(err);
                        else{
                            models.Product.destroy({
                                where:{id:Id}
                            })
                            .then(function(Product){
                                req.flash('success','Product Deleted');
                                res.redirect('/admin/products/');
                            });
                        }
                    })
                });




                    module.exports = router;
