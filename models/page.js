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




//Change delete if wrong happens from here
//Sorry for this it belongs to Migrations of this Models
// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('page', [{
//       title:'asad',
//       slug:'asad',
//       content:'content',
//       sorting:0
//       }], {});
//   }
//
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('page', null, {});
//   }
// };
