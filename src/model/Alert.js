const { Model, DataTypes } = require("sequelize");
const db = require("../database/database");

class Alert extends Model {}

Alert.init(
  {
    date: DataTypes.STRING,
    event: DataTypes.STRING,
    damage: DataTypes.NUMBER,
  },
  {
    sequelize: db,
    modelName: "alert",
    timestamps: false,
  }
);

module.exports = Alert;
