'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      
      cedula_estudiante: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correo_electronico: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contraseña: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sede: {
        allowNull: false,
        type: Sequelize.STRING
      },
      programa_academico: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Students');
  }
};