'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  School.init({
    name: DataTypes.STRING,
    sport1: DataTypes.STRING,
    sport2: DataTypes.STRING,
    sport3: DataTypes.STRING,
    region: DataTypes.STRING,
    minAct: DataTypes.INTEGER,
    schoolID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};