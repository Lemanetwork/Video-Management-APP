const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Like",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { timestamps: false }
  );
};
