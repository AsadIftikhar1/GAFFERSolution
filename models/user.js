'use strict';
var bcrypt=require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.INTEGER
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};