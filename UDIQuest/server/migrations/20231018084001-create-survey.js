'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_encuestador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pollsters',
          key: 'cedula_encuestador'
        }
      }
      ,
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        allowNull: true,
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      fecha_creacion: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fecha_activacion: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fecha_desactivacion: {
        allowNull: false,
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Surveys');
  }
};