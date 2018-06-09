'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    desc: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    images: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  
  };
  return Product;
};