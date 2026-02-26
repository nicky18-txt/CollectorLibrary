'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Autores, {
        foreignKey: 'autor_id'
      });
      this.hasOne(models.Reading_status, {
        foreignKey: 'book_id'
      });
    }
  }
  Books.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    publication_year: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    page_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};