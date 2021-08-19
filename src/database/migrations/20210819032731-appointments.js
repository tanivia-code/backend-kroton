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
            type: Sequelize.DATE,
            allowNull: false,
          },
          user_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
          },
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