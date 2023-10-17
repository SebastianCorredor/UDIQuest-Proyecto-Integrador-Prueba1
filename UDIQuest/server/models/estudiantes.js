'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudiantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estudiantes.init({
    cedula_estudiante: DataTypes.INTEGER,
    correo_electronico: DataTypes.STRING,
    sede: DataTypes.STRING,
    programa_academico: DataTypes.STRING,
    password: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'estudiantes',
  });
  return estudiantes;
};