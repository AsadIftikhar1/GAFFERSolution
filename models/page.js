'use strict';
module.exports = (sequelize, DataTypes) => {
  var page = sequelize.define('page', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.STRING,
    sorting:DataTypes.INTEGER
  }, {});
  page.associate = function(models) {
    // associations can be defined here
  };
  return page;
};
var Page=module.exports=sequelize.model('Page','PageSchema');
