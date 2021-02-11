'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sport1: {
        type: Sequelize.STRING
      },
      sport2: {
        type: Sequelize.STRING
      },
      sport3: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      minAct: {
        type: Sequelize.INTEGER
      },
      schoolID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schools');
  }
};