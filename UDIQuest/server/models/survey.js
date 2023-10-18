'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Survey.belongsTo(models.pollsters,{
        foreignKey:'cedula_encuestador',
        target_Key: 'id_encuestador'
      })
    }
  }
  Survey.init({
    id: DataTypes.INTEGER,
    id_encuestador: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    fecha_creacion: DataTypes.DATE,
    fecha_activacion: DataTypes.DATE,
    fecha_desactivacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Survey',
  });
  return Survey;
};