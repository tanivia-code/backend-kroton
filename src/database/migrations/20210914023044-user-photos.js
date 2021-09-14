'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'photo_id',
      
    )


  },

  down: queryInterface => {
    return queryInterface.dropTable('')
  }
};
