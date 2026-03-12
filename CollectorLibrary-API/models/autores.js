'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Books, {
        foreignKey: 'autor_id',
        as: 'books'
      });
    }
  }
  Autores.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autores',
  });
  return Autores;
};