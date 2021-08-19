'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {},
      date: {},
      user_id: {},
      collaborator_id: {},
      canceled_at: {},
      created_at: {},
      updated_at: {},
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('appointments');
  }
};