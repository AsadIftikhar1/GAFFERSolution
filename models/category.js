'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  //  Category.hasMany(models.Product,{
  //   foreignKey:'categoryid',
  //  });
  };
  return Category;
};