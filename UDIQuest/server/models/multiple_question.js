'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Multiple_question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Multiplee_question.init({
    id: DataTypes.INTEGER,
    texto_pregunta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Multiplee_question',
  });
  return Multiple_question;
};