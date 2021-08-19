'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.Date,
        allowNull: false,  
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: '',
        onDelete: '',
        allowNull: true,
      },
      colaborator_id: {},
      canceled_at: {},
      create_at: {},
      updated_at: {},
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('appointments');
  }
};
