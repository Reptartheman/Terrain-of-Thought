const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init(
  {
    input: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    park_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'park',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'journal',
  },
);

module.exports = Journal;