'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option_unique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Option_unique.init({
    id: DataTypes.INTEGER,
    texto_respuesta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Option_unique',
  });
  return Option_unique;
};