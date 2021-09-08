'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductoSucursals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Productos",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      sucursalId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sucursals",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      stock: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductoSucursals');
  }
};