'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unique_question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Unique_question.init({
    id: DataTypes.INTEGER,
    texto_pregunta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Unique_question',
  });
  return Unique_question;
};