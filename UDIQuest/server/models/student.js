'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    cedula_estudiante: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    sede: DataTypes.STRING,
    programa_academico: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};