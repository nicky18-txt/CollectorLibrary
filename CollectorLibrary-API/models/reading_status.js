'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reading_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Books, {
        foreignKey: 'book_id'
      });
    }
  }
  Reading_status.init({
    status: DataTypes.STRING,
    date_started: DataTypes.DATE,
    date_finished: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reading_status',
  });
  return Reading_status;
};